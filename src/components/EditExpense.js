import React from 'react';
import ExpenseForm from './ExpenseForm';
import { editExpense } from "../actions/expenses";
import { connect } from 'react-redux';

const EditExpense = (props) => {
    return (
        <div className="container">
            <h1>Edit Expense</h1>
            <ExpenseForm expense={props.expense} onSubmit={(expense) => {
                props.dispatch(editExpense(props.expense.id, expense));
                props.history.push('/');
            }}/>
        </div>
    );
};

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => {
            return expense.id === props.match.params.id;
        })
    };
};

export default connect(mapStateToProps)(EditExpense);