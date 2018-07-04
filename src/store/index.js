const configureStore = (state = { num: 1 }, action) => {
 console.log(action);
 switch (action.type) {
  case 'ADD_TODO':
   return {
    num: state.num + action.payload
   };
  default:
   return state;
 }
};

import { combineReducers } from 'redux';

export default combineReducers({
 configureStore
});
