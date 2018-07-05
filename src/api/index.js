import axios from 'axios';
axios.defaults.baseURL = 'http://cs_v2.pc.test.shbaoyuantech.com';

export const seachApi = (fun) =>{
    return axios.get('/login?mobile=13764248186&password=e10adc3949ba59abbe56e057f20f883e')
    .then(function(res){
       if(res.data.code==0){
          fun(res) ;
       }else{
        console.log(res)
         alert(res.data.message)
       }
  },function(res){
    console.log(res)
  })
}

