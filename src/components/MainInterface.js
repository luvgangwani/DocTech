import React from 'react';
import Header from './Header';
import Home from './Home';
import AddNewPatient from './AddNewPatient';
import PatientList from './PatientList';
import EditPatientRecord from './EditPatientRecord';
import ErrorPage from './ErrorPage';
import patientData from '../../data/patient.json';

var fs = eRequire('fs');

class MainInterface extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            content: "home",
            editPatientId: null,
            patientData
        }
        this.setContent = this.setContent.bind(this);
        this.homeClick = this.homeClick.bind(this);
        this.addNewPatientClick = this.addNewPatientClick.bind(this);
        this.addNewPatientSubmit = this.addNewPatientSubmit.bind(this);
        this.viewPatientClick = this.viewPatientClick.bind(this);
        this.patientRecordEdit = this.patientRecordEdit.bind(this);
        this.patientRecordEditSubmit = this.patientRecordEditSubmit.bind(this);
        this.patientRecordDelete = this.patientRecordDelete.bind(this);
    }

    componentDidMount(){
    }

    homeClick(){
        this.setState({
            content: "home"
        });
    }
    
    addNewPatientClick(){
        this.setState({
            content: "addNewPatientFormDisplay"
        });
    }

    addNewPatientSubmit(patientObj){

        var patientData = this.state.patientData
        patientData[patientObj.patientId] = patientObj;

        this.setState({
            patientData
        });

        fs.writeFileSync(patientFile, JSON.stringify(this.state.patientData), 'utf-8', (err) => {
            if(err){
                console.log(error);
            }
        });
    }

    viewPatientClick(){
        this.setState({
            content: "viewPatientList"
        });
    }

    patientRecordEdit(patientId){
        this.setState({
            content:'editPatientRecord',
            editPatientId: patientId
            
        });
    }

    patientRecordEditSubmit(patientObj){
        
        let patientData = this.state.patientData;

        patientData[this.state.editPatientId] = patientObj
        
        this.setState({
            content: "home",
            editPatientId: null,
            patientData
        });

        fs.writeFileSync(patientFile, JSON.stringify(this.state.patientData), 'utf-8', (err)=>{
            if(err){
                console.log(err);
            }
        });
    }
    patientRecordDelete(patientId){
        
        var patientData = this.state.patientData;

        delete patientData[patientId];

        this.setState({
            patientData
        })

        fs.writeFileSync(patientFile, JSON.stringify(patientData), 'utf-8', (err) => {
            if (err){
                console.log(err);
            }
        });

    }

    setContent(){
        if (this.state.content === "home") {
            return <Home />
        }
        else if (this.state.content === "addNewPatientFormDisplay"){
            return <AddNewPatient onAddNewPatientSubmit={this.addNewPatientSubmit} />
        }
        else if (this.state.content === "viewPatientList"){
            return <PatientList
                    patientData={this.state.patientData}
                    onPatientRecordEdit={this.patientRecordEdit}
                    onPatientRecordDelete={this.patientRecordDelete} />
        }
        else if (this.state.content==="editPatientRecord"){
            if (this.state.editPatientId != null){
                return <EditPatientRecord
                 patientData={this.state.patientData}
                 editPatientId={this.state.editPatientId}
                 onEditPatientRecordSubmit={this.patientRecordEditSubmit} />
            }
            else {
                return <ErrorPage
                 message="There has been some issue while editing this patient record." />
            }
        }
    }

    render(){
        return(
            <div className = "container-fluid">
                <Header
                onHomeClick = {this.homeClick}
                onAddNewPatientClick = {this.addNewPatientClick}
                onViewPatientClick = {this.viewPatientClick} />
                {this.setContent()}
            </div>
        );
    }

}

export default MainInterface;