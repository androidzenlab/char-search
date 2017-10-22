import { combineReducers } from 'redux';
import OrganisationReducer from "./reducer_organisation";

const rootReducer = combineReducers({
    organisations: OrganisationReducer,
});

export default rootReducer;