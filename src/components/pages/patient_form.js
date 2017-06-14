'use strict'

import React, { Component } from 'react'
import { Well, Panel, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap'

class PatientForm extends Component{
    render() {
        return (
            <Well>
                I'm in the well!
                <Panel>
                    And I'm in the panel!
                </Panel>
            </Well>
        )
    }
}

export default PatientForm