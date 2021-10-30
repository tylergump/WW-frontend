import { createStore } from 'redux'
import { rootReducer } from './reducers'

// sets up our global storage
const store = createStore(rootReducer)

// function to check for authentication returns a boolean value
export const checkAuthentication = () => {
  return store.getState().authenticated ? true : false
}

// retreives store data

export const getStoreData = () => {
    const state = store.getState()
    return state
}

export default store;