import {createStore, applyMiddleware, compose} from 'redux';

import thunkMiddleware from 'redux-thunk'


const composeEnhacer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 

export const store = createStore(
    
    composeEnhacer(applyMiddleware(thunkMiddleware))); // Esta linea nos permite hacer peticiones a un servidor