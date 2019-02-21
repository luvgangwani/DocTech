import React from 'react';
import History from './History';

class HistoryList extends React.Component {
    constructor(props) {
        super(props);
        this.historyEditClick = this.historyEditClick.bind(this);
        this.historyDeleteClick = this.historyDeleteClick.bind(this);
    }

    historyEditClick(historyId){
        this.props.onHistoryEdit(historyId);
    }

    historyDeleteClick(historyId){
        this.props.onHistoryDelete(historyId);
    }

    render(){

        const patientHistoryObj = this.props.patientHistoryObj;

        return(
            Object.keys(patientHistoryObj).map((eachHistoryId, index) => (
                <History 
                key={index}
                {...patientHistoryObj[eachHistoryId]}
                onHistoryEdit={this.historyEditClick}
                onHistoryDelete={this.historyDeleteClick}
                />
            ))
        );
    }
}

export default HistoryList;