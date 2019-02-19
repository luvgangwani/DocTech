import React from 'react';
import History from './History';

class HistoryList extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){

        const patientHistoryArr = this.props.patientHistoryArr;

        return(
            patientHistoryArr.map((eachHistoryObj, index) => (
                <History 
                key={index}
                {...eachHistoryObj}
                />
            ))
        );
    }
}

export default HistoryList;