import { all, call, put, takeLatest } from 'redux-saga/effects';
import type from './user.types';

const URL = process.env.URL_API_JSON_API;
const random = Math.round(Math.random() * 9) + 1;
console.log('random', random, 'URL_API', URL);

function* tryUsersList() {
  try {
    const response = yield call(fetch, `${URL}/users`);
    const payload = yield call([response, 'json']);

    yield put({ type: type.LIST_SUCCESS, payload });
  } catch (error) {
    yield put({
      type: type.USER_FAILED,
      payload: { name: type.LIST_SUCCESS, error: error.message },
    });
  }
}

function* watchUserList() {
  yield takeLatest(type.LIST_SUCCESS_REQUESTED, tryUsersList);
}

function* tryCurrentUser(action) {
  console.log('++++++++++ setCurrentUser user', action);
  yield put({ type: type.USER_TRY });
  try {
    const response = yield call(fetch, `${URL}/users/${action.payload.id}`);
    const payload = yield call([response, 'json']);

    yield put({ type: type.SET_CURRENT_USER, payload });
  } catch (error) {
    yield put({
      type: type.USER_FAILED,
      payload: { name: type.SET_CURRENT_USER, error: error.message },
    });
  }
}

function* watchCurrentUser() {
  yield takeLatest(type.SET_CURRENT_USER_REQUESTED, tryCurrentUser);
}

function* addUser(action) {
  try {
    const response = yield fetch(`${URL}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(action.payload),
    });

    const newUser = yield response.json();

    yield put({
      type: type.ADD_USER,
      payload: newUser.data,
    });
  } catch (error) {
    yield put({
      type: type.USER_FAILED,
      payload: { name: type.ADD_USER, error: error.message },
    });
  }
}

function* watchAddUser() {
  yield takeLatest(type.ADD_USER_REQUESTED, addUser);
}

function* deleteUser(action) {
  yield put({ type: type.USER_TRY });
  try {
    console.log('++++++++++ delete user', action);
    const response = yield fetch(`${URL}/users/` + action.payload, {
      method: 'DELETE',
    });

    const deletedUser = yield response.json();

    yield put({
      type: type.DELETE_USER,
      //payload: action.payload,
      payload: deletedUser,
    });
  } catch (error) {
    yield put({
      type: type.USER_FAILED,
      payload: { name: type.DELETE_USER, error: error.message },
    });
  }
}

function* watchDeleteUser() {
  yield takeLatest(type.DELETE_USER_REQUESTED, deleteUser);
}

function* updateUser(action) {
  try {
    const response = yield fetch(`${URL}/users/` + action.payload.id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(action.payload),
    });

    const updatedUser = yield response.json();

    yield put({
      type: type.UPDATE_USER,
      payload: updatedUser.data,
    });
  } catch (error) {
    yield put({
      type: type.USER_FAILED,
      payload: { name: type.UPDATE_USER, error: error.message },
    });
  }
}

function* watchUpdateUser() {
  yield takeLatest(type.UPDATE_USER_REQUESTED, updateUser);
}

export function* userSagas() {
  yield all([
    call(tryUsersList),
    //call(tryCurrentUser),
    watchUserList(),
    watchCurrentUser(),
    watchAddUser(),
    watchDeleteUser(),
    watchUpdateUser(),
  ]);
}
