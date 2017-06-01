import {Component} from 'react';
import { connect } from 'react-redux';
import {sendMessage} from '../actions/messages';

class BackgroundWorker extends Component {
    createMessage = (messageText) => ({
        _id: Math.random(),
        sendAt: new Date().toString(),
        isMessage: true,
        content: {
            text: messageText
        },
        author: {
            firstName: 'Олег',
            lastName: 'Doe',
            photo: 'https://pp.userapi.com/c604328/v604328657/3ca3e/BoRJCzpZuT4.jpg'
        }
    });

    componentDidMount() {
        setTimeout(() => {this.props.sendMessage(this.createMessage('Привет'))},2000)
    }

    render() {
        return null;
    }
}

const mapState = (state) => ({
    messages: state.messages
});

const mapDispatch = (dispatch) => {
    return {
        sendMessage: (message) => dispatch(sendMessage(message))
    }
};


export default connect(mapState, mapDispatch)(BackgroundWorker);
