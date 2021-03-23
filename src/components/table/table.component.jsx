import React, { useState } from 'react';
import { CircularProgress, Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  Table as MTable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 300,
    marginBottom: '2rem',
  },
  isLoading: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
  btn: {
    marginRight: theme.spacing(2),
  },
}));

export default function Table({ data, isLoading, onClick }) {
  const classes = useStyles();
  const [current, setCurrent] = useState(null);
  const handleButton = (name, id) => {
    setCurrent({ name, id });
    onClick && onClick({ name, id });
  };

  return (
    <TableContainer className={classes.table}>
      <MTable aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Phone</TableCell>
            <Hidden mdDown>
              <TableCell align="right">Web</TableCell>
              <TableCell align="right">Company</TableCell>
              <TableCell align="right">Actions</TableCell>
            </Hidden>
          </TableRow>
        </TableHead>

        <TableBody>
          {data.map((row, key) =>
            isLoading && row.id === current.id ? (
              <TableRow key={key}>
                <TableCell colSpan="5" align="center">
                  <div className={classes.isLoading}>
                    <Button
                      variant="contained"
                      color="secondary"
                      className={classes.btn}
                    >
                      {current.name}: {data[key].name}
                    </Button>
                    <CircularProgress color="secondary" />
                  </div>
                </TableCell>
              </TableRow>
            ) : (
              <TableRow key={key}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.phone}</TableCell>

                <Hidden mdDown>
                  <TableCell align="right">{row.website}</TableCell>
                  <TableCell align="right">{row.company.name}</TableCell>
                  <TableCell align="right">
                    <Button onClick={() => handleButton('delete', row.id)}>
                      Delete
                    </Button>
                  </TableCell>
                </Hidden>
              </TableRow>
            )
          )}
        </TableBody>
      </MTable>
    </TableContainer>
  );
}
