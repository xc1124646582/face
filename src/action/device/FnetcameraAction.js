import RestFulApi from '../../util/RestFulApi';
import FetchUtils from '../../util/FetchUtils';
import ActionType from '../../util/ActionTypeUtils';


export const initServer =  (page,searchkey) =>  (dispatch =>{
    
    (async ()=>{

    
        //dispatch({type:ActionType.DEVICE_SERVER_INIT,value:result});

        const url = RestFulApi.netcameraApi();
        const res = await FetchUtils.fetchGet(url+'?page='+page+'&pager=10&searchkey='+searchkey);
        const result = await res.json();
        if(result.code == 0){

            console.log(result);
            dispatch({type:ActionType.DEVICE_SERVER_INIT,value:result});
        
        }else{

            const message = {type:'-1',message:'用户加载失败'};
            dispatch({type:ActionType.APP_MESSAGE,message});
        
        }
        

    })();
    

});


//获取所有摄像头

export const initServerall =  () =>  (dispatch =>{
    
    (async ()=>{

    
        //dispatch({type:ActionType.DEVICE_SERVER_INIT,value:result});

        const url = RestFulApi.netcameraApi();
        const res = await FetchUtils.fetchGet(url+'?page=0&pager=9999');
        const result = await res.json();
        if(result.code == 0){

            console.log(result);
            dispatch({type:ActionType.DEVICE_SERVER_INITALL,value:result});
        
        }else{

            const message = {type:'-1',message:'用户加载失败'};
            dispatch({type:ActionType.APP_MESSAGE,message});
        
        }
        

    })();
    

});


/**
*   查询
*/
export const selectServer = (searchkey) =>(dispatch =>{


    (async ()=>{

        const url = RestFulApi.netcameraApi();
        const res = await FetchUtils.fetchGet(url+'?page=0&pager=10&searchkey='+searchkey);
        const result = await res.json();
        if(result.code == 0){

            console.log(result);
            dispatch({type:ActionType.DEVICE_SERVER_INIT,value:result});
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
export const addServer = (server) =>(dispatch =>{

    (async ()=>{

        // dispatch({type:ActionType.DEVICE_SERVER_ADDOR,server:server});
        // const message = {type:'0',message:'添加成功'};
        // dispatch({type:ActionType.APP_MESSAGE,message});


        const url = RestFulApi.addnetcameraApi();
        const res = await FetchUtils.fetchPost(url,server);
        const result = await res.json();
        if(result.code == 0){

            dispatch({type:ActionType.DEVICE_SERVER_ADDOR,server:result.result});
            const message = {type:'0',message:'添加成功'};
            dispatch({type:ActionType.APP_MESSAGE,message});
    
        
        }else{

            console.log(result);
            const message = {type:'-1',message:'新增失败'};
            dispatch({type:ActionType.APP_MESSAGE,message});
        
        }
        

    })();


});
/**
*   编辑单位
*/
export const editServer = (server) =>(dispatch =>{


    (async ()=>{


        // dispatch({type:ActionType.DEVICE_SERVER_EDITOR,server:server});
        // const message = {type:'0',message:'编辑成功'};
        // dispatch({type:ActionType.APP_MESSAGE,message});

        const url = RestFulApi.addnetcameraApi();
        const result = await FetchUtils.fetchPut(url+'/'+server.id,server);
        // const result = await res.json();
        if(result.code == 0){

            dispatch({type:ActionType.DEVICE_SERVER_EDITOR,server:server});
            const message = {type:'0',message:'编辑成功'};
            dispatch({type:ActionType.APP_MESSAGE,message});
            console.log(result);
        
        }else{

            console.log(result);
            const message = {type:'-1',message:'编辑失败'};
            dispatch({type:ActionType.APP_MESSAGE,message});
        
        }
        

    })();


});

/**
*   修改状态
*/
export const ServerStatus = (server) =>(dispatch =>{


    (async ()=>{


        // dispatch({type:ActionType.DEVICE_SERVER_STATUS,server:id});
        // const message = {type:'0',message:'状态修改成功'};
        // dispatch({type:ActionType.APP_MESSAGE,message});

        server.status=server.status=='停用'?'启用':'停用';

        const url = RestFulApi.addnetcameraApi();
        const result = await FetchUtils.fetchPut(url+'/'+server.id,server);
        // const result = await res.json();
        if(result.code == 0){

            dispatch({type:ActionType.DEVICE_SERVER_EDITOR,server:server});
            const message = {type:'0',message:'状态修改成功'};
            dispatch({type:ActionType.APP_MESSAGE,message});
            console.log(result);
        
        }else{

            console.log(result);
            const message = {type:'-1',message:'状态修改失败'};
            dispatch({type:ActionType.APP_MESSAGE,message});
        
        }

    })();


});

/**
*   删除单位
*/
export const removeServer = (id) =>(dispatch =>{


    (async ()=>{
        
        // dispatch({type:ActionType.DEVICE_SERVER_DELOR,id:id});
        // const message = {type:'0',message:'删除成功'};
        // dispatch({type:ActionType.APP_MESSAGE,message});

        const url = RestFulApi.addnetcameraApi();
        const result = await FetchUtils.fetchDelete(url+'/'+id);
        console.log(result);
        // const result = await res.json();
        if(result.code == 0){

            dispatch({type:ActionType.DEVICE_SERVER_DELOR,id:id});
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
export const removeServers = (ids) =>(dispatch =>{


    (async ()=>{

        console.log(ids);
        const url = RestFulApi.serverApi();
        const result = await FetchUtils.fetchDelete(url,ids);
        console.log(JSON.stringify(result));
        // const result = await res.json();
        if(result.code == 0){

            dispatch({type:ActionType.DEVICE_SERVER_DELORS,ids:result.result});
            const message = {type:'0',message:'删除成功'};
            dispatch({type:ActionType.APP_MESSAGE,message});
        
           
        
        }else{

            const message = {type:'-1',message:'删除失败。'};
            dispatch({type:ActionType.APP_MESSAGE,message});
        
        }


    })();


});

export const initAllServer =  (params) =>  (dispatch =>{


    (async ()=>{

        const url = RestFulApi.serverApi();
        const res = await FetchUtils.fetchGet(url,params);
        const result = await res.json();
        if(result.code == 0){

            console.log('result',result);
            dispatch({type:ActionType.DEVICE_SERVER_INITALL,value:result});
        
        }else{

            const message = {type:'-1',message:'用户加载失败'};
            dispatch({type:ActionType.APP_MESSAGE,message});
        
        }
        

    })();
    

});