import React, {Component} from 'react'
import './Chat.css'
import ChatInput from "../ChatInput/ChatInput";
import DialogBox from "../DialogBox/DialogBox";

export default class Chat extends Component {
    render() {
        return (
            <div className="chat-container">
                <ChatInput/>
                <DialogBox/>
            </div>
        );
    }
}