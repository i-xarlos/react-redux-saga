import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

//// Reducers
import { reducers } from './modules'

const persistconfig = {
  key: 'root',
  storage,
  whitelist: [''], // because user is storage outsitde
}

const rootReducer = combineReducers(reducers)
//export default rootReducer
export default persistReducer(persistconfig, rootReducer)
