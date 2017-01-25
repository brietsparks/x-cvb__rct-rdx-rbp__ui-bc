/*
 *
 * NavigationContainer reducer
 *
 */

import {fromJS} from 'immutable';
import {
    SELECT_PAGE
} from './constants';

const initialState = fromJS({
    pages: [
        {
            key: 'builder',
            name: 'Builder'
        },
        {
            key: 'viewer',
            name: 'Viewer'
        }
    ]
});

function navigationContainerReducer(state = initialState, action) {
    switch (action.type) {
        case SELECT_PAGE:
            return state
                .set('selectedPage', action.page);
        default:
            return state;
    }
}

export default navigationContainerReducer;
