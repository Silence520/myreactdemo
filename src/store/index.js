const configureStore = (state = { num: 1 }, action) => {
 console.log(action);
 switch (action.type) {
  case 'ADD_TODO':
   return {
    num: state.num + parseInt(action.val)
   };
  default:
   return state;
 }
};

import { combineReducers } from 'redux';

export default combineReducers({
 configureStore
});
