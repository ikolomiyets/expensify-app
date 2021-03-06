import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { addExpense } from '../actions/expenses';

export class AddExpense extends React.Component {
    constructor(props) {
        super(props);
    }

    onSubmit = (expense) => {
        this.props.onSubmit(expense);
        this.props.history.push('/');
    };

    render() {
        return (
            <div className="container">
                <h1>Add Expense</h1>
                <ExpenseForm onSubmit={this.onSubmit}/>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (expense) => dispatch(addExpense(expense))
});


export default connect(undefined, mapDispatchToProps)(AddExpense);
