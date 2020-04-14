import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import List from '@material-ui/core/List';
import ThingListItem from './ThingListItem';
import { loadThings, deleteThingRequest } from '../thunks';

// Export non-default for testing
export const ThingList = ({ things = [], isLoading, onDeletePressed, onDisplayAlertClicked, startLoadingThings,}) => {
  useEffect(() => {
    startLoadingThings();
  }, [startLoadingThings]);

  const loadingMessage = <div>Loading things...</div>;
  const content = (
    <List aria-label="the things you want">
      {things.map(thing => <ThingListItem key={thing._id} thing={thing} onDeletePressed={onDeletePressed} />)}
    </List>
  );

  return isLoading ? loadingMessage : content;
};

// Redux State Handling
const mapStateToProps = state => ({
  things: state.things,
  isLoading: state.isLoading,
});

const mapDispatchToProps = dispatch => ({
  startLoadingThings: () => dispatch(loadThings()),
  onDeletePressed: id => dispatch(deleteThingRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ThingList);

