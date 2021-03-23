import type from './user.types';

export const initialState = {
  currentUser: null,
  list: [],
  errors: [],
  isLoading: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.USER_TRY:
      console.log('USER_TRY loading:true');
      return { ...state, isLoading: true };

    case type.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
        isLoading: false,
      };

    case type.LIST_SUCCESS:
      return { ...state, isLoading: false, list: action.payload };

    case type.ADD_USER:
      return {
        ...state,
        isLoading: false,
        list: [action.payload, ...state.list],
      };

    case type.UPDATE_USER:
      const updateUserId = state.list.findIndex(
        (user) => user.id === action.payload.id
      );
      if (updateUserId !== -1)
        return {
          ...state,
          errors: [
            { name: type.UPDATE_USER, error: `${updateUserId} don't exist` },
            ...state.errors,
          ],
        };
      else state.list[updateUserId] = action.payload;

      return { ...state, isLoading: false };

    case type.DELETE_USER:
      const newUserList = state.list.filter(
        (user) => user.id !== action.payload
      );
      return {
        ...state,
        isLoading: false,
        list: newUserList,
      };

    case type.USER_FAILED:
      const errorId = state.errors.findIndex(
        (error) => error.name === action.payload.name
      );
      if (errorId === -1) state.errors.push(action.payload);
      else state.errors[errorId] = action.payload;

      return { ...state, isLoading: false };

    default:
      return state;
  }
};

export default userReducer;
