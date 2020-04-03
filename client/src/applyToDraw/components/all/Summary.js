import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Button from '@material-ui/core/Button';
import PrincetonLogo from '../../../components/PrincetonLogo';
import SpecialDrawer from '../SpecialDrawer';
import Typography from '@material-ui/core/Typography';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';
import '../Form.css';
import axios from 'axios';
import Completion from './Completion';


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

const Names = props => (
  <div>{props.first} {props.last}<br/></div>
)

class Summary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first: '',
      last: '',
      id: '',
      names: [],
      netids: [],
      step: 0
    }
  }

  componentWillMount() {
    axios.get(`http://localhost:4000/applications/${this.props.netid}`)
      .then(response => {
        this.setState({
          first: response.data.first,
          last: response.data.last,
          id: response.data._id
        })
      })

      if (this.props.group !== 'Individual') {
        this.props.netids.map(netid => {
          return axios.get(`http://localhost:4000/applications/${netid}`)
            .then(response => {
              this.setState({
                names: [...this.state.names, response.data]
              })
            })
        })
      }
    }

  listGroupMembers() {
   return this.state.names.map((name, i) => {
          return <Names netid={name.netid} first={name.first} last={name.last} key={i} />
      })
  }

  individual() {
    if (this.props.group === 'Individual') {
      return <div>{this.props.group}</div>
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const obj = {
      meal: this.props.meal,
      draw: this.props.draw,
      group: this.state.id
    }

    // create new application
    if (this.props.group === 'Individual' || this.props.group === 'Group') {
      await axios.post(`http://localhost:4000/applications/update/${this.props.netid}`, obj)
        .then(res => {
          console.log(res.data)
        })
    }

    // update application that has been added to group
    if (this.props.group !== 'Individual' && this.props.group !== 'Group') {
      axios.post(`http://localhost:4000/applications/update/group/${this.props.netid}`, obj)
        .then(res => {
          console.log(res.data)
        })
    }

    // update groupid of people in user's group
    if (this.props.group === 'Group') {
      this.state.names.map(name => {
        axios.post(`http://localhost:4000/applications/update/groupid/${name.netid}`, obj)
          .then(res => {
            console.log(res.data)
          })
        console.log(name.netid)
        
      })
    }

    this.setState({
      step: 1
    })
  }

  render() {
    const meal = this.props.meal
    const first = this.state.first
    const last = this.state.last
    const draw = this.props.draw
    switch(this.state.step){
      case 1:
        return (
          <Completion />
        )
      default:
        return (
          <MuiThemeProvider>
            <React.Fragment>
              <PrincetonLogo />
              <SpecialDrawer />
              <br/><br/><br/>
              <Typography variant="h5">
              <i>Summary of Room Draw Application</i>
              </Typography>
              <br/><br/>
              <Typography variant="h6"><u>Name</u><br/></Typography>
              <div>{first} {last}</div>
              <br/>
              <Typography variant="h6"><u>Draw</u><br/></Typography>
              <div>{draw}</div>
              <br/>
              <Typography variant="h6"><u>Group</u></Typography>
              {this.listGroupMembers()}
              {this.individual()}
              <br/>
              <Typography variant="h6"><u>Meal</u><br/></Typography>
              <div>{meal}</div>
              <br/><br/>
              <ColorButton
                variant="contained"
                color="primary"
                className={useStyles.margin}
                onClick={this.handleSubmit}
              >
                Submit Application
              </ColorButton>
            </React.Fragment>
          </MuiThemeProvider>
        )
    }
  }
}

export default Summary;
