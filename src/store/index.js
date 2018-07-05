const configureStore = (state = { name: '请登录' }, action) => {
 console.log(action);
 switch (action.type) {
  case 'ADD_TODO':
   return {
    name:action.payload.data.name
   };
  default:
   return state;
 }
};

import { combineReducers } from 'redux';

export default combineReducers({
 configureStore
});
