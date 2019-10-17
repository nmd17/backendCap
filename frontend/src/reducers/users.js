import { USERS_SUCCEEDED, USERS_FAILED } from "../actions"

const initialState = {
    users: [],
    userss_failed: false,
    userss_succeeded: false
}

export default (state = initialState, action) => {
    switch(action.type){
        case USERS_SUCCEEDED:
            return {
                ...state,
                users: [...action.payload.data],
                userss_succeeded: true,
                userss_failed: false
            }
        case USERS_FAILED:
            return {
                ...state,
                users: [...state.reports],
                users_succeeded: false,
                users_failed: true
            }
        default:
            return state
    }
}