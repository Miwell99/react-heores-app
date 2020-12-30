import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { DashboardRouter } from './DashboardRouter';

import { LoginScreen } from '../components/login/LoginScreen';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/login" component={LoginScreen} />
                    <Route path="/" component={DashboardRouter} />
                </Switch>
            </div>
        </Router>
    );
}
