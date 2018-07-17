## react-redux 简单适用

#### 下载react-redux
```javascript
npm install --save-dev redux
npm install --save-dev react-redux
//下载中间件
npm install --save-dev redux-thunk
```
#### 创建store
```javascript

const configureStore = (state = { name: '请登录' }, action) => {
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

```
#### 创建action
```javascript

import {seachApi} from "../api/index"
//异步请求
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

// export const addTodo = val => {
//  return {
//   type: 'ADD_TODO',
//   payload: val
//  };
// };

```


#### APP 根节点绑定
```javascript
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import configureStore from './store/index.js';
import Rootrouter from './router/index';
const middleware = [thunk];
const store = createStore(configureStore, applyMiddleware(...middleware));

ReactDOM.render(
 <Provider store={store}>
  <Rootrouter />
 </Provider>,
 document.getElementById('app')
);

```

#### view 视图引用
```javascript
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addTodo } from '@/actions/index';
import  './index.css';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      num:3
    }
    this.handleadd = this.handleadd.bind(this);
  }
  
  handleadd() {
       this.props.toggleTodo(12);
  }
  render() {
    console.log('render')
    return [
        <button key='1' onClick={this.handleadd}> add</button>,<h1 key='12'>{this.props.name}  {this.state.num} </h1>
    ];
  }
}

 Home.propTypes={ //类型检测
    name: PropTypes.string,
    toggleTodo: PropTypes.func
  };

// 状态转换成 props
const mapStateToProps = state => {
  // console.log(state);//获取状态
  return {
    name: state.configureStore.name
  };
};

// action转换成 props
const mapDispatchToProps = dispatch => ({
  toggleTodo: bindActionCreators(addTodo, dispatch)
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

```
#### 运行该项目
```javascript

//下载项目
git clone  

//下载依赖
npm install

//启动环境
npm start
