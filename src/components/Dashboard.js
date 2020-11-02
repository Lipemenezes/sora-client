import React from 'react';
import { Box, Paper, Grid } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Header from './Header';
import MySkills from './MySkills';
import MyHouse from './MyHouse';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: 24,
    padding: 12,
    margin: 'auto',
    maxHeight: '70vh',
    overflowY: 'auto',
  },
  sectionTitle: {
    marginBottom: 16,
  }
}));

export default function Dashboard() {
  const classes = useStyles();

  return (
    <>
      <Box maxWidth="xl" >
        <Header></Header>
      </Box> 

      <Grid container spacing={3} justify="center">
        <Grid item xs={12} md={4}>
        <Paper className={classes.paper} elevation={2}>
          <Typography variant="h5" component="h3" className={classes.sectionTitle}>
            My house
          </Typography>
          <MyHouse/>
        </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
        <Paper className={classes.paper} elevation={2} >
          <Typography variant="h5" component="h3" className={classes.sectionTitle}>
            My skills
          </Typography>
          <MySkills/>
        </Paper>
        </Grid>
      </Grid>
    </>
  );
}
