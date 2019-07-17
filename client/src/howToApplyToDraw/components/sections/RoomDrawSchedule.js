import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  paper: {
    marginTop: theme.spacing(3),
    width: '100%',
    overflowX: 'auto',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 650,
  },
}));

function createData(date, event) {
  return { date, event };
}

const rows = [
  createData('February 17th', 'Deadline to Apply for Special Needs Housing'),
  createData('March 11th', 'Room Draw Application Goes Live'),
  createData('April 3rd', 'All Room Draw Applications are Due'),
  createData('April 8th', 'Draw Times, Available Rooms, and Draw Statistics are Posted'),
  createData('April 10th - May 9th', 'Room Selection Period'),
  createData('May 14th', 'Deadline to Apply for the Wait List and Room Improvement')

  ];

export default function DenseTable() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h6">
        <strong>Room Draw Schedule</strong>
      </Typography>
      <Paper className={classes.paper}>
        <Table className={classes.table} size="small">
          <TableHead>
            <TableRow>
              <TableCell align="left"></TableCell>
              <TableCell align="center">Date</TableCell>
              <TableCell align="center">Event</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="center">{row.date}</TableCell>
                <TableCell align="center">{row.event}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}
