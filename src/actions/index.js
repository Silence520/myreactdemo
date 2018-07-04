// export const addTodo = val => {
//  return {
//   type: 'ADD_TODO',
//   payload: val
//  };
// };

//异步
export function addTodo(val) {
 return function(dispatch, getState) {
  setTimeout(
   () =>
    dispatch({
     type: 'ADD_TODO',
     payload: val
    }),
   3000
  );
 };
}
