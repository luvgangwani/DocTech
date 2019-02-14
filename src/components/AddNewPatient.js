import React from 'react';
import shortid from 'shortid';

class AddNewPatient extends React.Component {

    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();

        let patientId = shortid.generate();
        let patientName = this.refs.patientName.value;
        let addressApartmentNo = this.refs.addressApartmentNo.value;
        let addressStreet = this.refs.addressStreet.value;
        let addressSuburb = this.refs.addressSuburb.value;
        let addressState = this.refs.addressState.value;
        let addressPostCode = this.refs.addressPostCode.value;
        let patientGender = this.refs.patientGender.value;
        let patientAge = this.refs.patientAge.value;
        let patientOccupation = this.refs.patientOccupation.value;
        let patientContactNumber = this.refs.patientContactNumber.value;
        let patientEmailAddress = this.refs.patientEmailAddress.value;

        let patientObj = {
            patientId,
            patientName,
            "patientAddress":{
                addressApartmentNo,
                addressStreet,
                addressSuburb,
                addressState,
                addressPostCode,
            },
            patientGender,
            patientAge,
            patientOccupation,
            patientContactNumber,
            patientEmailAddress
        }

        this.props.onAddNewPatientSubmit(patientObj);

    }

    handleReset(){
        this.refs.patientName.value = '';
        this.refs.addressApartmentNo.value = '';
        this.refs.addressStreet.value = '';
        this.refs.addressSuburb.value = '';
        this.refs.addressState.value = 'selectState';
        this.refs.addressPostCode.value = '';
        this.refs.patientGender.value = 'm';
        this.refs.patientAge.value = '';
        this.refs.patientOccupation.value = '';
        this.refs.patientContactNumber.value = '';
        this.refs.patientEmailAddress.value = '';
    }

    render(){

        var stateDetails = [ // Make this configurable
            {
                stateName:"Australia",
                stateValue: {
                    "NSW":"New South Whales",
                    "NT": "Northern Territory",
                    "WA":"Western Australia",
                    "QLD": "Queensland",
                    "SA": "South Australia",
                    "VIC": "Victoria",
                    "TAS": "Tasmania"
                }
            }
        ]

        return(
            <div className="container-fluid">
                    <h2>Add New Patient</h2>
                    <form>
                        <div className="form-group">
                            <label htmlFor="patientName">Name</label>
                            <input ref="patientName" type="text" className="form-control" id="patientName" aria-describedby="patientName" placeholder="Enter Name" />
                        </div>
                        <div className="form-group">
                            <label>Address</label>
                            <div className="card">
                                <div className="card-body">
                                    <div className="form-group">
                                        <label htmlFor="addressApartmentNo">Apartment/Unit No.</label>
                                        <input ref="addressApartmentNo" type="text" className="form-control" id="addressApartmentNo" aria-describedby="addressApartmentNo" placeholder="Enter Apartment/Unit No." />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="addressStreet">Street Name</label>
                                        <input ref="addressStreet" type="text" className="form-control" id="addressStreet" aria-describedby="addressStreet" placeholder="Enter Street" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="addressSuburb">Suburb</label>
                                        <input ref="addressSuburb" type="text" className="form-control" id="addressSuburb" aria-describedby="addressSuburb" placeholder="Enter Suburb" />
                                    </div>
                                    <div className="form-group">
                                        <label>State</label>
                                        <select ref="addressState" className="custom-select mb-2" defaultValue="selectState">
                                            <option className="dropdown-item" value="selectState" disabled>--Select State--</option>
                                            <option className="dropdown-item" value="NSW">New South Whales</option>
                                            <option className="dropdown-item" value="NT">Northern Territory</option>
                                            <option className="dropdown-item" value="WA">Western Australia</option>
                                            <option className="dropdown-item" value="QLD">Queensland</option>
                                            <option className="dropdown-item" value="SA">South Australia</option>
                                            <option className="dropdown-item" value="VIC">Victoria</option>
                                            <option className="dropdown-item" value="TAS">Tasmania</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="addressPostCode">Post Code</label>
                                        <input ref="addressPostCode" type="text" className="form-control" id="addressPostCode" aria-describedby="addressPostCode" placeholder="Enter Post Code" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-group form-check form-check-inline">
                            <input ref="patientGender" type="radio" className="form-check-input" id="gender-m" name="patientGender" value="m" />
                            <label className="form-check-label">Male</label>
                        </div>
                        <div className="form-group form-check form-check-inline">
                            <input ref="patientGender" type="radio" className="form-check-input" id="gender-f" name="patientGender" value="f" />
                            <label className="form-check-label">Female</label>
                        </div>
                        <div className="form-group">
                            <label htmlFor="patientAge">Age</label>
                            <input ref="patientAge" type="text" className="form-control" id="patientAge" aria-describedby="patientAge" placeholder="Enter Age" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="patientOccupation">Occupation</label>
                            <input ref="patientOccupation" type="text" className="form-control" id="patientOccupation" aria-describedby="patientOccupation" placeholder="Enter Occupation" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="patientContactNumber">Contact Number</label>
                            <input ref="patientContactNumber" type="text" className="form-control" id="patientContactNumber" aria-describedby="patientContactNumber" placeholder="Enter Contact Number" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="patientEmailAddress">Email Address</label>
                            <input ref="patientEmailAddress" type="email" className="form-control" id="patientEmailAddress" aria-describedby="patientEmailAddress" placeholder="Enter Email Address" />
                        </div> 
                        <button type="button" className="btn btn-default" onClick={this.handleSubmit}>Submit</button>
                        <button type="button" className="btn btn-default ml-2" onClick={this.handleReset}>Cancel</button> 
                    </form>
            </div>
        )
    }
}

export default AddNewPatient;