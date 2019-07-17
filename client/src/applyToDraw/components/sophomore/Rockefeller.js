import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import SpecialDrawer from '../SpecialDrawer';
import PrincetonLogo from '../../../components/PrincetonLogo';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Accept from '../all/Accept';
import Size from '../all/Size';
import '../Form.css';
import { withStyles } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';
import axios from 'axios';

const OrangeRadio = withStyles({
  root: {
    color: orange[300],
  }
})(props => <Radio color="default" {...props} />);

// Overrides primary color of button
const ColorButton = withStyles(theme => ({
  root: {
    backgroundColor: "#f58025",
    "&:hover": {
      backgroundColor: orange[400]
    }
  }
}))(Button);


class Rockefeller extends Component {
  constructor(props) {
    super(props);
    this.state = {
      draw:'',
      draws: [],
      find: ''
    }
  }

  handleChange = input => e => {
    this.setState({ ...this.state, [input]: e.target.value});
  };

  handleOnClick = async (e) => {
    e.preventDefault();

    await axios.get(`http://localhost:4000/applications/${this.props.netid}`)
      .then(response => {
        this.setState({
          draws: response.data.draw
        })
      })
      .catch((error) => {
        console.log(error)
      })
    if (this.state.draw !== '') {
      this.setState({
        find: this.state.draws.includes(this.state.draw)
      })
    }
  }

  render() {
    const CLASS = this.props.class
      switch(this.state.find) {
        case true:
          return (
            <Accept />
          )
        case false:
          return (
            <Size class={CLASS}/>
          )
        default:
        return (
          <MuiThemeProvider>
            <React.Fragment>
              <PrincetonLogo />
              <SpecialDrawer />
              <br/><br/>
              <Typography variant="h6">
                <i>Select a Draw</i>
              </Typography>
              <br/>
              <FormControl component="fieldset">
                  <FormControlLabel
                    value="Rockefeller"
                    onChange={this.handleChange('draw')}
                    control={<OrangeRadio/>}
                    label="Rockefeller"
                    labelPlacement="end"
                  />
              </FormControl>
              <br/><br/><br/>
              <ColorButton
                  variant="contained"
                  color="primary"
                  onClick={this.handleOnClick}
              >
              Continue
              </ColorButton>
            </React.Fragment>
          </MuiThemeProvider>
        )
      }

  }
}

export default Rockefeller;
