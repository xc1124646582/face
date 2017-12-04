import RestFulApi from '../../util/RestFulApi';
import FetchUtils from '../../util/FetchUtils';
import ActionType from '../../util/ActionTypeUtils';

export const initPolice =  () =>  (dispatch =>{
    
    (async ()=>{

        var obj={
            'page':1,
            'total':10,
            'search':'',
            'data':[{
                'id':'1',
                'name':'名称',
                'statetime':'2017-02-23/13',
                'endtime':'2017-10-23/11',
                'peoplese':'处警人',
                'equipment':['摄像头1','摄像头2']

            }]
        };
        dispatch({type:ActionType.DEPLOY_POLICE_INIT,value:obj});
        // const url = RestFulApi.policeApi();
        // const res = await FetchUtils.fetchGet(url);
        // const result = await res.json();
        // if(result.code == 0){

        //     dispatch({type:ActionType.DEPLOY_POLICE_INIT,value:result});
        
        // }else{

        //     const message = {type:'-1',message:'用户加载失败'};
        //     dispatch({type:ActionType.APP_MESSAGE,message});
        
        // }
    
    })();
    

});

/**
*   查询
*/
export const selectPolice = (value) =>(dispatch =>{

    (async ()=>{

        const url = RestFulApi.policeApi();
        const res = await FetchUtils.fetchGet(url,value);
        // +'?page=1&pager=10&sort=id,userName&userName='
        const result = await res.json();
        if(result.code == 0){

 
            dispatch({type:ActionType.DEPLOY_POLICE_SELECTOR,value:result,search:value});
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
export const addPolice = (police) =>(dispatch =>{


    (async ()=>{

        console.log(police);
        dispatch({type:ActionType.DEPLOY_POLICE_ADDOR,police:police});
        const message = {type:'0',message:'添加成功'};
        dispatch({type:ActionType.APP_MESSAGE,message});
        // const url = RestFulApi.policeApi();

        // const res = await FetchUtils.fetchPost(url,police);
        // console.log(res);
        // const result = await res.json();
        // console.log(result);
        // if(result.code == 0){

        //     console.log('result',result);
        //     dispatch({type:ActionType.DEPLOY_POLICE_ADDOR,police:result.result});
        //     const message = {type:'0',message:'添加成功'};
        //     dispatch({type:ActionType.APP_MESSAGE,message});
    
        
        // }else{

        //     const message = {type:'-1',message:'新增失败'};
        //     dispatch({type:ActionType.APP_MESSAGE,message});
        
        // }
    
    })();


});
/**
*   编辑人脸布控
*/
export const editPolice = (police) =>(dispatch =>{

    (async ()=>{

        dispatch({type:ActionType.DEPLOY_POLICE_EDITOR,police:police});
        const message = {type:'0',message:'编辑成功'};
        dispatch({type:ActionType.APP_MESSAGE,message});

        // const url = RestFulApi.policeApi();
        // const result = await FetchUtils.fetchPut(url,police);
        // // const result = await res.json();
        // if(result.code == 0){

        //     console.log(result);
        //     dispatch({type:ActionType.DEPLOY_POLICE_EDITOR,police:police});
        //     const message = {type:'0',message:'编辑成功'};
        //     dispatch({type:ActionType.APP_MESSAGE,message});
        
        // }else{

        //     const message = {type:'-1',message:'编辑失败'};
        //     dispatch({type:ActionType.APP_MESSAGE,message});
        
        // }
    
    })();

});

/**
*   删除人脸布控
*/
export const removePolice = (id) =>(dispatch =>{

    (async ()=>{

        dispatch({type:ActionType.DEPLOY_POLICE_DELOR,id:id});
        const message = {type:'0',message:'删除成功'};
        dispatch({type:ActionType.APP_MESSAGE,message});
    
    })();


});

/**
*   删除多个单位
*/
export const removePolices = (ids) =>(dispatch =>{

    (async ()=>{

        console.log(ids);
        const url = RestFulApi.policeApi();
        const result = await FetchUtils.fetchDelete(url,ids);
        console.log(JSON.stringify(result));
        // const result = await res.json();
        if(result.code == 0){

            dispatch({type:ActionType.DEPLOY_POLICE_DELORS,ids:result.result});
            const message = {type:'0',message:'删除成功'};
            dispatch({type:ActionType.APP_MESSAGE,message});
        
           
        
        }else{

            const message = {type:'-1',message:'删除失败。'};
            dispatch({type:ActionType.APP_MESSAGE,message});
        
        }


    })();


});
export const initAllPolice =  () =>  (dispatch =>{
    
    (async ()=>{

        const url = RestFulApi.policeApi();
        const res = await FetchUtils.fetchGet(url);
        const result = await res.json();
        if(result.code == 0){

            dispatch({type:ActionType.DEPLOY_POLICE_INITALL,value:result});
        
        }else{

            const message = {type:'-1',message:'用户加载失败'};
            dispatch({type:ActionType.APP_MESSAGE,message});
        
        }
        

    })();
    

});

