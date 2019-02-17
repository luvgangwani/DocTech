import React from 'react';
import Patient from './Patient';

var fs = eRequire('fs');

class PatientList extends React.Component {

    constructor(props){
        super(props);

        this.displayPatientList = this.displayPatientList.bind(this);
        this.patientRecordEdit = this.patientRecordEdit.bind(this);
        this.patientRecordDelete = this.patientRecordDelete.bind(this);
    }

    patientRecordEdit(patientId){
        this.props.onPatientRecordEdit(patientId);
    }

    patientRecordDelete(patientId){
        this.props.onPatientRecordDelete(patientId);
    }

    displayPatientList(tempPatientData){ // try improving this code
        var patientData = [];

        Object.keys(tempPatientData).map((pDId) => {
            const pDIdValues = tempPatientData[pDId];
            var tempPatientObj = {
                patientId: pDId,
                patientName: pDIdValues.patientName,
                patientAddress: pDIdValues.patientAddress,
                patientGender: pDIdValues.patientGender,
                patientAge: pDIdValues.patientAge,
                patientOccupation: pDIdValues.patientOccupation,
                patientContactNumber: pDIdValues.patientContactNumber,
                patientEmailAddress: pDIdValues.patientEmailAddress
            }

            patientData.push(tempPatientObj);
        })

        return(
            patientData.map((eachPatient, index) => (
                <Patient
                key={index}
                {...eachPatient}
                onPatientRecordEdit={this.patientRecordEdit}
                onPatientRecordDelete={this.patientRecordDelete} />
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