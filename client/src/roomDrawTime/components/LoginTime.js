import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import Button from '@material-ui/core/Button';
import PrincetonLogo from '../../components/PrincetonLogo';
import FormControl from '@material-ui/core/FormControl';
import Drawers from './Drawers';
import RoomDrawTime from './RoomDrawTime';
import FormHelperText from '@material-ui/core/FormHelperText';
import '../../applyToDraw/components/Form.css';
import { withStyles, makeStyles} from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';
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

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  },
  underline: {
    borderBottom: '2px solid white',
  }
}));


class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      netid: '',
      password: '',
      first: '',
      last: '',
      draw: [],
      group: '',
      meal: '',
      time: {},
      netidError: '',
      passwordEmpty: '',
      step: 0
    }
  }

  // Handle fields change
  handleChange = input => e => {
    this.setState({ ...this.state, [input]: e.target.value});
  };

  // Handle onClick
  handleOnClick = async (e) => {
    e.preventDefault();
    if (this.state.netid !== '' && this.state.password !== '') {
    await axios.get(`http://localhost:4000/applications/${this.state.netid}`)
      .then(response => {
        this.setState({
          first: response.data.first,
          last: response.data.last,
          draw: response.data.draw,
          group: response.data.group,
          meal: response.data.meal,
          time: response.data.time
        })
      })
      .catch((error) => {
        console.log(error)
      })
    }
      if (this.state.first !== '') {
        if (this.state.draw.length !== 0) {
          this.setState({
            step: 1
          })
        }
      }

      if (this.state.netid === '') {
        this.setState({
          netidError: 'Please Provide a Valid NetID'
        })
      }

      if (this.state.password === '') {
        this.setState({
          passwordEmpty: 'Please Provide a Valid Password'
        })
      }
  }

  render() {
    const { netid, password } = this.props;
      switch(this.state.step){
        case 1:
          return (
            <RoomDrawTime
            netid={this.state.netid}
            first={this.state.first}
            last={this.state.last}
            draw={this.state.draw}
            group={this.state.group}
            meal={this.state.meal}
            time={this.state.time}/>
          )
        default:
          return (
            <MuiThemeProvider>
              <React.Fragment>
                <PrincetonLogo />
                <Drawers />
                <FormControl>
                  <TextField
                    hintText="Enter University NetID"
                    floatingLabelText="University NetID"
                    floatingLabelFocusStyle={{color: orange[500]}}
                    onChange={this.handleChange('netid')}
                    defaultValue={netid}
                    underlineFocusStyle={{borderColor: orange[700]}}
                  />
                  <FormHelperText style={{color: 'red'}}>{this.state.netidError}< /FormHelperText>
                  <TextField
                    hintText="Enter Password"
                    floatingLabelText="Password"
                    floatingLabelFocusStyle={{color: orange[500]}}
                    onChange={this.handleChange('password')}
                    defaultValue={password}
                    underlineFocusStyle={{borderColor: orange[700]}}
                    type="password"
                  />
                  <FormHelperText style={{color: 'red'}}>{this.state.passwordEmpty}< /FormHelperText>
              </FormControl>
              <br/><br/><br/>
              <ColorButton
                variant="contained"
                color="primary"
                className={useStyles.margin}
                onClick={this.handleOnClick}>
                Login
              </ColorButton>
            </React.Fragment>
          </MuiThemeProvider>
          )
      }
  }
}

export default Login;
