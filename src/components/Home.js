import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <h1>Home</h1>
            <p>A dashboard app with charts</p>
            <Link to="/charts">
                <button>Charts</button>
            </Link>
        </>
    );
}

export default Home
