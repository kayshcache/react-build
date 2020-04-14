import React from 'react';
import ThingGrid from './things/ThingList';
import NewThingForm from './things/NewThingForm';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Grid container spacing={2}>
        <Grid item>
	  <Typography variant="h3">
            Welcome to the Things
          </Typography>
	  <Typography variant="p">
            Login to manage the things
          </Typography>
        </Grid>
        <Grid item xs={12}>
	  <NewThingForm />
        </Grid>
        <ThingGrid />
      </Grid>
    )
  }
}

