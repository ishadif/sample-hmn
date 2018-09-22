import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import Home from './pages/Home';

class HMN extends Component {
    render() {
        // return (
        //     <Home/>
        // )
        return (
            <Router>
                <Route exact path="/" component={Home} />
            </ Router>
        )
    }
}

ReactDOM.render(<HMN />, document.getElementById('root'));
registerServiceWorker();
