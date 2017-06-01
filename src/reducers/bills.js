import {
    BILLS_FETCH_SUCCESS,
    BILLS_IS_LOADING,
    BILLS_LOAD_ERROR } from '../constants/bills'

export function billsHasErrored(state = false, action) {
    switch (action.type) {
        case BILLS_LOAD_ERROR:
            return action.hasError;
        default:
            return state;
    }
}

export function billsIsLoading(state = false, action) {
    switch (action.type) {
        case BILLS_IS_LOADING:
            return action.isLoading;
        default:
            return state;
    }
}

export function bills(state = {}, action) {
    switch (action.type) {
        case BILLS_FETCH_SUCCESS:
            return action.bills;
        default:
            return state;
    }
}