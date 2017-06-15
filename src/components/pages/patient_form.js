'use strict'

import React, { Component } from 'react'
import { Well, Panel, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap'
import { addPatient } from '../../actions/patientsActions'
import { findDOMNode } from 'react-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class PatientForm extends Component{

    handleSubmit() {
        const patient = [{
            nhi: findDOMNode(this.refs.NHI).value,
            firstName: findDOMNode(this.refs.firstName).value,
            lastName: findDOMNode(this.refs.lastName).value
        }]
        this.props.addPatient(patient)
    }


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
                    <Button 
                        bsStyle='primary'
                        onClick={this.handleSubmit.bind(this)}
                    >Save Patient</Button>
                </Panel>
            </Well>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators( { addPatient }, dispatch)
}

export default  connect(null, mapDispatchToProps)(PatientForm);
