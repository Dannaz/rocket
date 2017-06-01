import {
    MESSAGES_IS_LOADING,
    MESSAGES_LOAD_ERROR,
    MESSAGES_FETCH_SUCCESS,
    MESSAGE_SEND_SUCCESS } from '../constants/messages';

export const messagesHasErrored = (bool) => {
    return {
        type: MESSAGES_LOAD_ERROR,
        hasError: bool
    }
};

export const messagesIsLoading = (bool) => {
    return {
        type: MESSAGES_IS_LOADING,
        isLoading: bool
    }
};

export const messagesFetchDataSuccess = (messages) => {
    return {
        type: MESSAGES_FETCH_SUCCESS,
        messages
    }
};

export const fetchMessagesData = (url) => {
    return (dispatch) => {
        dispatch(messagesIsLoading(true));

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                dispatch(messagesIsLoading(false));
                return response;
            })
            .then(response => (response.json()))
            .then(messages => {
                dispatch(messagesFetchDataSuccess(messages))
            })
            .catch(() => {dispatch(messagesHasErrored(true))})
    }
};

export const sendMessage = (message) => {
    return {
        type: MESSAGE_SEND_SUCCESS,
        message
    }
};