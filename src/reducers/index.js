'use strict'

import { combineReducers } from 'redux'

import { patientsReducers } from './patientsReducers'

export default combineReducers({
    patients: patientsReducers
})