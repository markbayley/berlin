import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Charts from './components/Charts';
import ToggleMenu from './components/ToggleMenu';

function App() {
    return (
        <div className="App">
            <Router>
                <ToggleMenu />
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/charts" component={Charts} />
                    </Switch>
            </Router>
        </div>
    );
}
export default App;
