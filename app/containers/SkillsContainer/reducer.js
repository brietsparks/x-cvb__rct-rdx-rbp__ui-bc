/*
 *
 * SkillsContainer reducer
 *
 */

import {fromJS} from 'immutable';
import {
    ADD_SKILL
} from './constants';

const initialState = fromJS({
    skills: [
        {
            id: 1,
            title: 'Ubuntu',
        },
        {
            id: 2,
            title: 'MySQL',
        },
        {
            id: 3,
            title: 'PHP',
        },
        {
            id: 4,
            title: 'Javascript'
        }
    ]
});

function skillsContainerReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_SKILL:
            return state;
        default:
            return state;
    }
}

export default skillsContainerReducer;
