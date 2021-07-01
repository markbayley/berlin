import React from 'react';
import { Link } from 'react-router-dom';

const Charts = () => {
    return (
        <div>
            <h1>Charts</h1>
            <p>Charts to go here below</p>
            <Link to="/">
                <button>Home</button>
            </Link>
        </div>
    );
};

export default Charts;
