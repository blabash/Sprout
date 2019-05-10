import React from 'react';
import NavContainer from "./nav/nav_container";
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import PostFeedContainer from './dashboard/post_feed_container';
import Modal from './modal/modal';
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
    }

    render() {
        return (
            <div className="background" id="backGroundDiv">
                <Route path ="/" component={NavContainer} />
                {/* <Modal /> implement switch case modal functionality later*/}
                <Switch>
                    <ProtectedRoute exact path="/posts" component={PostFeedContainer}/>
                    <AuthRoute exact path="/login" component={LogInFormContainer} />
                    <AuthRoute exact path="/" component={SignUpFormContainer} />
                    <Redirect to="/" />
                </Switch>
            </div>
        )
    }
};

export default App;