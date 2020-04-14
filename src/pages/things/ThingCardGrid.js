import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ThingCard from './ThingCardItem';
import { loadThings, deleteThingRequest } from '../thunks';

// Export non-default for testing
export const ThingGrid = ({ things = [], isLoading, onDeletePressed, onDisplayAlertClicked, startLoadingThings,}) => {
  useEffect(() => {
    startLoadingThings();
  }, [startLoadingThings]);

  const loadingMessage = <div>Loading things...</div>;
  const content = (
    <>
      {things.map(thing => <ThingCard key={thing._id} thing={thing} onDeletePressed={onDeletePressed} />)}
    </>
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

export default connect(mapStateToProps, mapDispatchToProps)(ThingGrid);

