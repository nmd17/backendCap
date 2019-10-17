import { REPORTS_SUCCEEDED, REPORTS_FAILED } from "../actions"

const initialState = {
    reports: [],
    reports_failed: false,
    reports_succeeded: false
}

export default (state = initialState, action) => {
    switch(action.type){
        case REPORTS_SUCCEEDED:
            return {
                ...state,
                reports: [...action.payload.data],
                reports_succeeded: true,
                reports_failed: false
            }
        case REPORTS_FAILED:
            return {
                ...state,
                reports: [...state.reports],
                reports_succeeded: false,
                reports_failed: true
            }
        default:
            return state
    }
}