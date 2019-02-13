import React from 'react';
import Header from './Header';
import Home from './Home';
import PatientList from './PatientList';
import patientData from '../../data/patient.json';

class MainInterface extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            content: "home",
            patientData
        }
        this.setContent = this.setContent.bind(this);
        this.homeClick = this.homeClick.bind(this);
        this.viewPatientClick = this.viewPatientClick.bind(this);
    }

    componentDidMount(){
    }

    homeClick(){
        this.setState({
            content: "home"
        });
    }

    viewPatientClick(){
        this.setState({
            content: "viewPatientList"
        });
    }

    setContent(){
        if (this.state.content === "viewPatientList"){
            return <PatientList
                    patientData = {this.state.patientData} />
        }
        else if (this.state.content === "home") {
            return <Home />
        }
    }

    render(){
        return(
            <div className = "container-fluid">
                <Header
                onHomeClick = {this.homeClick}
                onViewPatientClick = {this.viewPatientClick} />
                {this.setContent()}
            </div>
        );
    }

}

export default MainInterface;