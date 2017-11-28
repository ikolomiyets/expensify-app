import expensesReducer from '../../reducers/expenses';
import * as fromAction from '../../actions/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT'});
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = { type: fromAction.REMOVE_EXPENSE, id: expenses[1].id }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([
        expenses[0],
        expenses[2]
    ]);
});

test('should not remove expenses if id not found', () => {
    const action = { type: fromAction.REMOVE_EXPENSE, id: '-1' }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should not remove expenses if id not found', () => {
    const newExpense = {
        id: '3',
        description: 'new expense',
        note: '',
        amount: 8520,
        createdAt: 2000
    };
    const action = { type: fromAction.ADD_EXPENSE, expense: newExpense }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, newExpense]);
});

test('should not edit expenses if id not found', () => {
    const action = { type: fromAction.EDIT_EXPENSE, id: '-1', update: { description: 'updated description'} }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should edit expenses', () => {
    const action = { type: fromAction.EDIT_EXPENSE, id: '2', update: { description: 'updated description', note: 'note', amount: 2750} }
    const state = expensesReducer(expenses, action);
    expect(state[0]).toEqual(expenses[0]);
    expect(state[1]).toEqual({...expenses[1], description: 'updated description', note: 'note', amount: 2750});
    expect(state[2]).toEqual(expenses[2]);
});
