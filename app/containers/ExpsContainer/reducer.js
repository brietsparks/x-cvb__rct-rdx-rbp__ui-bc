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
            parent_id: null,
            title: 'SIPRM',
            is_project: true,
            next_id: null
        },
        {
            id: 2,
            parent_id: 1,
            title: 'Re-Architecture',
            is_project: true,
            next_id: 3
        },
        {
            id: 3,
            parent_id: 1,
            title: 'SOAP API implementation',
            is_project: false,
            next_id: null,
            skills: [1,2,3],
        },
        {
            id: 4,
            parent_id: 2,
            title: 'AJAX front-end',
            is_project: false,
            next_id: null,
            skills: [4]
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
