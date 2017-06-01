import { SEND_MESSAGE, MESSAGES_FETCH, MESSAGES_LOADED } from '../constants/chat'

const initialState = {
    history: [
        {
            from: 'client',
            date: 'date1',
            text: 'hello from client'
        }, {
            from: 'me',
            date: 'date2',
            text: 'greeting client'
        }
    ],
    messages: []
};

export default function dialogState(state = initialState, action) {
    switch (action.type) {
        case SEND_MESSAGE:
            return Object.assign({}, state, {history: [...state.history, action.message]});
        case MESSAGES_FETCH:
            console.log('---action', action);
            return state;
        case MESSAGES_LOADED:
            console.log('---action', action);
            return {...state, messages: action.messages};
        default:
            return state;
    }
}

