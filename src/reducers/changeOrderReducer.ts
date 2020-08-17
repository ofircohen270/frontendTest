import { ActionTypes } from "../actions";

export default function changeOrder(state = {}, action: any = {}) {
    switch (action.type) {
        case ActionTypes.SET_CHANGE_ORDER:
            return action.changeOrder
        case ActionTypes.SET_CHANGE_ORDER_DETAILS:
            let newState = { ...state }
            newState[action.key] = action.value
            return newState
        default: return state
    }
}