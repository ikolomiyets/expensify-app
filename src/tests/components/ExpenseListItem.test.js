import React from 'react';
import { ExpenseListItem } from '../../components/ExpenseListItem';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';

test('should render expense item', () => {
    const wrapper = shallow(<ExpenseListItem
        {...expenses[0]} />);
    expect(wrapper).toMatchSnapshot();
});