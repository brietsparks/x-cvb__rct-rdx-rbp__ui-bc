/*
 *
 * PersonsContainer reducer
 *
 */

import {fromJS} from 'immutable';
import {
    ADD_PERSON,
} from './constants';

const initialState = fromJS({
    persons: [
        {
            id: 1,
            name: 'alex'
        },
        {
            id: 2,
            name: 'tiri'
        }
    ]
});

function personsContainerReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_PERSON:
            return state;
        default:
            return state;
    }
}

export default personsContainerReducer;
