'use strict'

import { createStore, applyMiddleWare } from 'redux'
import logger from 'redux-logger'

//STEP 3. Create and define the reducers
const reducer = function(state=[], action) {
    const { type, payload } = action
    switch(type) {
        case 'ADD_PATIENT':
        return [...state, ...payload]
    }
    return state
}


//STEP 1. Create a store
//create a store passing reducers as an argument
const store = createStore(reducer)

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









//ACTIONS
//add a pt to state
store.dispatch