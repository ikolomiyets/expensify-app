import React from 'react';
import { shallow } from 'enzyme';
import { AddExpense} from '../../components/AddExpense';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

let onSubmitSpy, historySpy, wrapper;

beforeEach(() => {
    onSubmitSpy = jest.fn();
    historySpy = { push: jest.fn() };

    wrapper = shallow(<AddExpense onSubmit={onSubmitSpy} history={historySpy}/>);
});

test('should render AddExpense page correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
    wrapper.find(ExpenseForm).prop('onSubmit')(expenses[1]);
    expect(historySpy.push).toHaveBeenLastCalledWith('/');
    expect(onSubmitSpy).toHaveBeenLastCalledWith(expenses[1]);
});

