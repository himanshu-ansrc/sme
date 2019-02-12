import {CANDIDATE_ID} from '../actions/types';
export default function(state=0, action) {
       switch (action.type) {
         case CANDIDATE_ID:
           return action.payload
           break;
         default:
           return state;
       }
}
