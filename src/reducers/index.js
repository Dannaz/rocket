import { combineReducers } from 'redux';
import { messages, messagesHasErrored, messagesIsLoading } from './messages';
import { bills, billsHasErrored, billsIsLoading } from './bills';
import { operations, operationsHasErrored, operationsIsLoading } from './operations';
import { user } from './user';

export default combineReducers({
    messages,
    messagesHasErrored,
    messagesIsLoading,
    bills,
    billsHasErrored,
    billsIsLoading,
    operations,
    operationsHasErrored,
    operationsIsLoading,
    user
});
