import {
  CREATE_THING,
  DELETE_THING,
  LOAD_THINGS_IN_PROGRESS,
  LOAD_THINGS_SUCCESS,
  LOAD_THINGS_FAILURE,
} from './actions';

export const isLoading = (state =false, action) => {
  const { type } = action;

  switch (type) {
    case LOAD_THINGS_IN_PROGRESS:
      return true;
    case LOAD_THINGS_SUCCESS:
    case LOAD_THINGS_FAILURE:
      return false;
    default:
      return state;
  }
};

export const things = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_THING: {
      const { thingName } = payload;
      // concat method doesn't mutate the array - returns a new array.
      return state.concat(thingName);
    }
    case DELETE_THING: {
      const { thing: thingToRemove } = payload;
      return state.filter(thing => thing._id !== thingToRemove._id);
    }
    case LOAD_THINGS_SUCCESS: {
      const { things } = payload;
      return things;
    }
    case LOAD_THINGS_IN_PROGRESS:
    case LOAD_THINGS_FAILURE:
    default:
      return state;
  }
};
