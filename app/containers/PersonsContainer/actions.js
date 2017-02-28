/*
 *
 * PersonsContainer actions
 *
 */

import {
    ADD_PERSON,
} from './constants';

export function addPerson() {
    return {
        type: ADD_PERSON,
    };
}
