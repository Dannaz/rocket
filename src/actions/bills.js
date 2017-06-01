import {
    BILLS_IS_LOADING,
    BILLS_LOAD_ERROR,
    BILLS_FETCH_SUCCESS } from '../constants/bills';

export const billsHasErrored = (bool) => {
    return {
        type: BILLS_LOAD_ERROR,
        hasError: bool
    }
};

export const billsIsLoading = (bool) => {
    return {
        type: BILLS_IS_LOADING,
        isLoading: bool
    }
};

export const billsFetchDataSuccess = (bills) => {
    return {
        type: BILLS_FETCH_SUCCESS,
        bills
    }
};

export const fetchBillsData = (url) => {
    return (dispatch) => {
        dispatch(billsIsLoading(true));

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                dispatch(billsIsLoading(false));
                return response;
            })
            .then(response => (response.json()))
            .then(bills => {
                dispatch(billsFetchDataSuccess(bills))
            })
            .catch(() => {dispatch(billsHasErrored(true))})
    }
};
