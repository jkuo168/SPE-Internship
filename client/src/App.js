import React, { Component } from 'react';
import Login from './applyToDraw/components/Login';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './landingPage/components/HomePage';
import Information from './howToApplyToDraw/components/Information';
import RoomDrawTime from './roomDrawTime/components/RoomDrawTime';
import Error from './components/Error';
import Group from './applyToDraw/components/all/Group';
// import Accept from './applyToDraw/components/all/Accept';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/applyToDraw' component={Login} />
          <Route path='/howToApplyToDraw' component={Information} />
          <Route path='/roomDrawTime' component={RoomDrawTime} />
          <Route component={Error}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
