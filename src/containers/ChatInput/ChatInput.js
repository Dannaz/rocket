import React, {Component} from 'react';
import { connect } from 'react-redux';
import './ChatInput.css'
import Input from "../../components/chat/Input";
import Button from "../../components/Button";
import {sendMessage} from '../../actions/messages'

class ChatInput extends Component {
    createMessage = (messageText) => ({
       _id: Math.random(),
        sendAt: new Date().toString(),
        isMessage: true,
        content: {
           text: messageText
        },
        author: this.props.user
    });

    onSendMessage = () => {
        const textArea = document.querySelector('textarea.message-input');
        const msgText = textArea.value;
        if (msgText.trim() !== '') {
            const message = this.createMessage(textArea.value);
            this.props.sendMessage(message);
            console.log('---message', message);
        }
        textArea.value = '';
    };

    componentDidMount() {
        document.addEventListener('keydown', (e) => {
            if (e.keyCode === 13 && (e.ctrlKey || e.metaKey)) {
                console.log('send:');
                this.onSendMessage();
            }
        });
    }


    render() {
        return (
            <div className="chat-input">
                <div className="chat-input-title">Чат</div>
                <Input/>
                <Button buttonText="Отправить" clickHandler={this.onSendMessage}/>
            </div>
        );
    }
}

const mapState = (state) => ({
    user: state.user
});

const mapDispatch = (dispatch) => {
    return {
        sendMessage: (message) => dispatch(sendMessage(message))
    }
};

export default connect(mapState, mapDispatch)(ChatInput)