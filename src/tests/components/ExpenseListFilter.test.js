import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';
import { DateRangePicker } from 'react-dates';
import moment from '../__mocks__/moment';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(<ExpenseListFilters
        filters={filters}
        setTextFilter={setTextFilter}
        sortByDate={sortByDate}
        sortByAmount={sortByAmount}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
    />);
});

test('should render ExpenseListFilters page correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters page with alt filters data correctly', () => {
    wrapper.setProps({ filters: altFilters });
    expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
    const text = 'rent';
    wrapper.find('input').prop('onChange')({ target: { value: text } });
    expect(setTextFilter).toHaveBeenLastCalledWith(text);
});

test('should sort by date', () => {
    const selection = 'date';
    wrapper.find('select').prop('onChange')({ target: { value: selection } });
    expect(sortByDate).toHaveBeenCalled();
});

test('should sort by amount', () => {
    const selection = 'amount';
    wrapper.find('select').prop('onChange')({ target: { value: selection } });
    expect(sortByAmount).toHaveBeenCalled();
});

test('should handle date change', () => {
    const startDate = moment(0);
    const endDate = startDate.add(3, 'month');

    wrapper.find(DateRangePicker).prop('onDatesChange')({ startDate, endDate });
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test('should handle date focus change', () => {
    const calendarFocused = 'startDate';

    wrapper.find(DateRangePicker).prop('onFocusChange')(calendarFocused);
    expect(wrapper.state('calendarFocused')).toEqual(calendarFocused);
});

