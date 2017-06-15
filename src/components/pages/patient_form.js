'use strict'

import React, { Component } from 'react'
import { Well, Panel, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap'

class PatientForm extends Component{
    render() {
        return (
            <Well>
                <Panel>
                    <FormGroup>
                        <ControlLabel>NHI</ControlLabel>
                        <FormControl 
                            type='text'
                            placeholder='Enter the NHI'
                            ref='NHI'/>
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>First Name</ControlLabel>
                        <FormControl 
                            type='text'
                            placeholder='Enter first name'
                            ref='firstName'/>
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Last Name</ControlLabel>
                        <FormControl 
                            type='text'
                            placeholder='Enter last name'
                            ref='lastName'/>
                    </FormGroup>
                    <Button bsStyle='primary'>Save Patient</Button>
                </Panel>
            </Well>
        )
    }
}

export default PatientForm