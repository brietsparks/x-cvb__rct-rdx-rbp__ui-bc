import expect from 'expect';
import builderContainerReducer from '../reducer';
import { fromJS } from 'immutable';

describe('builderContainerReducer', () => {
  it('returns the initial state', () => {
    expect(builderContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
