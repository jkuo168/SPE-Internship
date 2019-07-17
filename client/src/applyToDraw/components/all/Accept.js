import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Button from '@material-ui/core/Button';
import PrincetonLogo from '../../../components/PrincetonLogo';
import SpecialDrawer from '../SpecialDrawer';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Meal from '../sophomore/sections/Meal';
import Butler from '../sophomore/Butler';
import Forbes from '../sophomore/Forbes';
import Mathey from '../sophomore/Mathey';
import Rockefeller from '../sophomore/Rockefeller';
import Whitman from '../sophomore/Whitman';
import Wilson from '../sophomore/Wilson';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';
import '../Form.css';
import axios from 'axios';

// Overrides primary color of button
const ColorButton = withStyles(theme => ({
  root: {
    backgroundColor: "#f58025",
    "&:hover": {
      backgroundColor: orange[400]
    }
  }
}))(Button);

const Netid = props => (
  <List dense={true}>
    <ListItem>
      <ListItemText
      primary={props.first + ' ' + props.last}
      />
    </ListItem>
  </List>
)

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  },
  underline: {
    borderBottom: '2px solid white',
  }
}));

class Accept extends Component {
  constructor(props) {
    super(props);
    this.state = {
      netids: [],
      group: '',
      checked: ''
    }
  }

 componentWillMount() {
  axios.get(`http://localhost:4000/applications/${this.props.netid}`)
      .then(response => {
        this.setState({
          group: response.data.group[0]
        })
        axios.get(`http://localhost:4000/applications/group/netid/${this.state.group}/${this.props.netid}`)
            .then(response => {
              this.setState({
                netids: response.data
              })
            })
      })
    this.listNetId();
  }

  listNetId () {
    return this.state.netids.map((netid, i) => {
      return <Netid first={netid.first} last={netid.last} key={i} />
   })
  }

  handleOnClickAccept = (e) => {
    e.preventDefault();
    this.setState({
      checked: true
    })
  }

  handleOnClickDecline = async (e) => {
    e.preventDefault();
    this.setState({
      checked: false
    })
    await axios.post(`http://localhost:4000/applications/delete/group/${this.props.netid}`, this.props.netid)
      .then(res => {
        console.log(res.data)
      })
  }

  render() {
    const COLLEGE = this.props.college;
    switch(this.state.checked) {
      case(true):
        return(
          <Meal />
        )
      case(false):
        switch(COLLEGE) {
          case 'Butler':
            return(
              <Butler netid={this.props.netid} college={this.props.COLLEGE}/>
            )
          case 'Forbes':
            return(
              <Forbes netid={this.props.netid} college={this.props.COLLEGE}/>
            )
          case 'Mathey':
            return(
              <Mathey netid={this.props.netid} college={this.props.COLLEGE}/>
            )
          case 'Rockefeller':
            return(
              <Rockefeller netid={this.props.netid} college={this.props.COLLEGE}/>
            )
          case 'Whitman':
            return(
              <Whitman netid={this.props.netid} college={this.props.COLLEGE}/>
            )
          case 'Wilson':
            return(
              <Wilson netid={this.props.netid} college={this.props.COLLEGE}/>
            )
          default: console.log(COLLEGE);
        }
      default:
        return(
          <MuiThemeProvider>
            <React.Fragment>
              <PrincetonLogo />
              <SpecialDrawer />
              <br/><br/><br/>
              <Typography variant="h6">
              You have been added to a group with <br/>
              </Typography>
              {this.listNetId()}
              <Typography variant="h6">
              Would you like to accept or decline joining this group?
              </Typography>
              <br/><br/><br/>
              <ColorButton
                variant="contained"
                color="primary"
                className={useStyles.margin}
                onClick={this.handleOnClickDecline}>
                Decline
              </ColorButton>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <ColorButton
                variant="contained"
                color="primary"
                className={useStyles.margin}
                onClick={this.handleOnClickAccept}>
                Accept
              </ColorButton>
            </React.Fragment>
          </MuiThemeProvider>
        )
    }
  }
}

export default Accept;
