import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import './Time.css';
import axios from 'axios';

const useStyles = makeStyles(theme => ({

  root: {
    display: '100vh',
    minWidth: 300,
  },
  card: {
    margin:'100%'
  }
}));

const Names = props => (
  <p>{props.first} {props.last}<br/></p>
)

class Time extends Component {
  constructor(props) {
    super(props);
    this.state = {
      draw: '',
      netids: [],
      group: '',
      names: []
    }
  }

  async componentWillMount() {

      axios.get(`http://localhost:4000/applications/group/netid/${this.props.group}/${this.props.netid}`)
            .then((response) => {
              this.setState({
                names: response.data
              })
            })

  }

  groupMembers() {
    if (this.state.names.length === 0) {
      return <div>Individual</div>
    } else {

      return this.state.names.map((name, i) => {
             return <Names netid={name.netid} first={name.first} last={name.last} key={i} />
         })
    }
  }

  render() {
    return (
      <div className={useStyles.root}>
        <Container className={useStyles.card}>
          <Typography variant="body1" style={{textAlign: "center"}}>
            <strong><u>Name</u></strong>
            <br/>
            {this.props.first} {this.props.last}
            <br/><br/>
            <strong><u>Draw</u></strong>
            <br/>
            {this.props.draw}
            <br/><br/>
            <strong><u>Group Members</u></strong>
            {this.groupMembers()}
            <br/>
            <strong><u>Meal</u></strong>
            <br/>
            {this.props.meal}
            <br/><br/>
            <strong><u>Time</u></strong>
            <br/>
            {this.props.time}
          </Typography>
          <br/><br/><br/>
        </Container>
      </div>
    );
  }
}

export default Time;
