import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Message.css';
import { OUT_COMING_MESSAGE } from '../../constants/messages';
import {formattedDate} from '../../utils'

const transactionInfo = (operation) => {
    if (operation.type === 'income') {
        return <span className="operation-plus">+ {operation.value}</span>;
    }
    return <span className="operation-minus">- {operation.value}</span>;
};

const getClassNames = (dirrection) => (
    dirrection === OUT_COMING_MESSAGE ? 'message message_out' : 'message message_in'
);

const renderMessage = (firstName, photoUrl, messageText, dirrection) => (
    <div className={getClassNames(dirrection)}>
        <img className="photo" src={photoUrl} alt={firstName}/>
        <div className="message-text">
            <span className="message-author">{firstName}: </span>
            <span>{messageText}</span>
        </div>
    </div>
);

const renderOperation = (firstName, photoUrl, content, dirrection) => (
    <div className={getClassNames(dirrection)}>
        <img className="photo" src={photoUrl} alt={firstName}/>
        <div className="operation-message">
            <span className="message-title">Операция</span>
            <span className="operation-date">{formattedDate(content.date)}</span>
            <span className="operation-message-info">{content.info} {transactionInfo(content)}</span>
        </div>
    </div>
);


export default class Message extends Component {
    render() {
        //console.log(this.props);
        if (this.props.isMessage) {
            return (
                renderMessage(this.props.authorFirstName,
                    this.props.authorPhotoUrl,
                    this.props.content.text,
                    this.props.messageDirrection)
            )
        }
        return renderOperation(this.props.authorFirstName,
            this.props.authorPhotoUrl,
            this.props.content,
            this.props.messageDirrection)
    }
}

Message.propTypes = {
    messageDirrection: PropTypes.string.isRequired,
    isMessage: PropTypes.bool.isRequired,
    content: PropTypes.object.isRequired,
    authorPhotoUrl: PropTypes.string.isRequired,
    authorFirstName: PropTypes.string.isRequired,
};