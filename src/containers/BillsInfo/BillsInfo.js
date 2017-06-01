import React, {Component} from 'react';
import { connect } from 'react-redux';
import {fetchBillsData} from '../../actions/bills';
import {fetchOperationsData} from '../../actions/operations';
import { BILLS_URL, OPERATIONS_URL} from '../../constants/urls';
import BillShortInfo from "../BillShortInfo/BillShortInfo";
import BillDetails from "../BillDetails/BillDetails";

class BillsInfo extends Component {
    componentDidMount() {
        if (!Object.keys(this.props.bills).length && !Object.keys(this.props.operations).length) {
            this.props.fetchBills(BILLS_URL);
            this.props.fetchOperations(OPERATIONS_URL);
        }
    }

    renderInfo = (bill) => (
        <BillShortInfo key={bill.billId} {...bill}/>
    );

    render() {
        const billsArray = Object.keys(this.props.bills).map((billId) => (
            {...this.props.bills[billId], billId, operations: this.props.operations[billId]}
            ));
        if (this.props.params.hasOwnProperty('billId')) {
            return (
                <div className="bills-container">
                    <BillDetails {...this.props.bills[this.props.params.billId]}
                                 billId={this.props.params.billId}
                                 operations={this.props.operations[this.props.params.billId]}/>
                </div>
                );
        }
        return (
            <div className="bills-container">
                {billsArray.map(this.renderInfo)}
            </div>
        );
    }
}

const mapState = (state) => ({
    bills: state.bills,
    billsIsLoading: state.billsIsLoading,
    billsHasErrored: state.billsHasErrored,
    operations: state.operations,
    operationsIsLoading: state.operationsIsLoading,
    operationsHasErrored: state.operationsHasErrored
});

const mapDispatch = (dispatch) => {
    return {
        fetchBills: (url) => dispatch(fetchBillsData(url)),
        fetchOperations: (url) => dispatch(fetchOperationsData(url))
    }
};

export default connect(mapState, mapDispatch)(BillsInfo);