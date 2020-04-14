import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ConfirmDeleteThing from './ConfirmDeleteThing';

const useStyles = makeStyles({
  root: {
    minWidth: 100,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const ThingCardItem = ({ thing, onDeletePressed }) => {
  const classes = useStyles();
  const [ open, setOpen ] = useState(false);

  const handleClickDelete = () => {
    setOpen(true);
  };

  const handleClose = (confirmYes) => {
    setOpen(false);
    //IF YES THEN DELETE
    if (confirmYes) {
      onDeletePressed(thing._id);
    }
  };

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card className={classes.root}>
	<CardContent>
	  <Typography className={classes.title} color="textSecondary" gutterBottom>
	    thingName: {thing.thingName}
	  </Typography>
	  <Typography className={classes.pos} color="textSecondary">
	    Thing object:
	  </Typography>
	  <Typography variant="body2" component="p">
	    {Object.entries(thing).map(pair => <span key={pair[0] + thing._id}>{pair.join(': ')}<br /></span>)}
	  </Typography>
	</CardContent>
	<CardActions>
	  <Button size="small" onClick={handleClickDelete}>
	    Delete
	  </Button>
        <ConfirmDeleteThing open={open} onClose={handleClose} />
	</CardActions>
      </Card>
    </Grid>
  );
}

export default ThingCardItem;
