import {
    OPERATIONS_IS_LOADING,
    OPERATIONS_LOAD_ERROR,
    OPERATIONS_FETCH_SUCCESS } from '../constants/operations';

export const operationsHasErrored = (bool) => {
    return {
        type: OPERATIONS_LOAD_ERROR,
        hasError: bool
    }
};

export const operationsIsLoading = (bool) => {
    return {
        type: OPERATIONS_IS_LOADING,
        isLoading: bool
    }
};

export const operationsFetchDataSuccess = (operations) => {
    return {
        type: OPERATIONS_FETCH_SUCCESS,
        operations
    }
};

export const fetchOperationsData = (url) => {
    return (dispatch) => {
        dispatch(operationsIsLoading(true));

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                dispatch(operationsIsLoading(false));
                return response;
            })
            .then(response => (response.json()))
            .then(operations => {
                dispatch(operationsFetchDataSuccess(operations))
            })
            .catch(() => {dispatch(operationsHasErrored(true))})
    }
};
