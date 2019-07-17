import React from 'react';
import './princeton.png'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default function PrincetonLogo() {
  return (
    <MuiThemeProvider>
      <React.Fragment>
        <img
          src={require("./princeton.png")}
          alt="princeton"
          height="50"
          width="250"
          align="left"
        />

      </React.Fragment>
    </MuiThemeProvider>
  )
}
