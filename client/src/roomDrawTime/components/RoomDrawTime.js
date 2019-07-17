import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Drawers from './Drawers';
import Time from './Time';
import Foot from '../../footer/Foot';

class RoomDrawTime extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <Drawers />
          <Time />
          <Foot />
        </React.Fragment>
      </MuiThemeProvider>
    )
  }
}

export default RoomDrawTime;
