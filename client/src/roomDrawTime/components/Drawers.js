import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import PrincetonLogo from '../../components/PrincetonLogo';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

class Drawers extends Component {
  constructor(props) {
        super(props);
        this.state = {
            "open": false,
            "show": null
        };
    }

  handleToggle = () => this.setState({open: !this.state.open});

  render() {
    return (
      <div className="Drawers">
        <AppBar
            iconClassNameRight="drawer"
            title="Room Draw Time"
            onLeftIconButtonClick={this.handleToggle}
            style={{backgroundColor: '#f58025'}}
        />
        <Drawer
            docked={false}
            width={250}
            open={this.state.open}
            onRequestChange={(open) => this.setState({open})}>
            <PrincetonLogo/>
            <List>
              {[
                {name: 'Home', link: '/'},
                {name: 'Apply to Draw', link: '/applyToDraw'},
                {name: 'Room Draw Guide', link: '/howToApplyToDraw'}
              ].map((text,index) => (
                <ListItem button key={text.name} component={Link} to={text.link}>
                  <ListItemText primary={text.name} />
                </ListItem>
              ))}
            </List>
            <Divider />
            <br/>
        </Drawer>
      </div>
    );
  }
}

export default Drawers;
