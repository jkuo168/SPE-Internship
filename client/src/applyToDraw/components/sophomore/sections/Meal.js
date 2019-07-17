import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Button from '@material-ui/core/Button';
import PrincetonLogo from '../../../../components/PrincetonLogo';
import SpecialDrawer from '../../SpecialDrawer';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import RadioGroup from '@material-ui/core/RadioGroup';
import Summary from '../../all/Summary';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';
import '../../Form.css';

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

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  },
  underline: {
    borderBottom: '2px solid white',
  }
}));

class Meal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      meal: '',
      clicked: ''
    }
  }

  handleChange = input => e => {
    this.setState({ ...this.state, [input]: e.target.value});
  };

  handleOnClickContinue = e => {
    e.preventDefault();
    if (this.state.meal !== '') {
      this.setState({
        clicked: true
      })
    }
  }

  handleOnClickBack = e => {
    e.preventDefault();

    if (this.state.meal !== ''){
      this.setState({
        clicked: false
      })
    }
  }

  render() {
    switch(this.state.clicked) {
      case true:
        return (
          <Summary meal={this.state.meal}/>
        )
      default:
        return (
          <MuiThemeProvider>
            <React.Fragment>
              <PrincetonLogo />
              <SpecialDrawer />
              <br/><br/><br/>
              <Typography variant="h6">
                <i>Select a Meal Plan</i>
              </Typography>
              <br/>
              <FormControl component="fieldset">
                <RadioGroup
                  value={this.state.meal}
                  onChange={this.handleChange('meal')}
                >
                  <FormControlLabel value="Independent" control={<OrangeRadio />} label="Independent" />
                  <FormControlLabel value="Meal Plan" control={<OrangeRadio />} label="Meal Plan / Eating Club" />
                </RadioGroup>
              </FormControl>
              <br/><br/><br/>
              <ColorButton
                variant="contained"
                color="primary"
                className={useStyles.margin}
                onClick={this.handleOnClickContinue}>
                Continue
              </ColorButton>
            </React.Fragment>
          </MuiThemeProvider>
        )
    }
  }
}

export default Meal;
