import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';
import { EditExpense } from '../../components/EditExpense';

let onSubmitSpy, historySpy, wrapper;

beforeEach(() => {
    onSubmitSpy = jest.fn();
    historySpy = { push: jest.fn() };

    wrapper = shallow(<EditExpense expense={expenses[2]} onSubmit={onSubmitSpy} history={historySpy}/>);
});

test('should render EditExpense page correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
    wrapper.find(ExpenseForm).prop('onSubmit')(expenses[1]);
    expect(historySpy.push).toHaveBeenLastCalledWith('/');
    expect(onSubmitSpy).toHaveBeenLastCalledWith(expenses[2].id, expenses[1]);
});

