import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Button from '@material-ui/core/Button';
import PrincetonLogo from '../../../components/PrincetonLogo';
import NavBar from '../NavBar';
import Typography from '@material-ui/core/Typography';
import HomePage from '../../../landingPage/components/HomePage';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';
import '../Form.css';

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

class Applied extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: ''
    }
  }

  handleOnClickHome = e => {
    e.preventDefault();
    this.setState({
      clicked: 'clicked'
    })
  }

  render() {
    const COLLEGE = this.props.college;
    switch(this.state.clicked) {
      case '':
        return(
          <MuiThemeProvider>
            <React.Fragment>
              <PrincetonLogo />
              <NavBar />
              <br/><br/><br/>
              <Typography variant="h6">
                You have already applied to the <b>{COLLEGE}</b> draw.
                <br />
                Click the button to return back to the home page
                <br />
                where you can access the Room Draw Guide and your Room Draw Time
              </Typography>
              <br/><br/><br/>
              <ColorButton
                variant="contained"
                color="primary"
                className={useStyles.margin}
                onClick={this.handleOnClickHome}>
                Home
              </ColorButton>
            </React.Fragment>
          </MuiThemeProvider>
        )
      case 'clicked':
        return(
          <HomePage />
        )
      default: console.log('');
    }
  }
}

export default Applied;
