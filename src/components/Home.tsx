import React from 'react'
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <p>A dashboard app with charts</p>
            <Link to="/charts">
                <Button
                    variant="contained"
                    color="secondary"
                    size="medium"
                >
                    Charts
                </Button>
            </Link>
        </div>
    );
}

export default Home
