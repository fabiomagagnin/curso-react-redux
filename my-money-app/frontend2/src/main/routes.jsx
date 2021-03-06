import React from 'react'
import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router'

//import App from './app'
//import Dashboard from '../dashboard/dashboard'
import Dashboard from '../dashboard2/dashboard2'
import BillingCycle from '../billingCycle/billingCycle'

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={Dashboard} />
        <Route path='/billingCycles' component={BillingCycle} />
        <Redirect from='*' to='/' />
    </Router>    

)