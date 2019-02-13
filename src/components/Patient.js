import React from 'react';

class Patient extends React.Component {


    constructor(props){
        super(props);
    }

    render(){
        let patientName= this.props.patientName;
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
                <hr />
            </div>

        );
    }
}

export default Patient;