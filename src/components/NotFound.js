import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
    <div className="container">
        404! - <Link to="/">Go Back</Link>
    </div>
);

export default NotFoundPage;