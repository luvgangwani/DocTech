import React from 'react';

class History extends React.Component {
    
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <p>{this.props.patientHistory}</p>
                <p>Created: {convertUnixTimeToDate(this.props.created)}</p>
                <p>Updated: {convertUnixTimeToDate(this.props.updated)}</p>
                <hr />
            </div>
        );
    }
}

export default History;