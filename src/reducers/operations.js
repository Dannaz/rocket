import {
    OPERATIONS_FETCH_SUCCESS,
    OPERATIONS_IS_LOADING,
    OPERATIONS_LOAD_ERROR } from '../constants/operations'

export function operationsHasErrored(state = false, action) {
    switch (action.type) {
        case OPERATIONS_LOAD_ERROR:
            return action.hasError;
        default:
            return state;
    }
}

export function operationsIsLoading(state = false, action) {
    switch (action.type) {
        case OPERATIONS_IS_LOADING:
            return action.isLoading;
        default:
            return state;
    }
}

export function operations(state = {}, action) {
    switch (action.type) {
        case OPERATIONS_FETCH_SUCCESS:
            return action.operations;
        default:
            return state;
    }
}