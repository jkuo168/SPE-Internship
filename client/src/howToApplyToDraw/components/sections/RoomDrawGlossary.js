import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Rooms, Weights, Dropping, Gender, GroupDraw, IndependentDefinition,
          IndepedentPledge, Last, MixedClass, MyHousing, Proxy, RoomImprovement,
          SpelmanDraw, UpperclassLimit, UpperclassLimitOverride, WaitList}
          from './text/Definitions';

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

function createData(term, definition) {
  return { term, definition };
}

const rows = [
  createData('Available Rooms List', Rooms()),
  createData('Application Weights', Weights()),
  createData('Dropping Down', Dropping()),
  createData('Gender Inclusive Housing', Gender()),
  createData('Group Draw', GroupDraw()),
  createData('Independent', IndependentDefinition()),
  createData('Independent Pledge', IndepedentPledge()),
  createData('Last Selected Room List', Last()),
  createData('Mixed Class Group', MixedClass()),
  createData('My Housing for Undergraduates', MyHousing()),
  createData('Proxy Designation', Proxy()),
  createData('Room Improvement', RoomImprovement()),
  createData('Spelman Draw Statistics', SpelmanDraw()),
  createData('Upperclass Limit in Four-Year Residential Colleges', UpperclassLimit()),
  createData('Upperclass Limit Override in Four-Year Residential Colleges', UpperclassLimitOverride()),
  createData('Wait List', WaitList())
  ];

export default function RoomDrawGlossary() {
  const classes = useStyles();

  return(
    <div className={classes.root}>
      <Typography variant="h6">
        <strong>Room Draw Glossary</strong>
      </Typography>
      <Paper className={classes.paper}>
        <Table className={classes.table} size="small">
          <TableHead>
            <TableRow>
              <TableCell align="center"></TableCell>
              <TableCell align="center">Term</TableCell>
              <TableCell align="center">Definition</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.term}</TableCell>
                <TableCell align="left">{row.definition}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}
