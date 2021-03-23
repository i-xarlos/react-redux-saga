import { user } from './user'

/**
 * Root states.
 */
export const States = {
  user: user.initialState,
}

/**
 * Root reducers.
 */
export const reducers = {
  user: user.reducer,
}

/**
 * Root types
 */

export const types = {
  user: user.types,
}

/**
 * Root sagas
 */

export const sagas = {
  user: user.sagas,
}

/**
 * Root utils.
 */
export const utils = {
  user: user.utils,
}

/**
 * Root selectors
 */
export const selectors = {
  user: user.selectors,
}

/**
 * Root actions.
 */
export const actions = {
  user: user.actions,
}

export { user }
