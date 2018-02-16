import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Shelf from './components/Shelf';
import Bin from './components/Bin';


export default(
    <Switch>
        <Route component={ Home } exact path ='/'/>
        <Route component= { Shelf }  path = '/shelf/:letter' />
        <Route component= { Bin } path = '/bin/:id'/>
    </Switch>
)