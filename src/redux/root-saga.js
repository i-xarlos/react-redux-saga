import { all, call } from 'redux-saga/effects'
import { sagas } from './modules'

export default function* rootSaga() {
  yield all([call(sagas.user.userSagas)])
}
