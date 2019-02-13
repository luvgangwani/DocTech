import React from 'react';

class Header extends React.Component{

    constructor(props){
        super(props);
        this.handleHomeNavigation = this.handleHomeNavigation.bind(this);
        this.handleViewPatientList = this.handleViewPatientList.bind(this);
    }
    
    handleHomeNavigation(){
        this.props.onHomeClick();
    }

    handleViewPatientList() {
        this.props.onViewPatientClick();
    }

    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                        <a className="nav-link" href="#" onClick={this.handleHomeNavigation}>Home</a>
                            <a className="nav-link" href="#">Add New Patient</a>
                            <a className="nav-link" href="#" onClick={this.handleViewPatientList}>View Patient List</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Header;