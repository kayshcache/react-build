// import axios from 'axios';
import {
  loadThingsInProgress,
  loadThingsSuccess,
  loadThingsFailure,
  createThing,
  deleteThing,
} from './actions';

const api = 'https://dathings.ue.r.appspot.com';

export const displayAlert = err => () => {
  alert(err);
};

export const loadThings = () => async (dispatch, getState) => {
  try {
    dispatch(loadThingsInProgress());
    const response = await fetch(`${api}/things`);
    const things = await response.json();

    dispatch(loadThingsSuccess(things));
  } catch (err) {
    dispatch(loadThingsFailure());
    dispatch(displayAlert(err));
  }
};

export const createThingRequest = thingName => async dispatch => {
  try {
    const body = JSON.stringify({ thingName });
    const response = await fetch(`${api}/things`, {
      headers: {
	'Content-Type': 'application/json',
      },
      method: 'post',
      mode: 'cors',
      body,
    });
    const newThing = await response.json();
    dispatch(createThing(newThing));
  } catch (err) {
    dispatch(displayAlert(err));
  }
}

export const deleteThingRequest = id => async dispatch => {
  try {
    const response = await fetch(`${api}/things/${id}`, {
      method: 'delete',
      mode: 'cors',
    });
    const thingId = await response.json();
    dispatch(deleteThing(thingId));
  } catch (err) {
    dispatch(displayAlert(err));
  }
}
