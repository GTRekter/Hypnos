import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import Home from './components/Home';
import Settings from './components/Settings';
import Countdown from './components/Countdown';

export default class App extends Component {
    render () {
        return (
            <Layout>
                <Route exact path='/' component={Home} />
                <Route exact path='/settings' component={Settings} />
                <Route exact path='/Countdown' component={Countdown} />
            </Layout>
        );
    }
}