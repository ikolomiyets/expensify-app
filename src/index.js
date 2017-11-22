import React from 'react';
import ReactDOM from 'react-dom';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import { Provider } from 'react-redux';
import filter from './selectors/expenses';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

import configureStore from './store/configureStore';

import './index.html';
import AppRouter from './routers/AppRouter';

const store = configureStore();
console.log(store.getState());

store.dispatch(addExpense({ description: 'Water bill', amount: 7480}));
store.dispatch(addExpense({ description: 'Gas bill', amount: 17122, createdAt: 1000}));
store.dispatch(addExpense({ description: 'Rent', amount: 109500}));
store.dispatch(setTextFilter('bill'));
console.log(filter(store.getState().expenses, store.getState().filters))

setTimeout(() => {
    store.dispatch(setTextFilter('water'));
}, 3000);

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));