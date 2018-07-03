import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../actions/index';

function headr(WrappedComponent) {
 return class HOC extends React.Component {
  render() {
   const data = 'hello reactt';
   return (
    <div>
     <div className="demo-header">我是标题nojhap</div>
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
  this.props.toggleTodo('1');
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

const mapStateToProps = state => {
 console.log(state);
 return {
  num: state.configureStore.num
 };
};

const mapDispatchToProps = dispatch => ({
 toggleTodo: val => dispatch(addTodo(val))
});

export default connect(
 mapStateToProps,
 mapDispatchToProps
)(Home);
