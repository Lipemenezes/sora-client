import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';

import { logout as logoutService } from '../services/auth';

const useStyles = makeStyles((theme) => ({
  appBar: {
    // backgroundColor: '#1B9CFC',
    position: 'static',
  },
  toolbar: {
    justifyContent: 'space-between',
    display: 'flex',
  }
}));

const handleLogout = () => {
  logoutService();
  window.location.reload();
}

export default function PrimarySearchAppBar() {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography className={classes.title} variant="h6" noWrap>
          Sora School
        </Typography>
        <Button color="inherit" onClick={handleLogout}>Logout</Button>
      </Toolbar>
    </AppBar>
  );
}
