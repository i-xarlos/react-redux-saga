import type from './user.types';

export const setCurrentUser = (user) => ({
  type: type.SET_CURRENT_USER_REQUESTED,
  payload: user,
});

export const setListUser = (users) => ({
  type: type.LIST_SUCCESS_REQUESTED,
  payload: users,
});

export const addUSer = (user) => ({
  type: type.ADD_USER_REQUESTED,
  payload: user,
});

export const updateUser = (user) => ({
  type: type.UPDATE_USER_REQUESTED,
  payload: user,
});

export const deleteUser = (user_id) => ({
  type: type.DELETE_USER_REQUESTED,
  payload: user_id,
});

export const userFailed = (error) => ({
  type: type.USER_FAILED,
  payload: error,
});
