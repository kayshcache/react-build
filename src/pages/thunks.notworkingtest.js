require('@babel/register')({});
const { expect } = require('chai');
const { things } = require('../reducers');

describe('The things reducer', () => {
  it('Adds a new thing when CREATE_THING action is received', () => {
    const fakeThing = { thingName: 'fako fing', isCompleted: false };
    const fakeAction = {
      type: 'CREATE_THING',
      payload: {
	thing: fakeThing,
      },
    };
    const originalState = { isLoading: false, data: [] };
    const expected = {
      isLoaded: false,
      data: [fakeThing],
    };
    const actual = things(originalState, fakeAction);

    expect(actual).to.deep.equal(expected);
  });
});
