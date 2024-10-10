import * as types from '../config/actionTypes';
import axios from 'axios';
import {API_URL} from '../config';


//load league data list actions
export function LoadLeagueDataRequest(league_id) {
    // console.log("called api ", league_id)

	return (dispatch) => {
		
		return axios.get(API_URL + '/get-standing?league_id=' + league_id, {
				headers: {
					'Content-Type': 'application/json',
                    "Access-Control-Allow-Origin": "*"
				}
			})
			.then((leagueDataList) => {
				dispatch(LoadLeagueDataSuccess(leagueDataList.data))
			
			})
			.catch((error) => {
				dispatch(LoadLeagueDataFailure(error));
			})
	}
}	

export function LoadLeagueDataFailure(error) {
	return {
		type: types.LOAD_LEAGUE_DATA_FAILURE,
		payload: error
	};
}

export function LoadLeagueDataSuccess(value) {
	return {
		type:  types.LOAD_LEAGUE_DATA_SUCCESS,
		payload: value
	};
}