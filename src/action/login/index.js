import RestFulApi from '../../util/RestFulApi';
import FetchUtils from '../../util/FetchUtils';
import ActionType from '../../util/ActionTypeUtils';
import { browserHistory } from 'react-router';


// export const  login =  async (username,password) => {
   

//     // const apiUrl = RestFulApi.login();
//     // const res = await FetchUtils.fetchPost(apiUrl,{'userName':username,password});
//     // const result = await res.json();
//     // return result;

//     const apiUrl = RestFulApi.login();
//     const res = await FetchUtils.fetchPost(apiUrl,{'userName':username,password});

//     const result = {
//         code:0,
//         message:'',
//         result:{
//             username:username
//         }
//     };
//     return {
//         type:'DEPLOY_SETUP_ADDOR',
//         value:result
//     };
    

// };

export const login =  (username,password) =>  (dispatch =>{
    
    (async ()=>{

        console.log(username,password);

        const apiUrl = RestFulApi.login();
        const res = await FetchUtils.fetchPosts(apiUrl,{'userName':username,password});
        const json = await res.json();
        console.log('login',json);
        if(json.code == 0){

            dispatch({type:ActionType.LOGIN_IN,user:json.result});
            var strs=JSON.stringify(json.result);
            console.log(strs);
            window.sessionStorage.setItem('username',strs);
            window.sessionStorage.setItem('token',strs.token);
            
            //跳转到主页
            browserHistory.push('/face');
        
        }else{

            console.log(json);
            
            dispatch({type:ActionType.APP_MESSAGE,message:json});
        
        }
    
    })();

});



// export const  logout =  () => ( dispatch => {


//     dispatch({type:ActionType.LOGIN_OUT});
//     browserHistory.push('/login');
//     // return {
//     //     type:'LOGIN_OUT',
//     //     value:{}
//     // };
    

// });


export const logout =  () =>  (dispatch =>{

    //console.log('llll');
    dispatch({type:ActionType.LOGIN_OUT});
    browserHistory.push('/login');
    

});
