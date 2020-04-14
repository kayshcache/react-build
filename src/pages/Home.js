import React from 'react';
import ThingList from './things/ThingList';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

export default function Home() {
    return (
      <Grid container spacing={2}>
        <Grid item xs={12}>
	  <Typography variant="h3">
            Welcome to...
          </Typography>
	  <Typography variant="subtitle1">
	    The joy of things awaits you. Login to discover.
	  </Typography>
        </Grid>
        <ThingList />
      </Grid>
    )
}

