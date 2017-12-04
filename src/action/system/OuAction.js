import RestFulApi from '../../util/RestFulApi';
import FetchUtils from '../../util/FetchUtils';
import ActionType from '../../util/ActionTypeUtils';



export const initOu =  (page,searchkey) =>  (dispatch =>{
    
    (async ()=>{

        const url = RestFulApi.companiesApi();
        const res = await FetchUtils.fetchGet(url+'?page='+page+'&pager=10&searchkey='+searchkey);
        const result = await res.json();
        if(result.code == 0){

            //console.log(result);

            dispatch({type:ActionType.SYSTEM_INIT,value:result});
        
        }else{

            //console.log(result);

            const message = {type:'-1',message:'用户加载失败'};
            dispatch({type:ActionType.APP_MESSAGE,message});
        
        }
        

    })();
    

});


/**
*   查询
*/
export const selectOu = (value) =>(dispatch =>{

    (async ()=>{

        dispatch({type:ActionType.SYSTEM_SELECTOR,value:result,search:value});
        const message = {type:'0',message:'查询成功'};
        dispatch({type:ActionType.APP_MESSAGE,message});

        // const url = RestFulApi.companyApi();
        // const res = await FetchUtils.fetchGet(url,value);
        // // +'?page=1&pager=10&sort=id,userName&userName='
        // const result = await res.json();
        // if(result.code == 0){

        //     dispatch({type:ActionType.SYSTEM_SELECTOR,value:result,search:value});
        //     const message = {type:'0',message:'查询成功'};
        //     dispatch({type:ActionType.APP_MESSAGE,message});
    
        
        // }else{

        //     const message = {type:'-1',message:'查询失败'};
        //     dispatch({type:ActionType.APP_MESSAGE,message});
        
        // }
        

    })();


});
/**
*   新增单位
*/
export const addOu = (ou) =>(dispatch =>{

    (async ()=>{

        const url = RestFulApi.companyApi();
        const res = await FetchUtils.fetchPost(url,ou);
        console.log('resss'+res);
        const result = await res.json();
        if(result.code == 0){

            dispatch({type:ActionType.SYSTEM_ADDOR,ou:result.result});
            const message = {type:'0',message:'添加成功'};
            dispatch({type:ActionType.APP_MESSAGE,message});
    
        
        }else{

            const message = {type:'-1',message:'新增失败'};
            dispatch({type:ActionType.APP_MESSAGE,message});
        
        }
        

    })();


});

/**
*   删除单位
*/
export const removeOu = (id) =>(dispatch =>{


    (async ()=>{

        // dispatch({type:ActionType.SYSTEM_DELOR,id:id});
        // const message = {type:'0',message:'删除成功'};
        // dispatch({type:ActionType.APP_MESSAGE,message});


        
        const url = RestFulApi.companiesApi();
        const result = await FetchUtils.fetchDelete(url+'/'+id);
        console.log(result);
        // const result = await res.json();
        if(result.code == 0){

            dispatch({type:ActionType.SYSTEM_DELOR,id:id});
            const message = {type:'0',message:'删除成功'};
            dispatch({type:ActionType.APP_MESSAGE,message});
        
        }else{

            const message = {type:'-1',message:'删除失败'};
            dispatch({type:ActionType.APP_MESSAGE,message});
        
        }
        

    })();



});

/**
*   删除多个单位
*/
export const removeOus = (ids) =>(dispatch =>{


    (async ()=>{

        console.log(ids);
        const url = RestFulApi.companyApi();
        const result = await FetchUtils.fetchDelete(url,ids);
        console.log(JSON.stringify(result));
        // const result = await res.json();
        if(result.code == 0){

            dispatch({type:ActionType.SYSTEM_DELORS,ids:result.result});
            const message = {type:'0',message:'删除成功'};
            dispatch({type:ActionType.APP_MESSAGE,message});
        
           
        
        }else{

            const message = {type:'-1',message:'删除失败。'};
            dispatch({type:ActionType.APP_MESSAGE,message});
        
        }


    })();



});

/**
*   编辑单位
*/
export const editOu = (ou) =>(dispatch =>{

    (async ()=>{

        // dispatch({type:ActionType.SYSTEM_EDITOR,ou:ou});
            
        // const message = {type:'0',message:'编辑成功'};
        // dispatch({type:ActionType.APP_MESSAGE,message});

        const url = RestFulApi.companiesApi();
        const result = await FetchUtils.fetchPut(url+'/'+ou.id,ou);
        // const result = await res.json();
        if(result.code == 0){

            dispatch({type:ActionType.SYSTEM_EDITOR,ou:ou});
            
            const message = {type:'0',message:'编辑成功'};
            dispatch({type:ActionType.APP_MESSAGE,message});
    
        
        }else{

            const message = {type:'-1',message:'编辑失败'};
            dispatch({type:ActionType.APP_MESSAGE,message});
        
        }

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