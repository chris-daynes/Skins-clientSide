'use strict'

import { createStore, applyMiddleWare } from 'redux'
import logger from 'redux-logger'

//import the reducers
import reducers from './reducers/index'

//import the actions
import { addPatient } from './actions/patientsActions'


//STEP 1. Create a store
//create a store passing reducers as an argument
const store = createStore(reducers)

store.subscribe(function() {
    console.log('The current state: ',  store.getState())
})

//STEP 2. Create and dispatch some ACTIONS
//actions are payloads of information that send data from the app to store
//actions are the only source of data to the store. Send them off with store.dispatch()
//note that you pass an array of objects
store.dispatch({
    type: 'ADD_PATIENT',
    payload: [{
        nhi: 'ABC1234',
        firstName: 'Bob',
        lastName: 'Geldoff'
    },
    {
        nhi: 'CVB5678',
        firstName: 'Stray',
        lastName: 'Cats'
    }]
})

store.dispatch({
    type: 'DELETE_A_PATIENT',
    payload: {nhi: 'ABC1234'}
})