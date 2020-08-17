import { Dispatch, AnyAction } from 'redux'

import { ChangeOrder } from './types'
import changeOrderData from './dummy-db.json'

export enum ActionTypes {
    SET_CHANGE_ORDER = "SET_CHANGE_ORDER",
    SET_CHANGE_ORDER_DETAILS = "SET_CHANGE_ORDER_DETAILS"
}

export function setChangeOrder(changeOrder: ChangeOrder) {
    return {
        type: ActionTypes.SET_CHANGE_ORDER,
        changeOrder
    }
}

export function setChangeOrderDetails(key: string, value: number) {
    return {
        type: ActionTypes.SET_CHANGE_ORDER_DETAILS,
        key,
        value
    }
}

/**
 * Fetches the Change Order data from the server, or in our case - from the dummy json
 */
export function fetchChangeOrder() {
    return (dispatch: Dispatch<AnyAction>) => {
        // fetch('/api/change-order')
        //     .then(res => res.json())
        //     .then(data => dispatch(setChangeOrder(data.changeOrder)))
        dispatch(setChangeOrder(changeOrderData))
    }
}

/**
 * Save the Change Order detail using the API and then changes the dispaches an action to change the store
 * @param key 
 * @param value 
 */
export function saveDetail(key: string, value: any) {
    // return dispatch => {
    //     return fetch('/api/change-order', {
    //         method: 'post',
    //         body: JSON.stringify(data),
    //         headers: {
    //             "Content-Type": "application/json"
    //         }
    //     })
    // }
    return (dispatch: Dispatch<AnyAction>) => {
        dispatch(setChangeOrderDetails(key, value))
    }
}