/*
 *
 * NavigationContainer actions
 *
 */

import {
    SELECT_PAGE,
} from './constants';

export function selectPage(page) {
    return {
        type: SELECT_PAGE,
        page
    }
}


