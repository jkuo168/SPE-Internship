import React, { Component } from 'react';
import { MuiThemeProvider } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import PrincetonLogo from '../../components/PrincetonLogo';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

class SpecialDrawer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      "open": false,
      "opening": false,
      "opening1": false,
      "opening2": false,
      "close": true
    }
  }

  handleToggle = () => this.setState({open: !this.state.open});
  handleOpen = () => this.setState({opening: !this.state.opening});
  handleOpen1 = () => this.setState({opening1: !this.state.opening1});
  handleOpen2 = () => this.setState({opening2: !this.state.opening2});
  handleClose = () => this.setState({close: !this.state.open});

  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar
              iconClassNameRight="navBar"
              title="Room Draw Application"
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
            <ListItem button onClick={this.handleOpen}>
              <ListItemText primary="Home" />
              <Dialog
                open={this.state.opening}
                onClose={this.handleClose}
              >
              <DialogTitle id="Home">Are You Sure You Want To Leave?</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                  If you leave this page, your application will not be saved.
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={this.handleClose} color="secondary">
                    Stay on This Page
                  </Button>
                  <Button color="primary" autoFocus component={Link} to="/">
                    Leave
                  </Button>
                </DialogActions>
                </Dialog>
              </ListItem>
              <ListItem button onClick={this.handleOpen1}>
                <ListItemText primary="Room Draw Guide" />
                  <Dialog
                    open={this.state.opening1}
                    onClose={this.handleClose}
                  >
                  <DialogTitle id="Room Draw Guide">Are You Sure You Want To Leave?</DialogTitle>
                    <DialogContent>
                      <DialogContentText id="Room Draw Guide">
                        If you leave this page, your application will not be saved.
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={this.handleClose} color="secondary">
                        Stay on This Page
                      </Button>
                      <Button color="primary" key="RoomDrawGuide" component={Link} to="/howToApplyToDraw">
                        Leave
                      </Button>
                    </DialogActions>
                  </Dialog>
                </ListItem>
                <ListItem button onClick={this.handleOpen2}>
                  <ListItemText primary="Room Draw Time" />
                    <Dialog
                      open={this.state.opening2}
                      onClose={this.handleClose}
                    >
                    <DialogTitle id="Room Draw Time">Are You Sure You Want To Leave?</DialogTitle>
                      <DialogContent>
                        <DialogContentText id="Room Draw Time">
                          If you leave this page, your application will not be saved.
                        </DialogContentText>
                      </DialogContent>
                      <DialogActions>
                        <Button onClick={this.handleClose} color="secondary">
                          Stay on This Page
                        </Button>
                        <Button color="primary" key="RoomDrawTime" component={Link} to="/roomDrawTime">
                          Leave This Page
                        </Button>
                      </DialogActions>
                    </Dialog>
                  </ListItem>
              </List>
              <Divider />
              <br/>
          </Drawer>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default SpecialDrawer;
