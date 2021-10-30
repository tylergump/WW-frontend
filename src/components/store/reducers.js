import * as actionType from './action-types'

const initialState = {
    username: "",
    email: "",
    zipcode: "",
    authenticated: false,
    preferences: [{type: "Dog", age: "Baby"}]
}

export function rootReducer(state=initialState, action) {
 const {type, payload } = action
    switch(type){
        case actionType.ADD_PREFERENCE:
            return {
                ...state,
                preferences: [...state.preferences, payload]
            }
            case actionType.UPDATE_USER: 
            return {
            ...state,
            id: payload._id,
            username: payload.username,
            email: payload.email,
            zipcode: payload.zipcode,
            authenticated: payload.authenticated,
            preferences: [...state.preferences, payload.preferences]
            
        }
            default: 
            return state
        
    }
}