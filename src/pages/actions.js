export const CREATE_THING = 'CREATE_THING';
export const createThing = thingName => ({
  type: CREATE_THING,
  payload: { thingName },
});

export const DELETE_THING = 'DELETE_THING';
export const deleteThing = thing => ({
  type: DELETE_THING,
  payload: { thing },
});

export const LOAD_THINGS_IN_PROGRESS = 'LOAD_THINGS_IN_PROGRESS';
export const loadThingsInProgress = () => ({
  type: LOAD_THINGS_IN_PROGRESS,
});

export const LOAD_THINGS_SUCCESS = 'LOAD_THINGS_SUCCESS';
export const loadThingsSuccess = things => ({
  type: 'LOAD_THINGS_SUCCESS',
  payload: { things },
});

export const LOAD_THINGS_FAILURE = 'LOAD_THINGS_FAILURE';
export const loadThingsFailure = () => ({
  type: LOAD_THINGS_FAILURE,
});
