import moment from 'moment';
import filtersReducer from '../../reducers/filters';
import * as fromAction from '../../actions/filters';

test('should setup default reducer filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, { type: fromAction.SORT_BY_AMOUNT });
    expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
    const state = filtersReducer({
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }, { type: fromAction.SORT_BY_DATE });
    expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
    const state = filtersReducer(undefined, { type: fromAction.SET_TEXT_FILTER,
    text: 'test'});
    expect(state.text).toBe('test');
});

test('should set startDate filter', () => {
    const state = filtersReducer(undefined, { type: fromAction.SET_START_DATE,
        startDate: 1000});
    expect(state.startDate).toBe(1000);
});

test('should set endDate filter', () => {
    const state = filtersReducer(undefined, { type: fromAction.SET_END_DATE,
        endDate: 1000});
    expect(state.endDate).toBe(1000);
});
