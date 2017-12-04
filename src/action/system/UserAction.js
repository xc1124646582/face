import RestFulApi from '../../util/RestFulApi';
import FetchUtils from '../../util/FetchUtils';
import ActionType from '../../util/ActionTypeUtils';


export const initUser =  () =>  (dispatch =>{
    
    (async ()=>{

        var obj={
            'page':1,
            'total':10,
            'search':'',
            'data':[{
                'id':'1',
                'jobNumber':'001',
                'companyId':'1',
                'departmentId':'销售部',
                'position':'销售员',
                'userName':'admin1',
                'password':'0000',
                'nickName':'张某1',
                'userPhoneNo':'1399999999',
                'emailAddress':'1399999999@163.com',
                'nologin':'true'


            },
            {
                'id':'2',
                'jobNumber':'002',
                'companyId':'1',
                'departmentId':'销售部',
                'position':'销售员',
                'userName':'admin1',
                'password':'0000',
                'nickName':'张某1',
                'userPhoneNo':'1399999999',
                'emailAddress':'1399999999@163.com',
                'nologin':'false'


            }]


        };

        dispatch({type:ActionType.SYSTEM_USER_INIT,value:obj});

        // const url = RestFulApi.getInitUserApi();
        // const res = await FetchUtils.fetchGet(url);
        // const result = await res.json();
        // if(result.code == 0){

        //     dispatch({type:ActionType.SYSTEM_USER_INIT,value:result});
        
        // }else{

        //     const message = {type:'-1',message:'用户加载失败'};
        //     dispatch({type:ActionType.APP_MESSAGE,message});
        
        // }
        

    })();
    

});



/**
*   查询
*/
export const selectUser = (value) =>(dispatch =>{


    (async ()=>{

        const url = RestFulApi.selectUserApi();
        const res = await FetchUtils.fetchGet(url,value);
        // +'?page=1&pager=10&sort=id,userName&userName='
        const result = await res.json();
        if(result.code == 0){

 
            dispatch({type:ActionType.SYSTEM_USER_SELECTOR,value:result,search:value});
            const message = {type:'0',message:'查询成功'};
            dispatch({type:ActionType.APP_MESSAGE,message});
    
        
        }else{

            const message = {type:'-1',message:'查询失败'};
            dispatch({type:ActionType.APP_MESSAGE,message});
        
        }
        

    })();


});
/**
*   新增单位
*/
export const addUser = (user) =>(dispatch =>{

    (async ()=>{


        dispatch({type:ActionType.SYSTEM_USER_ADDOR,user:user});
        const message = {type:'0',message:'用户添加成功'};
        dispatch({type:ActionType.APP_MESSAGE,message});

        // const url = RestFulApi.addUserApi();
        // const res = await FetchUtils.fetchPost(url,user);
        // const result = await res.json();
        // if(result.code == 0){

        //     dispatch({type:ActionType.SYSTEM_USER_ADDOR,user:result.result});
        //     const message = {type:'0',message:'用户添加成功'};
        //     dispatch({type:ActionType.APP_MESSAGE,message});
    
        
        // }else{

        //     const message = {type:'-1',message:'用户新增失败'};
        //     dispatch({type:ActionType.APP_MESSAGE,message});
        
        // }
        

    })();


});
/**
*   编辑单位
*/
export const editUser = (user) =>(dispatch =>{


    (async ()=>{

        dispatch({type:ActionType.SYSTEM_USER_EDITOR,user:user});
        const message = {type:'0',message:'编辑成功'};
        dispatch({type:ActionType.APP_MESSAGE,message});

        // const url = RestFulApi.editUserApi();
        // const res = await FetchUtils.fetchPut(url,user);
        // // const result = await res.json();
        // if(res.code == 0){

        //     dispatch({type:ActionType.SYSTEM_USER_EDITOR,user:res.result});
        //     const message = {type:'0',message:'编辑成功'};
        //     dispatch({type:ActionType.APP_MESSAGE,message});
    
        
        // }else{

        //     const message = {type:'-1',message:'编辑失败'};
        //     dispatch({type:ActionType.APP_MESSAGE,message});
        
        // }
        

    })();


});

/**
*   删除单位
*/
export const removeUser = (id) =>(dispatch =>{



    (async ()=>{


        dispatch({type:ActionType.SYSTEM_USER_DELOR,id:id});
        const message = {type:'0',message:'删除成功'};
        dispatch({type:ActionType.APP_MESSAGE,message});
      
        // const url = RestFulApi.removeUserApi();
        // const result = await FetchUtils.fetchDelete(url+'/'+id);
        
        // if(result.code == 0){

        //     dispatch({type:ActionType.SYSTEM_USER_DELOR,id:id});
        //     const message = {type:'0',message:'删除成功'};
        //     dispatch({type:ActionType.APP_MESSAGE,message});
        
        // }else{

        //     const message = {type:'-1',message:'用户加载失败'};
        //     dispatch({type:ActionType.APP_MESSAGE,message});
        
        // }
        

    })();


});

/**
*   删除多个单位
*/
export const removeUsers = (ids) =>(dispatch =>{

    (async ()=>{

        console.log(ids);
        const url = RestFulApi.removeUsersApi();
        const result = await FetchUtils.fetchDelete(url,ids);
        console.log(JSON.stringify(result));
        // const result = await res.json();
        if(result.code == 0){

            dispatch({type:ActionType.SYSTEM_USER_DELORS,ids:result.result});
            const message = {type:'0',message:'删除成功'};
            dispatch({type:ActionType.APP_MESSAGE,message});
        
           
        
        }else{

            const message = {type:'-1',message:'删除失败。'};
            dispatch({type:ActionType.APP_MESSAGE,message});
        
        }


    })();


});
