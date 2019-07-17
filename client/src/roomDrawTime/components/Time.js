import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({

  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
  },
  card: {
    margin:'25%'
  }

});

export default function Time() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container className={classes.card}>
        <Typography variant="body1" style={{textAlign: "center"}}>
          <strong><u>Name</u></strong>
          <br/>
          <strong><u>Draw</u></strong>
          <br/>
          <strong><u>Group Members</u></strong>
          <br/>
          <strong><u>Time</u></strong>
        </Typography>
      </Container>
    </div>
  );
}
