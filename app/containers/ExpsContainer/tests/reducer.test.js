import expect from 'expect';
import expsContainerReducer from '../reducer';
import { fromJS } from 'immutable';

describe('expsContainerReducer', () => {
  it('returns the initial state', () => {
    expect(expsContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
