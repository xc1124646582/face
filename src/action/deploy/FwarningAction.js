import RestFulApi from '../../util/RestFulApi';
import FetchUtils from '../../util/FetchUtils';
import ActionType from '../../util/ActionTypeUtils';



export const initWarning =  () =>  (dispatch =>{
    
    (async ()=>{

        var obj={
            'page':1,
            'total':10,
            'search':'',
            'data':[{
                'id':1,
                'name':'名称',
                'setup':['底库','ssss'],
                'statetime':'2017-09-23/14',
                'endtime':'2017-11-12/12',
                'peoplese':'处警人',
                'equipment':['name','xx']

            }]
        };
        //const url = RestFulApi.companyApi();
        //const res = await FetchUtils.fetchGet(url);
        //const result = await res.json();
        //if(result.code == 0){
        dispatch({type:ActionType.DEPLOY_WARNING_INIT,value:obj});
        
        //}else{

        //    const message = {type:'-1',message:'用户加载失败'};
        //    dispatch({type:ActionType.APP_MESSAGE,message});
        
        //}
        

    })();
    

});


/**
*   新增单位
*/
export const addWarning = (warning) =>(dispatch =>{

    (async ()=>{

        dispatch({type:ActionType.DEPLOY_WARNING_ADDOR,warning:warning});
        //const url = RestFulApi.companyApi();
        //const res = await FetchUtils.fetchPost(url,ou);
        //console.log('resss'+res);
        //const result = await res.json();
        // console.log(result);
        // if(result.code == 0){

        //     dispatch({type:ActionType.SYSTEM_ADDOR,ou:result.result});
        //     const message = {type:'0',message:'添加成功'};
        //     dispatch({type:ActionType.APP_MESSAGE,message});
    
        
        // }else{

        //     const message = {type:'-1',message:'新增失败'};
        //     dispatch({type:ActionType.APP_MESSAGE,message});
        
        // }
        

    })();


});

/**
*   删除单位
*/
export const removeWarning = (id) =>(dispatch =>{


    (async ()=>{

        dispatch({type:ActionType.DEPLOY_WARNING_DELETE,id:id});
        const message = {type:'0',message:'删除成功'};
        dispatch({type:ActionType.APP_MESSAGE,message});
        
        

    })();



});



/**
*   编辑单位
*/
export const editWarning = (warning) =>(dispatch =>{

    (async ()=>{

        dispatch({type:ActionType.DEPLOY_WARNING_EDITOR,warning:warning});
        const message = {type:'0',message:'编辑成功'};
        dispatch({type:ActionType.APP_MESSAGE,message});


        // const url = RestFulApi.companyApi();
        // const result = await FetchUtils.fetchPut(url,ou);
        // // const result = await res.json();
        // if(result.code == 0){

        //     dispatch({type:ActionType.SYSTEM_EDITOR,ou:ou});
        //     const message = {type:'0',message:'编辑成功'};
        //     dispatch({type:ActionType.APP_MESSAGE,message});
    
        
        // }else{

        //     const message = {type:'-1',message:'编辑失败'};
        //     dispatch({type:ActionType.APP_MESSAGE,message});
        
        // }
        

    })();

});



export const initAllOu =  (params) =>  (dispatch =>{
    
    (async ()=>{

        const url = RestFulApi.companyApi();
        const res = await FetchUtils.fetchGet(url,params);
        const result = await res.json();
        if(result.code == 0){

            dispatch({type:ActionType.SYSTEM_INITALL,value:result});
        
        }else{

            const message = {type:'-1',message:'用户加载失败'};
            dispatch({type:ActionType.APP_MESSAGE,message});
        
        }
        

    })();
    

});