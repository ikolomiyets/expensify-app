import * as fromActions from '../actions/expenses';

const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
    if (action) {
        switch(action.type) {
            case fromActions.ADD_EXPENSE:
                return  [
                    ...state,
                    action.expense
                ];
            case fromActions.REMOVE_EXPENSE:
                return state.filter(({ id }) => id !== action.id);
            case fromActions.EDIT_EXPENSE:
                return state.map((expense) => {
                    if (expense.id === action.id) {
                        return {
                            ...expense,
                            ...action.update
                        }
                    } else {
                        return expense;
                    }
                });
            default:
                return state;
        }
    } else {
        return state;
    }
};

