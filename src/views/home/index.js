import React from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTodo } from '@/actions/index';

function headr(WrappedComponent) {
  return class HOC extends React.Component {
    render() {
      const data = 'hello reactt';
      return (
        <div>
          <div className="demo-header">我是标题哈哈</div>
          <WrappedComponent {...this.props} data={data} />
        </div>
      );
    }
  };
}

@headr
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.handleadd = this.handleadd.bind(this);
  }
  handleadd() {
    this.props.toggleTodo(12);
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <button onClick={this.handleadd}> add</button>
        <h1>{this.props.num}</h1>
      </div>
    );
  }
}

Home.propTypes = {
  num: PropTypes.number,
  toggleTodo: PropTypes.func
};

const mapStateToProps = state => {
  console.log(state);
  return {
    num: state.configureStore.num
  };
};

const mapDispatchToProps = dispatch => ({
  toggleTodo: bindActionCreators(addTodo, dispatch)
});

// const mapDispatchToProps = dispatch => ({
//  toggleTodo: val => dispatch(addTodo(val))
// });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

// import React from 'react';
// import ReactDom from 'react-dom';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';
// import configureStore from './store/index.js';

// const store = createStore(configureStore);

// import Home from './views/home/index';

// ReactDom.render(
//  <Provider store={store}>
//   <Home />
//  </Provider>,
//  document.getElementById('app')
// );
