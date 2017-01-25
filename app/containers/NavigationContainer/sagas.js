import { take, call, put, select } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import {takeLatest} from 'redux-saga';
import {SELECT_PAGE} from './constants';

function * pushPage(action) {
    yield put(push(`/${action.page.key}`));
}

export function * selectPageSaga() {
    yield * takeLatest(SELECT_PAGE, pushPage);
}


export default [
    selectPageSaga,
    // selectDefaultPageSaga
];
