import React, { Fragment } from 'react';
import {connect} from 'react-redux';
import DashboardComponent from '../components/Dashboard/Dashboard';
import Header from './common/Header';
import './Dashboard.css';

class Dashboard extends React.Component {
    
    constructor(props, context) {
		super(props, context);
        this.props = props;
    }

    render() {

        return ( 
            <Fragment>
                <Header />
                <DashboardComponent />
            </Fragment>
        );
    }
}

//accessing state from reducer 
function mapStateToProps(state, ownProps) {
	return {

	}
}

//determines what action available in a component
function mapDispatchToProps(dispatch) {
	return {

	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
