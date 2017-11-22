import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from "../actions/expenses";
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ id, description, amount, createdAt, dispatch} ) => (
    <p><Link to={`/edit/${id}`}>{description}</Link> - {amount} - {createdAt}<button onClick={() => {
       dispatch(removeExpense(id));
   }}>Remove</button></p>
);

export default connect()(ExpenseListItem);