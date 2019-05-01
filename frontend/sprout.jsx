import React from 'react';
import ReactDOM from 'react-dom';
import { login, logout, signup } from "./util/session_api_util"; //testing
import configureStore from './store/store';
import Root from "./components/root";



document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore();

    // window.login = login; //testing
    // window.logout = logout; //testing
    // window.signup = signup; //testing
    window.getState = store.getState; //testing
    window.dispatch = store.dispatch; //testing
    
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
});