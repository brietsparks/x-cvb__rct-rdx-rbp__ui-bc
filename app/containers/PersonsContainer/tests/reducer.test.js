import expect from 'expect';
import personsContainerReducer from '../reducer';
import { fromJS } from 'immutable';

describe('personsContainerReducer', () => {
  it('returns the initial state', () => {
    expect(personsContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
