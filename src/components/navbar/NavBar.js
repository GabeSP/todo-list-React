import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ListIcon from '@material-ui/icons/List';

const NavBar = () => {
  return (
    <div>
      <AppBar position='static'>
        <Toolbar>
          <IconButton color='inherit' aria-label='Menu'>
            <ListIcon />
          </IconButton>
          <Typography variant='title' color='inherit'>
            React & Material-UI TODO List
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}
export default NavBar;
