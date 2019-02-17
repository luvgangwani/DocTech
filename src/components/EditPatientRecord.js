import React from 'react';

class EditPatientRecord extends React.Component{

    constructor(props){
        super(props);

        // bind methods
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
         // set control value
        
         let currentPatientObj = this.props.patientData[this.props.editPatientId];
 
         this.refs.patientName.value = currentPatientObj.patientName;
         this.refs.addressApartmentNo.value = currentPatientObj.patientAddress.addressApartmentNo;
         this.refs.addressStreet.value = currentPatientObj.patientAddress.addressStreet;
         this.refs.addressSuburb.value = currentPatientObj.patientAddress.addressSuburb;
         this.refs.addressState.value = currentPatientObj.patientAddress.addressState;
         this.refs.addressPostCode.value = currentPatientObj.patientAddress.addressPostCode;
         this.refs.patientGender.value = currentPatientObj.patientGender;
         this.refs.patientAge.value = currentPatientObj.patientAge;
         this.refs.patientOccupation.value = currentPatientObj.patientOccupation;
         this.refs.patientContactNumber.value = currentPatientObj.patientContactNumber;
         this.refs.patientEmailAddress.value = currentPatientObj.patientEmailAddress;
    }

    handleSubmit(e){
        e.preventDefault();

        let patientId = this.props.editPatientId;
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

        let patientObj = {}
        
        patientObj = {
                patientId,
                patientName,
                patientAddress:{
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
                patientEmailAddress,
                created: this.props.patientData[this.props.editPatientId].created,
                updated: Date.now()
        }

        this.props.onEditPatientRecordSubmit(patientObj);
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
                    <h2>Edit Patient Record</h2>
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
                        <div className="form-group">
                            <label>Gender</label>
                         <select ref="patientGender" className="custom-select mb-2" defaultValue="selectGender">
                            <option className="dropdown-item" value="selectGender" disabled>--Select Gender--</option>
                            <option className="dropdown-item" value="m">Male</option>
                            <option className="dropdown-item" value="f">Female</option>
                            <option className="dropdown-item" value="o">Other</option>
                        </select>
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
                    </form>
            </div>
        );
    }
}

export default EditPatientRecord;