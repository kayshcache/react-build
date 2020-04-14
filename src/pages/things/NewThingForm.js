import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createThingRequest } from '../thunks';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import CloudUpload from '@material-ui/icons/CloudUpload';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
}));

const NewThingForm = ({ things, onCreatePressed }) => {
  const [ inputValue, setInputValue ] = useState('');

  const classes = useStyles();

  return (
    <form noValidate autoComplete="off">
      <TextField
	label="Name a new thing"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)} />
      <Button
	variant="contained"
        onClick={() => {
          const isDuplicateOrEmpty = things.some(thing => thing.thingName === inputValue || !inputValue);
          if (!isDuplicateOrEmpty) {
	    onCreatePressed(inputValue);
	    setInputValue('');
	  }
	}}
	className="new-thing-button">
	Create Thing
      </Button>

      <input accept=".csv" className={classes.input} id="icon-button-file" type="file" />
      <label htmlFor="icon-button-file">
	<IconButton aria-label="upload csv" component="span">
	  <CloudUpload />
	</IconButton>
      </label>
    </form>
  );
};

const mapStateToProps = state => ({
  things: state.things,
});

const mapDispatchToProps = dispatch => ({
  onCreatePressed: thingName => dispatch(createThingRequest(thingName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewThingForm);
