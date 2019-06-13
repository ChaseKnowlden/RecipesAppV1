import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";


import App from '../App'
import SingleRecipe from './SingleRecipe'



const Router = () =>(
    <BrowserRouter>
        <Switch>
        <Route  exact path="/" component={App} />
        <Route path="/recipe/:id" component={SingleRecipe}/>
        </Switch>
    </BrowserRouter>
);

export default Router;