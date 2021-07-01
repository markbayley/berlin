import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Charts from './components/Charts';

function App() {
    return (
        <div className="App">
            <Router>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/charts" component={Charts} />
                    </Switch>
            </Router>
        </div>
    );
}
export default App;
