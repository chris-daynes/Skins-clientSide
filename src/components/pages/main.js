import React, { Component } from 'react'

import Demographics from './demographics'
import PatientForm from './patient_form'

class Main extends Component{
    render() {
        return (
            <div>
                <h1>Hello React</h1>
                <Demographics />
                <PatientForm />
            </div>
        )
    }
}

export default Main