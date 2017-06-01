import {
    MESSAGES_FETCH_SUCCESS,
    MESSAGES_IS_LOADING,
    MESSAGES_LOAD_ERROR,
    MESSAGE_SEND_SUCCESS } from '../constants/messages'

export function messagesHasErrored(state = false, action) {
    switch (action.type) {
        case MESSAGES_LOAD_ERROR:
            return action.hasError;
        default:
            return state;
    }
}

export function messagesIsLoading(state = false, action) {
    switch (action.type) {
        case MESSAGES_IS_LOADING:
            return action.isLoading;
        default:
            return state;
    }
}

export function messages(state = [], action) {
    switch (action.type) {
        case MESSAGES_FETCH_SUCCESS:
            return action.messages;
        case MESSAGE_SEND_SUCCESS:
            return [...state, action.message];
        default:
            return state;
    }
}