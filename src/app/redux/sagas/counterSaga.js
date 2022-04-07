import {call, takeLatest, put} from 'redux-saga/effects'
import { incrementStart, increment, incrementFailure } from '../slices/counter/counterSlice'
import { fetchCount } from '../api/counterAPI'

export function* handleIncrementCounter({payload}) {
    try {
      const data = yield call(fetchCount, payload)
      yield put(increment(data))
    } catch (error) {
      yield put(incrementFailure())
    }
  }


export function* watchCounter() {
    yield takeLatest(incrementStart, handleIncrementCounter)
  }
  