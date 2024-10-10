import * as types from '../config/actionTypes';
import initialState from './initialState';

export default function leagueReducer(state = initialState, action) {

    switch(action.type) {

        case types.LOAD_LEAGUE_DATA_SUCCESS:
            // console.log("reducer details ", action.payload)
                return Object.assign({}, state, {
                    leagueDataList: action.payload,
                    loaded: true,
                    error: false
                });

        default:   
            return state;
    }
}