import * as actionType from './action-types'

const initialState = {
    username: "Human",
    email: "human@notalien.com",
    zipcode: 43271,
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
            username: payload.username,
            email: payload.email,
            zipcode: payload.zipcode,
            preferences: [...state.preferences, payload.preferences]
            
        }
            default: 
            return state
        
    }
}