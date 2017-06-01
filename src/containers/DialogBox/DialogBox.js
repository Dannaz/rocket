import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchMessagesData } from '../../actions/messages';
import Message from "../../components/dialog/Message";
import { IN_COMING_MESSAGE, OUT_COMING_MESSAGE } from '../../constants/messages';
import { MOCK_API_URL } from '../../constants/urls';
import './DialogBox.css';

class DialogBox extends Component {
    compareMessageDate = (messageA, messageB) => {
        const aSendDate = new Date(messageA.sendAt);
        const bSendDate = new Date(messageB.sendAt);
        return bSendDate - aSendDate;
    };

    renderMsg = (msg) => (
        <Message
            key={msg._id}
            messageDirrection={this.props.user.firstName === msg.author.firstName? OUT_COMING_MESSAGE : IN_COMING_MESSAGE}
            isMessage={msg.isMessage}
            content={msg.content}
            authorPhotoUrl={msg.author.photo}
            authorFirstName={msg.author.firstName}
        />
    );

    componentDidMount() {
        this.props.fetchMessages(`${MOCK_API_URL}/history`);
    }

    render() {
        if (this.props.hasErrored) {
            return <p>При загрузке истории сообщений произошла ошибка</p>;
        }
        if (this.props.isLoading) {
            return <p>Загружаю историю сообщений...</p>;
        }

        const {messages} = this.props;
        console.log(messages);
        return (
            <div className="dialog_wraper">
                <div className="dialog">
                    {messages.sort(this.compareMessageDate).map(this.renderMsg)}
                </div>
            </div>

        );
    }
}

const mapState = (state) => {
    return {
        user: state.user,
        messages: state.messages,
        hasError: state.messagesHasErrored,
        isLoading: state.messagesIsLoading
    }
};

const mapDispatch = (dispatch) => {
    return {
        fetchMessages: (url) => dispatch(fetchMessagesData(url))
    }
};

export default connect(mapState, mapDispatch)(DialogBox);

