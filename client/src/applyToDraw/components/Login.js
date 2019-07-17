import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import Button from '@material-ui/core/Button';
import PrincetonLogo from '../../components/PrincetonLogo';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import NavBar from './NavBar';
import Butler from './sophomore/Butler';
import Forbes from './sophomore/Forbes';
import Mathey from './sophomore/Mathey';
import Rockefeller from './sophomore/Rockefeller';
import Whitman from './sophomore/Whitman';
import Wilson from './sophomore/Wilson';
import Alldraw from './junior_senior/Alldraw';
import HomePage from '../../landingPage/components/HomePage';
import './Form.css';
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

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      netid: '',
      password: '',
      NET_ID: '',
      CLASS: -1,
      COLLEGE: '',
      netError: '',
      passwordEmpty: ''
    }
  }

  // Handle fields change
  handleChange = input => e => {
    this.setState({ ...this.state, [input]: e.target.value});
  };

  // Handle onClick
  handleOnClick = async (e) => {
    e.preventDefault();

    await axios.get(`http://localhost:4000/applications/${this.state.netid}`)
      .then(response => {
        this.setState({
          NET_ID: response.data.netid,
          CLASS: response.data.class,
          COLLEGE: response.data.college
        })
      })
      .catch((error) => {
        console.log(error)
      })

    this.setState({
      netError:"",
      passwordEmpty: ""
    })

    if (this.state.netid === '' && this.state.password === '') {
      this.setState({
        netError: "Please Provide a University NetID",
        passwordEmpty: "Please Provide a Password"
      })
    }

    else if (this.state.netid === '') {
      this.setState({
        netError: "Please Provide a University NetID"
      })
    }

    else if (this.state.password === '') {
      this.setState({
        passwordEmpty: "Please Provide a Password"
      })
    }

    else if (this.state.netid !== this.state.NET_ID) {
      this.setState({
         netError: "NetID is Incorrect"
      })
    }
  }

  render() {
    const { netid, password, netError, passwordEmpty} = this.props;

    switch(this.state.CLASS) {
      case 22:
        switch(this.state.COLLEGE) {
          case "Butler":
            return (
              <Butler netid={this.state.netid} class={this.state.CLASS} college={this.state.COLLEGE}/>
            )
          case "Forbes":
            return (
              <Forbes netid={this.state.netid} class={this.state.CLASS} college={this.state.COLLEGE}/>
            )
          case "Mathey":
            return (
              <Mathey netid={this.state.netid} class={this.state.CLASS} college={this.state.COLLEGE}/>
            )
          case "Rockefeller":
            return (
              <Rockefeller netid={this.state.netid} class={this.state.CLASS} college={this.state.COLLEGE}/>
            )
          case "Whitman":
            return (
              <Whitman netid={this.state.netid} class={this.state.CLASS} college={this.state.COLLEGE}/>
            )
          case "Wilson":
            return (
              <Wilson netid={this.state.netid} class={this.state.CLASS} college={this.state.COLLEGE} />
            );
          default:
            return(
              <HomePage />
            )
        }

      case 21:
        return (
          <Alldraw netid={this.state.netid}/>
        );
      case 20:
        return (
          <Alldraw netid={this.state.netid}/>
        );
      default:
        return (
          <MuiThemeProvider>
            <React.Fragment>
              <PrincetonLogo />
              <NavBar />
              <FormControl>
                <TextField
                  hintText="Enter University NetID"
                  floatingLabelText="University NetID"
                  floatingLabelFocusStyle={{color: orange[500]}}
                  onChange={this.handleChange('netid')}
                  defaultValue={netid}
                  underlineFocusStyle={{borderColor: orange[700]}}
                />
                <FormHelperText style={{color: 'red'}}>{netError}</FormHelperText>
                <TextField
                  hintText="Enter Password"
                  floatingLabelText="Password"
                  floatingLabelFocusStyle={{color: orange[500]}}
                  onChange={this.handleChange('password')}
                  defaultValue={password}
                  underlineFocusStyle={{borderColor: orange[700]}}
                  type="password"
                />
                <FormHelperText style={{color: 'red'}}>{passwordEmpty}< /FormHelperText>
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
