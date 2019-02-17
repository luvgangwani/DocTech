import React from 'react';

class Patient extends React.Component {


    constructor(props){
        super(props);
        this.handlePatientRecordEdit = this.handlePatientRecordEdit.bind(this);
        this.handlePatientRecordDelete = this.handlePatientRecordDelete.bind(this);
    }

    handlePatientRecordEdit(e){
        e.preventDefault();
        this.props.onPatientRecordEdit(this.props.patientId);
    }

    handlePatientRecordDelete(e){
        e.preventDefault();
        this.props.onPatientRecordDelete(this.props.patientId);
    }

    render(){
        let patientName = this.props.patientName;
        let patientAddress = `${this.props.patientAddress.addressApartmentNo}, ${this.props.patientAddress.addressStreet}, ${this.props.patientAddress.addressSuburb}, ${this.props.patientAddress.addressState}-${this.props.patientAddress.addressPostCode}`
        let patientGender = this.props.patientGender === "m" ? "Male" : "Female";
        let patientAge = this.props.patientAge;
        let patientOccupation = this.props.patientOccupation;

        return(
            <div>
                <p>{patientName}</p>
                <p>{patientAddress}</p>
                <p>{patientGender}</p>
                <p>{patientAge}</p>
                <p>{patientOccupation}</p>
                <a href="#" className="btn btn-default" onClick={this.handlePatientRecordEdit}>Edit</a>
                <a href="#" className="btn btn-default ml-2" onClick={this.handlePatientRecordDelete}>Delete</a>
                <hr />
            </div>

        );
    }
}

export default Patient;