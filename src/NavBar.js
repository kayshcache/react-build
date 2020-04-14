import React from 'react';
import { useAuth0 } from './react-auth0-spa';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import { Link } from 'react-router-dom';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import GitHubIcon from '@material-ui/icons/GitHub';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavBar() {
  const classes = useStyles();

  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const authButtonText = isAuthenticated ? "Logout" : "Login";
  const handleAuthentication = () => {
    if (isAuthenticated) {
      logout();
    } else {
      loginWithRedirect({});
    }
  };

  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <div>
      <AppBar position="fixed" color='inherit'>
        <Toolbar>
          <IconButton onClick={toggleDrawer("left", true)} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            The Things
          </Typography>
          <span><Link to="/profile">Profile</Link></span>
          <IconButton href="https://github.com/kayshcache/mern-fullstack-template-v1">
	    <GitHubIcon />
          </IconButton>
          <Button onClick={handleAuthentication} color="inherit">{authButtonText}</Button>
        </Toolbar>
      </AppBar>
      <SwipeableDrawer
        anchor="left"
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
        onOpen={toggleDrawer("left", true)}
      >
	List of stuff
      </SwipeableDrawer>
      <Toolbar />
      <Toolbar />
    </div>
  );
}
