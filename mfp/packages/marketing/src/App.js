import React from "react";
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { StylesProvider } from '@material-ui/core/styles'

import Landing from './components/Landing';
import Pricing from './components/Pricing';

// eslint-disable-next-line react/display-name
export default () => {
    console.log('is this component being hit?');
    return <div>
        <StylesProvider>
            <BrowserRouter>
            <Switch>
                <Route exact path = "/pricing" component = { Pricing } />
                <Route path = "/"component = { Landing }  /> 
            </Switch> 
            </BrowserRouter>
        </StylesProvider > 
        </div>
}