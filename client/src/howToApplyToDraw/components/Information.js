import React, { Component } from 'react';
import Drawers from './Drawers';
import PrincetonLogo from '../../components/PrincetonLogo';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Text from './Text';
import './Information.css';

class Information extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <PrincetonLogo />
          <Drawers />
          <Text />
        </React.Fragment>
      </MuiThemeProvider>
    )
  }
}

export default Information;
