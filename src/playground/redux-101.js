import React from 'react';
import { createStore } from 'redux';
import 'normalize.css/normalize.css';
import '../styles/styles.scss';

import '../index.html';
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';
export const SET = 'SET';

export const DoIncrement = (incrementBy = 1) => ({
    type: INCREMENT,
    incrementBy
});

export const DoDecrement = (decrementBy = 1) => ({
    type: DECREMENT,
    decrementBy
});

export const DoReset = () => ({
    type: RESET
});

export const DoSetCount = (value = 0) => ({
    type: SET,
    value
});

const countReducer = (state = { count: 0 }, action) => {
    if (action) {
        switch(action.type) {
            case INCREMENT:
                console.log(action);
                return {
                    count: state.count + action.incrementBy
                };
            case DECREMENT:
                return {
                    count: state.count - action.decrementBy
                };
            case RESET:
                return {
                    count: 0
                };
            case SET:
                return {
                    count: action.value
                };
            default:
                return state;
        }
    } else {
        return state;
    }
};

const store = createStore(countReducer);
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(DoIncrement(5));
store.dispatch(DoIncrement());
store.dispatch(DoDecrement(3));
store.dispatch(DoDecrement());

store.dispatch(DoReset());

store.dispatch(DoDecrement(2));
store.dispatch(DoSetCount(100));
