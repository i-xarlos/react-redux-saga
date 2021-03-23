import reducer, { initialState } from './user.reducer'
import types from './user.types'

import * as sagas from './user.sagas'
import * as actions from './user.actions'
import * as utils from './user.utils'
import * as selectors from './user.selectors'

export const user = {
  reducer,
  initialState,
  sagas,
  types,
  selectors,
  utils,
  actions,
}
