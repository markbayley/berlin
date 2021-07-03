import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const Charts = () => {
    return (
        <div>
            <h1>Charts</h1>
            <p>Charts to go here below</p>
            <Link to="/">
                <Button variant="contained" color="primary" size="medium">
                    Home
                </Button>
            </Link>
        </div>
    );
};

export default Charts;
