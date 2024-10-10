import {combineReducers} from 'redux';
//import profile from './profileReducer';
import { reducer as form  } from 'redux-form';
import leagueReducer from './leagueReducer';


const rootReducer = combineReducers({
    leagueReducer,
    form
});

export default rootReducer;