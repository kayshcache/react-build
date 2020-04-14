import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 100,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

const ThingListItem = ({ thing }) => {
  const classes = useStyles();

  return (
    <ListItem className={classes.root}>
	  <ListItemText primary={thing.thingName} />
	  <Divider />
    </ListItem>
  );
}

export default ThingListItem;
