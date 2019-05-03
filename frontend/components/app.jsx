import React from 'react';
import NavContainer from "./nav/nav_container";
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import PostConstainer from './posts/posts';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
        // console.log(props);
    }

    render() {
        return (
            <div className="background" id="backGroundDiv">
                <header>
                    <Route path ="/" component={NavContainer} />
                </header>
                {/* <div className="background" id="backGroundDiv"></div> */}
                <Switch>
                    <ProtectedRoute exact path="/posts" component={PostConstainer}/>
                    <AuthRoute exact path="/login" component={LogInFormContainer} />
                    <AuthRoute exact path="/" component={SignUpFormContainer} />
                    <Redirect to="/" />
                </Switch>
            </div>
        )
    }
};

export default App;