import React from 'react';
import ReactDOM from 'react-dom';
import { login, logout, signup } from "./util/session_api_util"; //testing
import configureStore from './store/store';
import Root from "./components/root";



document.addEventListener('DOMContentLoaded', () => {

    // window.login = login; //testing
    // window.logout = logout; //testing
    // window.signup = signup; //testing
    
    // window.dispatch = store.dispatch; //testing

    let store;
    if (window.currentUser) {
        const preloadedState = {
            session: { id: window.currentUser.id },
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    window.store = store //testing
    
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
});