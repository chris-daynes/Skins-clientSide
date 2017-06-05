'use strict'

import { createStore, applyMiddleWare } from 'redux'
import logger from 'redux-logger'

//STEP 3. Create and define the reducers
const reducer = function(state={
    patients: [{
        nhi: 'hjk7890',
        firstName: 'John',
        lastName: 'Dude'
    }]
}, action) {
    const { type, payload } = action
    switch(type) {
        case 'ADD_PATIENT':
        return { patients: [...state.patients, ...payload]}

        case 'DELETE_A_PATIENT':
        //create a copy of state
        const stateArr = [...state.patients]
        //find the index of the pt to delete using findIndex
        const ptIndex = stateArr.findIndex(function(pt) {
            return pt.nhi === payload.nhi
        })
        //then remove from the arr using slice and return and object
        return {patients: [...stateArr.slice(0, ptIndex), ...stateArr.slice(ptIndex + 1)]}
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

store.dispatch({
    type: 'DELETE_A_PATIENT',
    payload: {nhi: 'ABC1234'}
})