import React from 'react'

import { Route, Switch } from 'react-router-dom'

import LearnerDashboard from '../pages/LearnerDashboard'


import requestpage from '../pages/requestpage' 
import reportissue from '../pages/reportissue'
import Status from '../pages/Status'
import Profile from '../components/Profilepage/Profile.js'


const LearnerRoutes = () => {
    return (
        <Switch>

<Route exact path='/' component={LearnerDashboard}/>
<Route path='/logrequest' component={requestpage}/>
<Route path="/report" component={reportissue}/>
<Route path="/status" component={Status}/>
<Route path = '/Profile' component={Profile}/>

        </Switch>
    )
}

export default LearnerRoutes