import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Button from '@material-ui/core/Button';
import PrincetonLogo from '../../../components/PrincetonLogo';
import SpecialDrawer from '../SpecialDrawer';
import Typography from '@material-ui/core/Typography';
import TextField from 'material-ui/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Meal from '../sophomore/sections/Meal';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';
import '../Form.css';
import axios from 'axios';

// Overrides primary color of button
const ColorButtonLight = withStyles(theme => ({
  root: {
    "&:hover": {
      backgroundColor: orange[50],
      borderColor: orange[400]

    },
    borderColor: orange[400],
    color: orange[400]

  }
}))(Button);

const ColorButton = withStyles(theme => ({
  root: {
    backgroundColor: "#f58025",
    "&:hover": {
      backgroundColor: orange[500]
    }
  }
}))(Button);

// const DeleteButton = withStyles(theme => ({
//   root: {
//     "&:hover": {
//       backgroundColor: orange[50]
//     },
//     color: orange[600]
//   }
// }))(Button);

const Names = props => (
  <Grid container justify="center">
  <List dense={true}>
    <ListItem key={props.netid}>
      <ListItemText
      primary={props.first + ' ' + props.last}
      />
    </ListItem>
  </List>
</Grid>

)

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  },
  underline: {
    borderBottom: '2px solid white',
  }
}));

class Group extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first: '',
      last: '',
      netids: [],
      count: 0,
      names: [],
      allnames:[],
      continue: '',
      error: ''

    }
  }

  // Handle fields change
  handleChange = input => e => {
    this.setState({ ...this.state, [input]: e.target.value});
  };

  // Handle adding student
  handleOnClickAdd = async (e) => {
    e.preventDefault();
    this.setState({
      error: ''
    })
    await axios.get(`http://localhost:4000/applications/name/${this.state.first}/${this.state.last}`)
      .then(response => {
        // if netid not same, same class, college, less than 9 people, not already in user's group, and not complete application y
        if (response.data.netid !== this.props.netid && response.data.class === this.props.class
          && response.data.college === this.props.college && this.state.count < 9
          && !this.state.netids.includes(response.data.netid) && !response.data.draw.includes(this.props.draw)
          && response.data.group.length === 0) {
          this.setState({
            netids: [...this.state.netids, response.data.netid],
            count: this.state.count + 1,
          })
        } else if (response.data.netid === this.props.netid) {
          this.setState({
            error: 'You cannot add yourself to a group '
          })
        } else if (response.data.class !== this.props.class) {
          this.setState({
            error: 'The student you added is not in the same class year as you'
          })
        } else if (response.data.college !== this.props.college) {
          this.setState({
            error: 'The student you added is not in the same residential college'
          })
        } else if (this.state.count > 9) {
          this.setState({
            error: 'Maximum group size reached'
          })
        } else if (this.state.netids.includes(response.data.netid)) {
          this.setState({
            error: 'You\'ve already added student to your group'
          })
        } else if (response.data.draw.includes(this.props.draw)) {
          this.setState({
            error: 'The student you added already completed their application'
          })
        } else if (response.data.group.length > 0) {
          this.setState({
            error: 'The student has already been added to a different group'
          })
        }

        this.setState({
          first: '',
          last: ''
        })
      })
      this.listNames()
      .catch((error) => {
        console.log(error);
      })
      this.setState({
        names:[]
      })
  }

  async listNames() {
    await this.state.netids.map((netid, i) => {
      return axios.get(`http://localhost:4000/applications/${netid}`)
        .then(response => {
          this.setState({
            names: [...this.state.names, response.data],
            allnames: [...this.state.allnames, response.data]
          })
      })
    })
  }

  listFull() {
    return this.state.names.map((name, i) => {
        return <Names netid={name.netid} first={name.first} last={name.last} key={i} onClick={this.handleOnClickDelete}/>
    })
  }

  listAllNames() {
    if (this.state.count > 9) {
      return this.state.allnames.map((name, i) => {
          return <Names netid={name.netid} first={name.first} last={name.last} key={i} onClick={this.handleOnClickDelete}/>
      })
    }
  }

  handleOnClickDelete = e => {
    e.preventDefault();
    console.log(e)
  }

  handleOnClickContinue = e => {
    e.preventDefault();
    if (this.state.netids.length > 0) {
      this.setState({
        continue: true
      })
    }
  }

  render() {
    const first = this.state.first;
    const last = this.state.last;

    switch(this.state.continue) {
      case true:
        return (
          <Meal
          group={this.props.group}
          netid={this.props.netid}
          netids={this.state.netids}
          draw={this.props.draw}/>
        )
      default:
        return (
          <MuiThemeProvider>
            <React.Fragment>
              <PrincetonLogo/>
              <SpecialDrawer/>
              <br/><br/>
              <Typography variant="h6">
                <i>Add Students to Your Group</i>
              </Typography>
              <FormControl>
                <TextField
                  hintText="Enter First Name"
                  floatingLabelText="First Name"
                  floatingLabelFocusStyle={{color: orange[500]}}
                  onChange={this.handleChange('first')}
                  value={first}
                  underlineFocusStyle={{borderColor: orange[700]}}
                />
                <FormHelperText style={{color: 'red'}}></FormHelperText>
                <TextField
                  hintText="Enter Last Name"
                  floatingLabelText="Last Name"
                  floatingLabelFocusStyle={{color: orange[500]}}
                  onChange={this.handleChange('last')}
                  value={last}
                  underlineFocusStyle={{borderColor: orange[700]}}
                />
                <FormHelperText style={{color: 'red'}}>{this.state.error}< /FormHelperText>
              </FormControl>
              <br/><br/>
              <ColorButtonLight
                variant="outlined"
                color="primary"
                className={useStyles.margin}
                onClick={this.handleOnClickAdd}>
                Add Student
              </ColorButtonLight>
              <br/><br/>
              {this.listFull()}
              {this.listAllNames()}
              <br/><br/>
              <ColorButton
                variant="contained"
                color="primary"
                className={useStyles.margin}
                onClick={this.handleOnClickContinue}>
                Continue
              </ColorButton>
            </React.Fragment>
          </MuiThemeProvider>
        )
    }
  }
}
export default Group;
