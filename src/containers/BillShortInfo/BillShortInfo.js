import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import '../BillsInfo/BillsInfo.css';
import {compareOperationsDate, formattedDate} from '../../utils'

const getLastOperationInfo = (operations) => {
    if (operations) {
        operations.sort(compareOperationsDate);
        return <span>Последняя операция: {formattedDate(operations[0].date)} {transactionInfo(operations[0])}</span>;
    }
    return null;
};

const transactionInfo = (operation) => {
    if (operation.type === 'income') {
        return <span className="operation-plus">(+ {operation.value})</span>;
    }
    return <span className="operation-minus">(- {operation.value})</span>;
};

class BillShortInfo extends Component {
    render() {
        let operations;
        if (this.props.operations) {
            operations = this.props.operations.slice(0);
            operations.map((operation) => (operation.date = new Date(operation.date)));
        }

        return (
            <div className="bill-info">
                <div className="bill-number">Счет № {this.props.billId}</div>
                <Link to={`/bills/${this.props.billId}`}><img src="img/maximize.png"/></Link>
                <div className="bill-balance">{this.props.balance}</div>
                <div className="bill-details">
                    <div >{this.props.percent} % годовых</div>
                    <div >Создан: {formattedDate(new Date(this.props.createdAt))}</div>
                    <div >{getLastOperationInfo(operations)}</div>
                </div>
            </div>
        );
    }
}

BillShortInfo.PropTypes = {
    billId: PropTypes.string.isRequired,
    balance: PropTypes.number.isRequired,
    createdAt: PropTypes.string.isRequired,
    percent: PropTypes.number.isRequired,
    operations: PropTypes.array.isRequired
};

export default BillShortInfo;