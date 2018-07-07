import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addTodo } from '@/actions/index';
import  './index.css';

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
    this.state={
      num:3
    }
    this.handleadd = this.handleadd.bind(this);
  }
  componentWillMount(){
 console.log('componentWillMount')
  }
 componentDidMount(){
 console.log('componentDidMount')
 }
 componentWillReceiveProps(){
 console.log('componentWillReceiveProps')
 }
 shouldComponentUpdate(){
 console.log('shouldComponentUpdate')
 return true
 }
 componentWillUpdata(){
 console.log('componentWillUpdata')
 }
 componentDidUpdate(){
 console.log('componentDidUpdate')
 }
 componentWillUnmount(){
   console.log('componentWillUnmount')
 }






  handleadd() {
       this.props.toggleTodo(12);
       let newValue=4
       this.setState((state)=>{
              if(state.num === newValue){
                  return null;
              }
              return {num:newValue}
          })

  }
  render() {
    console.log('render')
    return [
        <button key='1' onClick={this.handleadd}> add</button>,<h1 key='12'>{this.props.name}  {this.state.num} </h1>
    ];
  }
}

 Home.propTypes={
    name: PropTypes.string,
    toggleTodo: PropTypes.func
  };

const mapStateToProps = state => {
  // console.log(state);//获取状态
  return {
    name: state.configureStore.name
  };
};

const mapDispatchToProps = dispatch => ({
  toggleTodo: bindActionCreators(addTodo, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);