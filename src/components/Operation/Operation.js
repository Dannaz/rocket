import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {formattedDate} from '../../utils'
import './Operation.css';

const transactionInfo = (operation) => {
    if (operation.type === 'income') {
        return <span className="operation-plus">+ {operation.value}</span>;
    }
    return <span className="operation-minus">- {operation.value}</span>;
};

class Operation extends Component {
    createMessage = (operation) => ({
        _id: Math.random(),
        sendAt: new Date().toString(),
        isMessage: false,
        content: {...operation},
        author: this.props.user
    });

    handleClick = () => {
        const message = this.createMessage(this.props.operationInfo);
        console.log('click');
        this.props.sendOperation(message);
    };

    render() {
        return (
            <div className="bill-operation">
                <div className="operation-information">
                    <div className="operation-date">{formattedDate(this.props.operationInfo.date)}</div>
                    <div className="bill-operation-info">{this.props.operationInfo.info} {transactionInfo(this.props.operationInfo)}</div>
                </div>
                <img className="send-operation" src="/img/send.png" alt="back" onClick={this.handleClick}/>
            </div>
        );
    }
};

Operation.PropTypes = {
    operationInfo: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    sendOperation: PropTypes.func
};

export default Operation;