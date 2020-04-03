import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Drawers from './Drawers';
import Time from './Time';
import HomePage from '../../landingPage/components/HomePage';
import Button from '@material-ui/core/Button';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';

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


class RoomDrawTime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 0
    }
  }
  handleOnClick = e => {
    e.preventDefault();
    this.setState({
      step:1
    })
  }
  render() {
    switch(this.state.step) {
      case 1:
        return (
          <HomePage />
        )
    default:
        return (
          <MuiThemeProvider>
            <React.Fragment>
              <Drawers />
              <br/><br/><br/>
              <Time
              netid={this.props.netid}
              first={this.props.first}
              last={this.props.last}
              draw={this.props.draw}
              group={this.props.group}
              meal={this.props.meal}
              time={this.props.time}/>
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

export default RoomDrawTime;
