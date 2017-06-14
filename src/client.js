'use strict'

import { createStore, applyMiddleWare } from 'redux'
import logger from 'redux-logger'

//REACT
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux' 
import Main from './components/pages/main'




//import the reducers
import reducers from './reducers/index'

//import the actions
import { addPatient } from './actions/patientsActions'


//STEP 1. Create a store
//create a store passing reducers as an argument
const store = createStore(reducers)

render(
    <Provider store={store}>
        <Main />
    </Provider>, document.getElementById('app')
)


store.subscribe(function() {
    console.log('The current state: ',  store.getState())
})

//send out some actions 
store.dispatch({
    type: 'ADD_PATIENT',
    payload: [{
        _id: 2,
        nhi: 'ABC1234',
        firstName: 'Bob',
        lastName: 'Geldoff'
    },
    {
        _id: 3,
        nhi: 'CVB5678',
        firstName: 'Stray',
        lastName: 'Cats'
    }]
})

