import * as R from 'ramda';
import {takeEvery, call, put, delay, select} from 'redux-saga/effects';
import {SUBMIT, updateFreeSlots, submitComplete} from './actions';
import {getIds} from './selectors';
import {submit, getFreeSlots} from './api';

const mapKeys = R.curry((fn, obj) => R.fromPairs(R.map(R.adjust(0, fn), R.toPairs(obj))));

export const submitForm = function* submitForm({values}) {
    const ids = yield select(getIds);
    const request = mapKeys(R.flip(R.prop)(ids), values);
    yield call(submit, request);
    yield put(submitComplete());
};

export const loadFreeSlots = function* loadFreeSlots() {
    const freeSlots = yield call(getFreeSlots);
    yield put(updateFreeSlots(freeSlots));
};

export default function* () {
    yield takeEvery(SUBMIT, submitForm);
    for (;;) {
        yield call(loadFreeSlots);
        yield delay(5000);
    }
}
