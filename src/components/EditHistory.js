import React from 'react';

class EditHistory extends React.Component {
    
    constructor(props){
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    componentDidMount(){

        const historyData = this.props.historyData;
        const patientObj = this.props.patientObj;
        const historyId = this.props.historyId;

        this.refs.patientHistory.value = historyData[patientObj.patientId][historyId].patientHistory;
    }

    handleSubmit(e){
        e.preventDefault();

        const historyId = this.props.historyId;

        const patientHistory = this.refs.patientHistory.value;
        
        const historyData = this.props.historyData;

        const patientObj = this.props.patientObj;

        let historyObj = {
            historyId,
            patientHistory,
            created: historyData[patientObj.patientId][historyId].created,
            updated: Date.now()
        }

        this.props.onEditHistorySubmit(patientObj.patientId, historyObj);
    }

    handleCancel(){
        this.props.onEditHistoryCancel(this.props.patientObj);
    }
    render(){
        let patientObj = this.props.patientObj;

        return(
            <div className="container-fluid">
                <h2>Edit Patient History - {patientObj.patientName}</h2>
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
                    <button type="button" className="btn btn-default ml-2" onClick={this.handleCancel}>Cancel</button>
                </form>
            </div>
        )
    }
}

export default EditHistory;