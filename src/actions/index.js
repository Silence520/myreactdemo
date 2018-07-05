import {seachApi} from "../api/index"

// export const addTodo = val => {
//  return {
//   type: 'ADD_TODO',
//   payload: val
//  };
// };

//异步
export function addTodo(val) {
 return function(dispatch, getState) {
  // console.log(getState()) 获取初始状态
    return seachApi(function(res){
       return dispatch({
            type: 'ADD_TODO',
            payload: res.data
           })
        
    })
    

 };
}
