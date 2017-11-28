import React from 'react';
import { ExpenseList } from '../../components/ExpenseList';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';

test('should rendered expense list with expenses', () => {
    const wrapper = shallow(<ExpenseList expenses={expenses} />);
    expect(wrapper).toMatchSnapshot();
});

test('should rendered expense list with empty array', () => {
    const wrapper = shallow(<ExpenseList expenses={[]} />);
    expect(wrapper).toMatchSnapshot();
});
