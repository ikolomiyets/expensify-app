import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';
import 'normalize.css/normalize.css';
import '../styles/styles.scss';

import '../index.html';

const ADD_EXPENSE = 'ADD_EXPENSE';
const REMOVE_EXPENSE = 'REMOVE_EXPENSE';
const EDIT_EXPENSE = 'EDIT_EXPENSE';
const SET_TEXT_FILTER = 'SET_TEXT_FILTER';
const SORT_BY_DATE = 'SORT_BY_DATE';
const SORT_BY_AMOUNT = 'SORT_BY_AMOUNT';
const SET_START_DATE = 'SET_START_DATE';
const SET_END_DATE = 'SET_END_DATE';

const addExpense = ({description = '', note = '', amount = 0, createdAt = 0}) => ({
    type: ADD_EXPENSE,
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

const removeExpense = (id) => ({
    type: REMOVE_EXPENSE,
    id
});

const editExpense = (id, update) => ({
    type: EDIT_EXPENSE,
    id,
    update
});

const setTextFilter = (text = '') => ({
    type: SET_TEXT_FILTER,
    text
});

const sortByDate = () => ({
   type: SORT_BY_DATE
});

const sortByAmount = () => ({
    type: SORT_BY_AMOUNT
});

const setStartDate = (startDate = undefined) => ({
    type: SET_START_DATE,
    startDate
});

const setEndDate = (endDate = undefined) => ({
    type: SET_END_DATE,
    endDate
});

const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    if (action) {
        switch(action.type) {
            case ADD_EXPENSE:
                return  [
                    ...state,
                    action.expense
                ];
            case REMOVE_EXPENSE:
                return state.filter(({ id }) => id !== action.id);
            case EDIT_EXPENSE:
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

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date', // date or amount
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    if (action) {
        switch(action.type) {
            case SET_TEXT_FILTER:
                return {
                    ...state,
                    text: action.text
                };
            case SORT_BY_DATE:
                return {
                    ...state,
                    sortBy: 'date'
                };
            case SORT_BY_AMOUNT:
                return {
                    ...state,
                    sortBy: 'amount'
                };
            case SET_START_DATE:
                return {
                    ...state,
                    startDate: action.startDate
                };
            case SET_END_DATE:
                return {
                    ...state,
                    endDate: action.endDate
                };
            default:
                return state;
        }
    } else {
        return state;
    }
};

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof startDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = typeof  text !== 'string' || expense.description.toLowerCase().includes(text.toLowerCase()) || expense.note.toLocaleUpperCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    });
};

const store = createStore(combineReducers({ expenses: expensesReducer, filters: filtersReducer }));

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
   console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100}));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 320}));

// store.dispatch(removeExpense(expenseOne.expense.id));
//
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());
// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());
// store.dispatch(setStartDate(123));
// store.dispatch(setEndDate(654));
// store.dispatch(setEndDate());
// store.dispatch(setStartDate());

const demoState = {
    expenses: [
        {
            id: 'poi',
            description: 'January Rent',
            note: 'This was the final payment for that address',
            amount: 54500,
            createdAt: 0
        }
    ],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
};

const user = {
    name: 'Jen',
    age: 24
};

console.log({
    ...user,
    age: 30
});