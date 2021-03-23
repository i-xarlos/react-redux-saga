export const NAME = 'user'; // same as the  global state

const types = {
  USER_TRY: `[${NAME}]/USER_TRY`,

  SET_CURRENT_USER: `[${NAME}]/SET_CURRENT_USER`,
  SET_CURRENT_USER_REQUESTED: `[${NAME}]/SET_CURRENT_USER_REQUESTED`,

  LIST_SUCCESS: `[${NAME}]/LIST_SUCCESS`,
  LIST_SUCCESS_REQUESTED: `[${NAME}]/LIST_SUCCESS_REQUESTED`,

  ADD_USER: `[${NAME}]/ADD_USER`,
  ADD_USER_REQUESTED: `[${NAME}]/ADD_USER_REQUESTED`,

  UPDATE_USER: `[${NAME}]/UPDATE_USER`,
  UPDATE_USER_REQUESTED: `[${NAME}]/UPDATE_USER_REQUESTED`,

  DELETE_USER: `[${NAME}]/DELETE_USER`,
  DELETE_USER_REQUESTED: `[${NAME}]/DELETE_USER_REQUESTED`,

  USER_FAILED: `[${NAME}]/USER_FAILED`,
};

export default types;
