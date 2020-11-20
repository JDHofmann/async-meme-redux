import { combineReducers } from 'redux'

const defaultState = {
    memes: [],
    loading: false
}

const memeReducer = (state = defaultState.memes, action) => {
    switch (action.type){
        case 'ADD_MEMES':
            return action.memes

        default:
            return state
    }
}

const loadingMemesReducer = ( state = defaultState.loading, action) => {
    switch (action.type){
        case 'FETCH_MEMES':
            // console.log("true")
            return {
                loading: true
            }
        case 'ADD_MEMES':
            // console.log("loading should be false")
            return {
                loading: false
            }
        default:
            return state
    }
}

const rootReducer = combineReducers({
    memes: memeReducer,
    loading: loadingMemesReducer
})

export default rootReducer