import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Button from '@material-ui/core/Button';
import PrincetonLogo from '../../../components/PrincetonLogo';
import Typography from '@material-ui/core/Typography';
import NavBar from '../NavBar';
import HomePage from '../../../landingPage/components/HomePage';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';
import '../Form.css';

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

class Completion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 0
    }
  }

  handleOnClick = e => {
    e.preventDefault();
    this.setState({
      step: 1
    })
  }

  render() {
    switch(this.state.step){
      case 1:
        return (
          <HomePage />
        )
      default:
        return (
          <MuiThemeProvider>
            <React.Fragment>
              <PrincetonLogo />
              <NavBar />
              <br/><br/><br/>
              <Typography variant="h4">
              Congratulations!<br/><br/>
              </Typography>
              <Typography variant="h6">
              You've Completed Your Room Draw Application<br/>
              Click on the Button to Return Back to the Home Page
              </Typography>
              <br/><br/><br/>
              <ColorButton
                variant="contained"
                color="primary"
                className={useStyles.margin}
                onClick={this.handleOnClick}>
                Home
              </ColorButton>
            </React.Fragment>
          </MuiThemeProvider>
        )
    }
  }
}

export default Completion
