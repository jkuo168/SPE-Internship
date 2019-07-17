import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import './Foot.css';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '0vh',
    width: "100%"
  },
  footer: {
    padding: theme.spacing(4),
    marginTop: 'auto',
    marginBottom: 'auto'
  }
}));

export default function Foot() {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{backgroundColor: "#9E9E9E"}}>
      <CssBaseline />
      <footer className={classes.footer} id="footer">
        <Container>
          <Typography
          variant="h6"
          style={{ textAlign:"left", color: '#ffff'}}
          >
            <strong>SPE Internship 2019</strong>
          </Typography>
        </Container>
      </footer>
    </div>
  );
}
