import React from 'react';

class History extends React.Component {
    
    constructor(props){
        super(props);
        
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleEdit(e){
        e.preventDefault();

        this.props.onHistoryEdit(this.props.historyId);
    }

    handleDelete(e){
        e.preventDefault();

        this.props.onHistoryDelete(this.props.historyId);
    }
    render(){
        return(
            <div>
                <p>{this.props.patientHistory}</p>
                <p>Created: {convertUnixTimeToDate(this.props.created)}</p>
                <p>Updated: {convertUnixTimeToDate(this.props.updated)}</p>

                <button type="button" className="btn btn-default" onClick={this.handleEdit}>Edit</button>
                <button type="button" className="btn btn-default ml-2" onClick={this.handleDelete}>Delete</button>
                <hr />
            </div>
        );
    }
}

export default History;