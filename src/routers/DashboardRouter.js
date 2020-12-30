import React from 'react';
import { Navbar } from '../components/ui/Navbar';

import { Redirect, Route, Switch } from 'react-router-dom';
import { HeroScreen } from '../components/heroes/HeroScreen';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { DcScreen } from '../components/dc/DcScreen';

export const DashboardRouter = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className="container mt-2">
                <Switch>
                    <Route exact path="/marvel" component={MarvelScreen} />
                    <Route exact path="/dc" component={DcScreen} />
                    <Route exact path="/heroe/:heroeId" component={HeroScreen} />
                    <Redirect to="/marvel" />
                </Switch>
            </div>

        </>
    )
}
