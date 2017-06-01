import { MESSAGES_IS_LOADING, MESSAGES_LOAD_ERROR, MESSAGES_FETCH_SUCCESS } from '../constants/messages';
//
// const messageAction = (messages) => ({
//     type: MESSAGES_LOADED,
//     messages
// });
//
// const loadMessages = (dispatch) => {
//     console.log('start');
//     return fetch('api/test')
//         .then(res => (res.json()))
//         .then(data => {
//             return dispatch(messageAction(data))
//         });
// };
//
// export default loadMessages;

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

export const fetchMessages = (url) => {
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
