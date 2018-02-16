import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from 'components/Home';
import Shelf from './components/Shelf';


export default(
    <Switch>
        <Route component={ Home } exact path ='/'/>
        <Route component= { Shelves }  path = '/shelf/:id' />
        
    </Switch>
)