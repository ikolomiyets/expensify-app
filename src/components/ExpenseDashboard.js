import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

const ExpenseDashboard = (props) => (
    <div className="container">
        <ExpenseListFilters/>
        <ExpenseList history={props.history}/>
    </div>
);

export default ExpenseDashboard;