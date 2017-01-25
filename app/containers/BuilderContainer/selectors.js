import { createSelector } from 'reselect';

/**
 * Direct selector to the builderContainer state domain
 */
const selectBuilderContainerDomain = () => state => state.get('builderContainer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by BuilderContainer
 */

const selectBuilderContainer = () => createSelector(
  selectBuilderContainerDomain(),
  (substate) => substate.toJS()
);

export default selectBuilderContainer;
export {
  selectBuilderContainerDomain,
};
