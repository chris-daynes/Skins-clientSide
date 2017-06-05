'use strict'

export function patientsReducers (state = {
    patients: [{
        _id: 1,
        nhi: 'UGT8467',
        firstName: 'Dummy',
        lastName: 'Patient'
    }]
}, action) {
    const { type, payload } = action
    switch(type) {
        case 'ADD_PATIENT':
        return { patients: [...state.patients, ...payload]}
    }
    return state
}