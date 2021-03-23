import { createSelector } from 'reselect'
import { NAME } from './user.types'

export const selectUser = state => state[NAME]

export const selectUserLoading = createSelector(
  [selectUser],
  user => user.isLoading
)

export const selectCurrentUser = createSelector(
  [selectUser],
  user => user.currentUser
)

export const selectUserList = createSelector([selectUser], user => user.list)
