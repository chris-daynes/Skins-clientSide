'use strict'

//add a patient
export function addPatient(patient) {
    return {
        type: 'ADD_PATIENT',
        payload: patient
    }
}

