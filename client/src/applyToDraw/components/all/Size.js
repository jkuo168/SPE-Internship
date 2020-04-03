import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import SpecialDrawer from '../SpecialDrawer';
import PrincetonLogo from '../../../components/PrincetonLogo';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import RadioGroup from '@material-ui/core/RadioGroup';
import Meal from '../sophomore/sections/Meal';
import AllMeal from '../junior_senior/sections/AllMeal';
import Group from './Group';
import { withStyles } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';

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

class Size extends Component {
  constructor(props) {
    super(props);

    this.state = {
      group: '',
      checked: ''
    }
  }
  handleChange = input => e => {
    this.setState({ ...this.state, [input]: e.target.value});
  };

  handleOnClickContinue = e => {
    e.preventDefault();

    this.setState({
      checked: this.state.group
    })
  }

  render() {
    const CLASS = this.props.class
    const COLLEGE = this.props.college
    switch(this.state.checked) {
      case 'Individual':
        switch(CLASS) {
          case 22:
            return (
              <Meal group={this.state.group} draw={this.props.draw} netid={this.props.netid}/>
            )
          case 21 || 20:
            return (
              <AllMeal />
            )
          default: console.log('')
        }
        break;
        case 'Group':
          return (
            <Group
            class={CLASS}
            college={COLLEGE}
            netid={this.props.netid}
            draw={this.props.draw}
            group={this.state.group}
            />
          )
    default:
      return(
        <MuiThemeProvider>
          <React.Fragment>
            <PrincetonLogo />
            <SpecialDrawer />
            <br/><br/>
            <Typography variant="h6">
              <i>Select a Draw Group Size</i>
            </Typography>
            <br/>
            <FormControl component="fieldset">
              <RadioGroup
                value={this.state.group}
                onChange={this.handleChange('group')}
              >
                <FormControlLabel value="Individual" control={<OrangeRadio />} label="Individual" />
                <FormControlLabel value="Group" control={<OrangeRadio />} label="Group" />
              </RadioGroup>
            </FormControl>
            <br/><br/><br/>
            <ColorButton
                variant="contained"
                color="primary"
                onClick={this.handleOnClickContinue}
            >
            Continue
            </ColorButton>
          </React.Fragment>
        </MuiThemeProvider>
      )
    }
  }
}

export default Size;
