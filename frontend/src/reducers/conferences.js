import { CONFERENCES_SUCCEEDED, CONFERENCES_FAILED } from "../actions"

const initialState = {
    conferences: [],
    conferences_failed: false,
    conferences_succeeded: false
}

export default (state = initialState, action) => {
    switch(action.type){
        case CONFERENCES_SUCCEEDED:
            return {
                ...state,
                conferences: [...action.payload.data],
                conferences_succeeded: true,
                conferences_failed: false
            }
        case CONFERENCES_FAILED:
            return {
                ...state,
                conferences: [...state.conferences],
                conferences_succeeded: false,
                conferences_failed: true
            }
        default:
            return state
    }
}