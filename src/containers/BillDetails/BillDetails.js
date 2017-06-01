import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {formattedDate} from '../../utils';
import Operation from "../../components/Operation/Operation";
import './BillDetails.css';
import {browserHistory} from 'react-router';
import {sendMessage} from '../../actions/messages'



class BillDetails extends Component {
    renderOperation = (operation) => (
        <Operation
            key={operation.date.valueOf()}
            operationInfo={operation}
            sendOperation={this.props.sendOperation}
            user={this.props.user}
            />
    );

    render() {
        let operations;
        if (this.props.operations) {
            operations = this.props.operations.slice(0);
            operations.map((operation) => (operation.date = new Date(operation.date)));
        }
        console.log(this.props);
        console.log(operations);
        return (
            <div>
                <div className="bill-info">
                    <div className="bill-number">Счет № {this.props.billId}</div>
                    <span><img className="go-back" onClick={browserHistory.goBack} src="/img/close.png"/></span>
                    <div className="bill-balance">{this.props.balance}</div>
                    <div className="bill-details">
                        <div>{this.props.percent} % годовых</div>
                        <div>Создан: {formattedDate(new Date(this.props.createdAt))}</div>
                    </div>
                    <div className="hist-title">История операций</div>
                </div>
                <div className="operations-container">
                    {operations ? operations.map(this.renderOperation) : null}
                </div>
            </div>
        );
    }
}

BillDetails.PropTypes = {
    billId: PropTypes.string.isRequired,
    balance: PropTypes.number.isRequired,
    createdAt: PropTypes.string.isRequired,
    percent: PropTypes.number.isRequired,
    operations: PropTypes.array.isRequired
};

const mapState = (state) => ({
    user: state.user
});

const mapDicpatch = (dispatch) => {
    return {
        sendOperation: (message) => dispatch(sendMessage(message))
    }
}

export default connect(mapState, mapDicpatch)(BillDetails);