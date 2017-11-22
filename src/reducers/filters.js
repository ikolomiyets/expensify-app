import * as fromActions from '../actions/filters';
import moment from 'moment';

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date', // date or amount
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
};

export default (state = filtersReducerDefaultState, action) => {
    if (action) {
        switch(action.type) {
            case fromActions.SET_TEXT_FILTER:
                return {
                    ...state,
                    text: action.text
                };
            case fromActions.SORT_BY_DATE:
                return {
                    ...state,
                    sortBy: 'date'
                };
            case fromActions.SORT_BY_AMOUNT:
                return {
                    ...state,
                    sortBy: 'amount'
                };
            case fromActions.SET_START_DATE:
                return {
                    ...state,
                    startDate: action.startDate
                };
            case fromActions.SET_END_DATE:
                return {
                    ...state,
                    endDate: action.endDate
                };
            default:
                return state;
        }
    } else {
        return state;
    }
};

