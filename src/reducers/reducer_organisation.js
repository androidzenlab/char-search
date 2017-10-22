import { FETCH_ORGANISATIONS, FETCH_ALL_COMPANY } from "../actions/types";

export default function(state = {}, action) {
    switch (action.type) {
      case FETCH_ORGANISATIONS:
      console.log('payload is:', action.payload);
        if (action.payload.data) {
            return action.payload.data.d;
        } else {
            return [];
        }
      case FETCH_ALL_COMPANY:
          // console.log('company payload is:', action.payload);
          return action.payload;    
      default:
        return state;
    }
  }