import React from 'react';

const EditExpense = (props) => {
    console.log(props);
    return (
        <div className="container">
            <p>Editing expense with ID: {props.match.params.id}</p>
        </div>
    );
};

export default EditExpense;