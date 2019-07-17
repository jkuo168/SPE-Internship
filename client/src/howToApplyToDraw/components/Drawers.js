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
            title="Room Draw Guide"
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
                {name: 'Room Draw Time', link: '/roomDrawTime'}
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

// <List>
//   {[
//     {name: 'Room Draw Schedule', link: 'room_draw_schedule'},
//     {name: 'Eligibility', link: 'eligibility'},
//     {name: 'Rising Sophomore Room Draw', link: 'rising_sophomore_room_draw'},
//     {name: 'Rising Junior and Senior Room Draw', link: 'rising_junior_and_senior_room_draw'},
//     {name: 'Room Draw Glossary', link: 'room_draw_glossary'}
//   ].map((text,index) => (
//     <Link
//       activeClass="active"
//       to={text.link}
//       spy={true}
//       smooth={true}
//       offset={-70}
//       duration={500}
//     >
//       <ListItem button key={text.name} >
//         <ListItemText primary={text.name} />
//       </ListItem>
//     </Link>
//   ))}
// </List>
