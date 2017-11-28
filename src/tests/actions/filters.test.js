import moment from 'moment';
import * as fromAction from "../../actions/filters";

test('should generate set start date action object', () => {
    const action = fromAction.setStartDate(moment(0));
    expect(action).toEqual({
        type: fromAction.SET_START_DATE,
        startDate: moment(0)
    });
});

test('should generate set start date action object with default value', () => {
    const action = fromAction.setStartDate();
    expect(action).toEqual({
        type: fromAction.SET_START_DATE,
        startDate: undefined
    });
});

test('should generate set end date action object', () => {
    const action = fromAction.setEndDate(moment(0));
    expect(action).toEqual({
        type: fromAction.SET_END_DATE,
        endDate: moment(0)
    });
});

test('should generate set end date action object with default value', () => {
    const action = fromAction.setEndDate();
    expect(action).toEqual({
        type: fromAction.SET_END_DATE,
        endDate: undefined
    });
});

test('should generate set text filter action object', () => {
    const action = fromAction.setTextFilter('test');
    expect(action).toEqual({
        type: fromAction.SET_TEXT_FILTER,
        text: 'test'
    });
});

test('should generate set test filter action object with default value', () => {
    const action = fromAction.setTextFilter();
    expect(action).toEqual({
        type: fromAction.SET_TEXT_FILTER,
        text: ''
    });
});

test('should generate sort by date action object', () => {
    const action = fromAction.sortByDate();
    expect(action).toEqual({
        type: fromAction.SORT_BY_DATE
    });
});

test('should generate sort by amount action object', () => {
    const action = fromAction.sortByAmount();
    expect(action).toEqual({
        type: fromAction.SORT_BY_AMOUNT
    });
});

