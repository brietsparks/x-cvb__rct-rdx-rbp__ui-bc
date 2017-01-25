/*
 *
 * ExpsContainer reducer
 *
 */

import {fromJS} from 'immutable';
import {
    DEFAULT_ACTION,
} from './constants';

const initialState = fromJS({
    exps: [
        {
            id: 1,
            title: 'floob'
        },
        {
            id: 2,
            title: 'glarb'
        }
    ]
});

function expsContainerReducer(state = initialState, action) {
    switch (action.type) {
        case DEFAULT_ACTION:
            return state;
        default:
            return state;
    }
}

export default expsContainerReducer;
