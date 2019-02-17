import React from 'react';

class ErrorPage extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <h2>{this.props.message}</h2>
        );
    }
}

export default ErrorPage;