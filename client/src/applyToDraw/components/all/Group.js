import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Button from '@material-ui/core/Button';
import PrincetonLogo from '../../../components/PrincetonLogo';
import SpecialDrawer from '../SpecialDrawer';
import Typography from '@material-ui/core/Typography';
import TextField from 'material-ui/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';
import '../Form.css';
import axios from 'axios';

// Overrides primary color of button
const ColorButtonLight = withStyles(theme => ({
  root: {
    backgroundColor: orange[300],
    "&:hover": {
      backgroundColor: orange[200]
    }
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
      count: 0
    }
  }

  // Handle fields change
  handleChange = input => e => {
    this.setState({ ...this.state, [input]: e.target.value});
  };

  // Handle adding student
  handleOnClickAdd = e => {
    e.preventDefault();

    this.setState({
      
    })
    axios.get(`http://localhost:4000/applications/name/${this.state.first}/${this.state.last}`)
      .then(response => {
        // if class and college is the same
        if (response.data.netid !== this.props.netid && response.data.class === this.props.class
          && response.data.college === this.props.college && this.state.count < 10
          && !this.state.netids.includes(response.data.netid)) {
          this.setState({
            netids: [...this.state.netids, response.data.netid],
            count: this.state.count + 1
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })
  }


  render() {
    const first = this.state.first;
    const last = this.state.last;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          {console.log(this.state.first)}
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
              defaultValue={first}
              underlineFocusStyle={{borderColor: orange[700]}}
            />
            <FormHelperText style={{color: 'red'}}></FormHelperText>
            <TextField
              hintText="Enter Last Name"
              floatingLabelText="Last Name"
              floatingLabelFocusStyle={{color: orange[500]}}
              onChange={this.handleChange('last')}
              defaultValue={last}
              underlineFocusStyle={{borderColor: orange[700]}}
            />
            <FormHelperText style={{color: 'red'}}>< /FormHelperText>
          </FormControl>
          <br/>
          <ColorButtonLight
            variant="contained"
            color="primary"
            className={useStyles.margin}
            onClick={this.handleOnClickDelete}>
            Delete Student
          </ColorButtonLight>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <ColorButtonLight
            variant="contained"
            color="primary"
            className={useStyles.margin}
            onClick={this.handleOnClickAdd}>
            Add Student
          </ColorButtonLight>
          <br/><br/><br/>
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
export default Group;
