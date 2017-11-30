import React from 'react';
import ExpenseForm from './ExpenseForm';
import { editExpense } from '../actions/expenses';
import { connect } from 'react-redux';

export class EditExpense extends React.Component {
    constructor(props) {
        super(props);
    }

    onSubmit = (expense) => {
        this.props.onSubmit(this.props.expense.id, expense);
        this.props.history.push('/');
    };

    render() {
        return (
            <div className="container">
                <h1>Edit Expense</h1>
                <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit}/>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => {
            return expense.id === props.match.params.id;
        })
    };
};

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (expense) => dispatch(editExpense(id, expense))
});


export default connect(mapStateToProps, mapDispatchToProps)(EditExpense);