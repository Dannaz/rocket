import { SEND_MESSAGE } from '../constants/chat'

export function sendMessage(message) {
    return {
        type: SEND_MESSAGE,
        message
    }
}