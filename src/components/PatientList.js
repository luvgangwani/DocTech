import React from 'react';
import Patient from './Patient';

class PatientList extends React.Component {

    constructor(props){
        super(props);

        this.displayPatientList = this.displayPatientList.bind(this);
    }

    displayPatientList(patientData){
        return(
            patientData.map((pD, index) => (
                <Patient key={index} {...pD} />
            ))
        )
    }
    render(){
        return(
            <div>{this.displayPatientList(this.props.patientData)}</div>
        )
    }

}

export default PatientList;