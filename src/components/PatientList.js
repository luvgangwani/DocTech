import React from 'react';
import Patient from './Patient';

var fs = eRequire('fs');

class PatientList extends React.Component {

    constructor(props){
        super(props);

        this.displayPatientList = this.displayPatientList.bind(this);
        this.patientRecordEdit = this.patientRecordEdit.bind(this);
        this.patientRecordDelete = this.patientRecordDelete.bind(this);
        this.viewPatientHistory = this.viewPatientHistory.bind(this);
    }

    patientRecordEdit(patientId){
        this.props.onPatientRecordEdit(patientId);
    }

    patientRecordDelete(patientId){
        this.props.onPatientRecordDelete(patientId);
    }

    viewPatientHistory(patientId){
        let patientObj = this.props.patientData[patientId];

        this.props.onViewPatientHistoryClick(patientObj);
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
        });

        return(
            patientData.map((eachPatient, index) => (
                <Patient
                key={index}
                {...eachPatient}
                onPatientRecordEdit={this.patientRecordEdit}
                onPatientRecordDelete={this.patientRecordDelete}
                onViewPatientHistory={this.viewPatientHistory} />
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