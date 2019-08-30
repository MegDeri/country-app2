import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Navigation from './presentational/navigation.component';
import Contact from '.contact-component.js';
import NotFound from '.not-found-component.js';
import Home from '.home-component.js';

export default (
    <Route path='/' component={Navigation}>
        <IndexRoute component={Home}/>
        <Route path='contact/' component={Contact}/>
        <Route path='*' component={NotFound}/>
    </Route>
);