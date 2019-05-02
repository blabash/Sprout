import React from 'react';
import DashboardContainer from "./dashboard/dashboard_container";
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';

import PostConstainer from './posts/posts';

const App = () => {
    return (
        <div>
            <header>
                {/* <DashboardContainer /> */}
            </header>
            {/* <PostConstainer /> */}
            <div className="background" id="backGroundDiv"></div>
            <AuthRoute exact path="/login" component={LogInFormContainer} />
            <AuthRoute exact path="/" component={SignUpFormContainer} />
        </div>
    )
};

export default App;