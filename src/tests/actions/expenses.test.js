import * as fromActions from '../../actions/expenses';

test('add expense creates action', () => {
    const action = fromActions.addExpense({});
    expect(action).toBeDefined();
    expect(action.type).toBe(fromActions.ADD_EXPENSE);
    expect(action.expense.description).toBe('');
    expect(action.expense.note).toBe('');
    expect(action.expense.amount).toBe(0);
    expect(action.expense.createdAt).toBe(0);
    expect(action.expense.id).toBeDefined();
});

test('edit expense valid', () => {
    const action = fromActions.editExpense('1121', {
        description: 'test description',
        note: 'test note',
        amount: 1234,
        createdAt: 113
    });
    expect(action).toEqual({
        id: '1121',
        type: fromActions.EDIT_EXPENSE,
        update: {
            description: 'test description',
            note: 'test note',
            amount: 1234,
            createdAt: 113
        }
    });
});


test('remove expense valid', () => {
    const action = fromActions.removeExpense('1243');
    expect(action).toEqual({
        id: '1243',
        type: fromActions.REMOVE_EXPENSE
    });
});