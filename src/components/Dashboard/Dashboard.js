import React, { Fragment } from 'react';
import {connect} from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { InputField } from '../../basic/InputField';
import { Validate } from  '../../config';
import { bindActionCreators } from 'redux';
import { LoadLeagueDataRequest, LoadLeagueDataSuccess, LoadLeagueDataFailure } from '../../actions/LoadLeagueAction';

class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
        this.state = {};

        this.handleInitialize = this.handleInitialize.bind(this);
        this.loadLeagueDataList = this.loadLeagueDataList.bind(this);
        this.onChange = this.onChange.bind(this);

    }
    componentWillMount() {
        const { dispatch } = this.props;
        if (this.state.leagueId) {
            dispatch(LoadLeagueDataRequest(this.state.leagueId));
        } else {
            dispatch(LoadLeagueDataRequest(152));
        }
        
    }
    handleInitialize() {
        
    }
    loadLeagueDataList (leagues) {
        let leagueRows = []
        if ( leagues.length > 0) {
            leagues.map((league, index) => { 
                leagueRows.push(
                    <tr key={index}>
                        <th scope="row">{index+1}</th>
                        <th>{league.leagueId}</th>
                        <td>{league.leagueName}</td>
                        <td>{league.countryName}</td>
                        <td>{league.teamId}</td>
                        <td>{league.teamName}</td>
                        <td>{league.leaguePosition}</td>
                        <td>{league.leaguePayed}</td>
                    </tr>
                )
            })
        } else {
            leagueRows.push(
                <Fragment key="0">
                    <tr className="leagueNotFound"><td>No leagues found</td></tr>
                </Fragment>
            )
        }

        return leagueRows
    }

    onChange(event) {
        let leagueId = this.state.leagueId;
        leagueId = event.target.value;

        this.setState({
            leagueId
        })
    }

    submitForm() {
        this.props.LoadLeagueDataRequest(this.state.leagueId);
    }

    render() {
        const { handleSubmit, error } = this.props;
        return (
            <div className="container backgroundCls">
                <div className="row option-section">
                    <div className="col-md-12" id="league-label" data-testid="league-label" >League Id</div>
                </div>
                <form onSubmit={handleSubmit(this.submitForm.bind(this))} className="leagueForm">
                    <div className="row option-section-2">
                        <div className="col-md-2">
                            <Field 
                                type="text"
                                className = "form-control formTxt" 
                                component = { InputField }
                                name = "leagueId"
                                id = "leagueId"
                                label = "Enter League Id" 
                                onChange = { this.onChange }
                            />
                        </div>
                        <div className="col-md-2">
                            <button type="submit" className="btn btn-primary">Search</button>
                        </div>
                    </div>
                </form>
                <div className="row table-section">
                    <div className="col-md-1">

                    </div>
                    <div className="col-md-10">
                        <div className="row">
                            <table className="table">
                                <thead className="thead-light">
                                    <tr>
                                        <th scope="col">Serial</th>
                                        <th scope="col">League Id</th>
                                        <th scope="col">League Name</th>
                                        <th scope="col">Country Name</th>
                                        <th scope="col">Team Id</th>
                                        <th scope="col">Team Name</th>
                                        <th scope="col">League Postition</th>
                                        <th scope="col">League payed</th>
                                    </tr>
                                </thead>
                                <tbody>
                                { this.props.leagueDataList && 
                                    <Fragment>
                                        {this.loadLeagueDataList(this.props.leagueDataList)}
                                    </Fragment>
                                    
                                }
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-md-1">

                    </div>
                </div>
            </div>
        );
    }
}

const validate = (values) => {
    const errors = {};

	if (!Validate.text(values.leagueId)) {
	  errors.leagueId = 'League Id is required'
    }
	return errors;
};

let LeagueForm =  reduxForm({
    form: 'leagueForm', 
    validate
})(Dashboard);


//accessing state from reducer 
function mapStateToProps(state, ownProps) { 
    if (state.leagueReducer) {
        
        let listArr = state.leagueReducer.leagueDataList
        if(listArr.length > 0) {
            return {
                leagueDataList: state.leagueReducer.leagueDataList,
                leagueId: listArr[0]["leagueId"]
            }
        } else {
            return {
                leagueDataList: state.leagueReducer.leagueDataList,
                leagueId: state.leagueReducer.leagueId
            }
        }
        
        
    }
    
    return {}
}

//determines what action available in a component
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        LoadLeagueDataRequest, LoadLeagueDataSuccess, LoadLeagueDataFailure
    }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(LeagueForm);