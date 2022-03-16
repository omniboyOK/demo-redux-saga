import {all, fork} from 'redux-saga/effects'
import { watchCounter } from './counterSaga'

export default function* rootSaga() {
  yield all([
    fork(watchCounter),
  ])
}
