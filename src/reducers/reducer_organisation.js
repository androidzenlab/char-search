import _ from "lodash"
import { FETCH_ORGANISATIONS } from "../actions";

export default function(state = {}, action) {
    switch (action.type) {
      case FETCH_ORGANISATIONS:
      console.log('payload is:', action.payload);
        //    return _.mapKeys(action.payload, "Name");
          return action.payload;
      default:
        return state;
    }
  }