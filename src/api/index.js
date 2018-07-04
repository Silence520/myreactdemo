import axios from 'axios';
axios.defaults.baseURL = 'http://cs_v2.pc.test.shbaoyuantech.com';


// http://cs_v2.pc.test.shbaoyuantech.com/login?mobile=13764248186&password=e10adc3949ba59abbe56e057f20f883e
// const apiconfig={
//     url:'http://www.www.com'
// }

export const seachApi = (text) =>{
    return axios.get('/lgin?mobile=13764248186&password=e10adc3949ba59abbe56e057f20f3e')
    .then(function(res){
       if(res.code ==0){
         return  res.data;
       }else{
        console.log(res)
         alert(res.data.message)
       }
  },function(res){
    console.log(res)
  })
}

