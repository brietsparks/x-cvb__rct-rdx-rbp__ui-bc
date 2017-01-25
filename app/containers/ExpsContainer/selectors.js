import {createSelector} from 'reselect';

/**
 * Direct selector to the expsContainer state domain
 */
const selectExpsContainerDomain = () => state => state.get('expsContainer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ExpsContainer
 */

const selectExpsContainer = () => createSelector(
    selectExpsContainerDomain(),
    (substate) => substate.toJS()
);

export default selectExpsContainer;
export {
    selectExpsContainerDomain,
};
