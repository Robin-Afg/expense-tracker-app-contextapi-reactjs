import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {HashRouter, Switch, Route} from 'react-router-dom';

//HashRouter fixed the problem of blank screen instead of BrowserRouter
ReactDOM.render(
    <HashRouter basename="/React">
        <Switch>
            <Route exact path="/" component={App} />
        </Switch>
    </HashRouter>
,document.getElementById('root'));

