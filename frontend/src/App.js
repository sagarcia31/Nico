import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function Home() {
    return <h2>Home</h2>;
}

function App() {
    return (
        <Router>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                </ul>
            </nav>
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
        </Router>
    );
}

export default App;
