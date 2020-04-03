import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import SpecialDrawer from '../SpecialDrawer';
import PrincetonLogo from '../../../components/PrincetonLogo';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Accept from '../all/Accept';
import Size from '../all/Size';
import Applied from '../all/Applied';
import '../Form.css';
import { withStyles } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';
import axios from 'axios';

const OrangeRadio = withStyles({
  root: {
    color: orange[300],
  }
})(props => <Radio color="default" {...props} />);

// Overrides primary color of button
const ColorButton = withStyles(theme => ({
  root: {
    backgroundColor: "#f58025",
    "&:hover": {
      backgroundColor: orange[400]
    }
  }
}))(Button);


class Rockefeller extends Component {
  constructor(props) {
    super(props);
    this.state = {
      draw:'',
      draws: [],
      groups: [], // user's groups
      group: '',
      find: '',
      length:'',
      netids: []
    }
  }

  handleChange = input => e => {
    this.setState({ ...this.state, [input]: e.target.value});
  };

  handleOnClick = async (e) => {
    e.preventDefault();

    await axios.get(`http://localhost:4000/applications/${this.props.netid}`)
      .then(response => {
        this.setState({
          draws: response.data.draw,
          groups: response.data.group
        })
      })
      .catch((error) => {
        console.log(error)
      })
    // if draw is selected, check if they already completed application
    if (this.state.draw !== '') {
      this.setState({
        find: this.state.draws.includes(this.state.draw)
      })

      // if they did not apply
      if (!this.state.find) {
        // check if the length of the draw is the same as the group
        this.setState({
          length: this.state.draws.length === this.state.groups.length
        })

        // if the lengths are not the same means they were added to group
        if (!this.state.length) {
          // find draw that associates with groupid
          this.state.groups.map(group => {
            // finds one user with that id and checks if their college matches user's college
            return axios.get(`http://localhost:4000/applications/group/${group}/${this.props.netid}`)
              .then(response => {
                  this.setState({
                    group: response.data.group // id associated with that college gets sent as props to accepted page
                  })
              })
           })
        }
      }
    }
  }

  render() {
    const CLASS = this.props.class
    const COLLEGE = this.props.college
      switch(this.state.find) {
        case true:
          return (
            <Applied college={COLLEGE}/>
          )
        case false:
          switch(this.state.length) {
            case false:
              return (
                <Accept class={CLASS} netid={this.props.netid} draw={this.state.draw} college={COLLEGE} group={this.state.group}/>
              )
            case true:
              return (
                <Size class={CLASS} draw={this.state.draw} college={COLLEGE} netid={this.props.netid}/>
            )
            default: console.log('')
          }
        default:
        return (
          <MuiThemeProvider>
            <React.Fragment>
              <PrincetonLogo />
              <SpecialDrawer />
              <br/><br/>
              <Typography variant="h6">
                <i>Select a Draw</i>
              </Typography>
              <br/>
              <FormControl component="fieldset">
                  <FormControlLabel
                    value="Rockefeller"
                    onChange={this.handleChange('draw')}
                    control={<OrangeRadio/>}
                    label="Rockefeller"
                    labelPlacement="end"
                  />
              </FormControl>
              <br/><br/><br/>
              <ColorButton
                  variant="contained"
                  color="primary"
                  onClick={this.handleOnClick}
              >
              Continue
              </ColorButton>
            </React.Fragment>
          </MuiThemeProvider>
        )
      }
  }
}

export default Rockefeller;
