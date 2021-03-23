import React from 'react';
import { Grid, Hidden, Typography, withWidth, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Helmet } from 'react-helmet';
import Menu from '../menu/menu.component';
import Navbar from './../navbar/navbar.component';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  control: {
    padding: theme.spacing(4),
  },
}));

function Layout(props) {
  const classes = useStyles();

  return (
    <>
      <Helmet title="Threader CMS" defer={false} />

      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Navbar />
        </Grid>
        <Hidden mdDown>
          <Grid item xs={12} sm={2}>
            <Menu />
          </Grid>
        </Hidden>
        <Grid item lg={10} md={12}>
          <Paper className={classes.control}>
            <Typography variant={'h1'}>{props.width}</Typography>
            {props.children}
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}

export default withWidth()(Layout);
