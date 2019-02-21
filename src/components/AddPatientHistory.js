import React from 'react';
import shortid from 'shortid';
import HistoryList from './HistoryList';

class AddPatientHistory extends React.Component {
    
    constructor(props){
        super(props);
        
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleReset=this.handleReset.bind(this);
        this.displayPatientHistory = this.displayPatientHistory.bind(this);
        this.historyEditClick = this.historyEditClick.bind(this);
        this.historyDeleteClick = this.historyDeleteClick.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        
        let historyId = shortid.generate();
        let patientHistory = this.refs.patientHistory.value;

        let historyObj = {
            historyId,
            patientHistory,
            created: Date.now(),
            updated: Date.now()
        }

        this.props.onPatientHistorySubmit(historyObj);
        this.handleReset();

    }

    handleReset(){
        this.refs.patientHistory.value="";
    }

    historyEditClick(historyId){
        this.props.onHistoryEdit(historyId);
    }
    historyDeleteClick(historyId){
        this.props.onHistoryDelete(historyId);
    }

    displayPatientHistory(historyData, patientId){
        if (Object.keys(historyData).length != 0 && Object.keys(historyData).includes(patientId)){
            return <HistoryList
                    patientHistoryObj={historyData[patientId]}
                    onHistoryEdit={this.historyEditClick}
                    onHistoryDelete={this.historyDeleteClick} />
        }
        else {
            return <p>This patient does not have any history records!</p>
        }
    }
    render(){
        const patientId = this.props.newPatientObj.patientId;
        const patientName = this.props.newPatientObj.patientName;
        const historyData = this.props.historyData;

        return(
            <div className="container-fluid">
                <h2>Previous History</h2>
                {this.displayPatientHistory(historyData, patientId)}
                <hr />
                <h2>Add Patient History - {patientName}</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="patientHistory">
                            Add Patient's History
                        </label>
                        <textarea
                        ref="patientHistory"
                        placeholder="Enter new history record for the patient"
                        className="form-control"
                        id="patientHistory">
                        </textarea>
                    </div>
                    <button type="button" className="btn btn-default" onClick={this.handleSubmit}>Submit</button>
                    <button type="button" className="btn btn-default ml-2" onClick={this.handleReset}>Cancel</button>
                </form>
            </div>
        );
    }
}

export default AddPatientHistory;