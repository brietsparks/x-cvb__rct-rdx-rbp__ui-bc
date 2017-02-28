import { createSelector } from 'reselect';

/**
 * Direct selector to the personsContainer state domain
 */
const selectPersonsContainerDomain = () => state => state.get('personsContainer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by PersonsContainer
 */

const selectPersonsContainer = () => createSelector(
  selectPersonsContainerDomain(),
  (substate) => substate.toJS()
);

export default selectPersonsContainer;
export {
  selectPersonsContainerDomain,
};
