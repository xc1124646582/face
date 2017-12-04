import RestFulApi from '../../util/RestFulApi';
import FetchUtils from '../../util/FetchUtils';
import ActionType from '../../util/ActionTypeUtils';



export const initAreaCamera =  (page,searchkey,delet) =>  (dispatch =>{

    (async ()=>{

        const url = RestFulApi.IdentificationApi();
        const res = await FetchUtils.fetchGet(url+'?page='+page+'&pager=10&searchkey='+searchkey);
        const result = await res.json();
        if(result.code == 0){

            console.log(result);
            dispatch({type:ActionType.DEVICE_AREACAMERA_INITALL,value:result,delet:delet});
        
        }else{

            console.log(result);
            const message = {type:'-1',message:'用户加载失败'};
            dispatch({type:ActionType.APP_MESSAGE,message});
        
        }
        

    })();
    

});


/**
*   查询
*/
export const selectAreaCamera = (page,searchkey) =>(dispatch =>{ 

    (async ()=>{

        const url = RestFulApi.IdentificationApi();
        const res = await FetchUtils.fetchGet(url+'?page='+page+'&pager=10&searchkey='+searchkey);
        // +'?page=1&pager=10&sort=id,userName&userName='
        const result = await res.json();
        if(result.code == 0){

            console.log(result);
            dispatch({type:ActionType.DEVICE_AREACAMERA_INITALL,value:result});
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
export const addAreaCamera = (areacamera) =>(dispatch =>{

    (async ()=>{

        //dispatch({type:ActionType.DEVICE_AREACAMERA_ADDOR,areacamera:id});
        //const message = {type:'0',message:'添加成功'};

        const url = RestFulApi.addIdentificationApi();
        const res = await FetchUtils.fetchPost(url,areacamera);
        console.log(res);
        const result = await res.json();
        console.log(result);
        if(result.code == 0){

            //console.log(result.result);
            dispatch({type:ActionType.DEVICE_AREACAMERA_ADDOR,areacamera:result.result});
            const message = {type:'0',message:'添加成功'};
            dispatch({type:ActionType.APP_MESSAGE,message});
    
        
        }else{

            const message = {type:'-1',message:'新增失败'};
            dispatch({type:ActionType.APP_MESSAGE,message});
        
        }
        

    })();


});



/**
*   编辑
*/
export const editAreaCamera = (areacamera) =>(dispatch =>{

    (async ()=>{
  
        //dispatch({type:ActionType.DEVICE_AREACAMERA_EDITOR,areacamera:areacamera});
        //const message = {type:'0',message:'编辑成功'};



        const url = RestFulApi.addIdentificationApi();
        const result = await FetchUtils.fetchPut(url+'/'+areacamera.id,areacamera);
        // const result = await res.json();
        if(result.code == 0){

            dispatch({type:ActionType.DEVICE_AREACAMERA_EDITOR,areacamera:result.result});
            const message = {type:'0',message:'编辑成功'};
            dispatch({type:ActionType.APP_MESSAGE,message});
    
        
        }else{

            const message = {type:'-1',message:'编辑失败'};
            dispatch({type:ActionType.APP_MESSAGE,message});
        
        }
        

    })();

});

/**
*   改变状态
*/
export const AreaCameraStatus = (areacamera) =>(dispatch =>{

    (async ()=>{

        // dispatch({type:ActionType.DEVICE_AREACAMERA_STATUS,areacamera:areacamera});
        // const message = {type:'0',message:'状态修改成功'};
        // dispatch({type:ActionType.APP_MESSAGE,message});
        areacamera.status=areacamera.status=='停用'?'启用':'停用';

        const url = RestFulApi.addIdentificationApi();
        const result = await FetchUtils.fetchPut(url+'/'+areacamera.id,areacamera);
        // const result = await res.json();
        if(result.code == 0){

            dispatch({type:ActionType.DEVICE_AREACAMERA_EDITOR,areacamera:areacamera});
            const message = {type:'0',message:'状态修改成功'};
            dispatch({type:ActionType.APP_MESSAGE,message});
    
        
        }else{

            const message = {type:'-1',message:'状态修改失败'};
            dispatch({type:ActionType.APP_MESSAGE,message});
        
        }

    })();

});



/**
*   删除单位
*/
export const removeAreaCamera = (id) =>(dispatch =>{

  
    (async ()=>{

        // dispatch({type:ActionType.DEVICE_AREACAMERA_DELOR,id:id});
        // const message = {type:'0',message:'删除成功'};
        // dispatch({type:ActionType.APP_MESSAGE,message});

        var value={'id':id};
        const url = RestFulApi.addIdentificationApi();
        const result = await FetchUtils.fetchDelete(url+'/'+id,value);
        console.log(result);
        // const result = await res.json();
        if(result.code == 0){

            dispatch({type:ActionType.DEVICE_AREACAMERA_DELOR,id:id});
            const message = {type:'0',message:'删除成功'};
            dispatch({type:ActionType.APP_MESSAGE,message});
        
        }else{

            console.log(result);

            const message = {type:'-1',message:'删除失败'};
            dispatch({type:ActionType.APP_MESSAGE,message});
        
        }
        

    })();



});

export const initAllAreaCamera =  (params) =>  (dispatch =>{

    (async ()=>{

        var  result={
            'page':1,
            'total':10,
            'search':'',
            'obj':[{'name':'name',
                'IP':'ip',
                'port':'port',
                'status':'运行',
                'username':'user',
                'password':'password'},
            {'name':'name2',
                'IP':'ip',
                'port':'port',
                'status':'运行',
                'username':'user',
                'password':'password'},
            {'name':'name3',
                'IP':'ip',
                'port':'port',
                'status':'运行',
                'username':'user',
                'password':'password'}]
        };
        dispatch({type:ActionType.DEVICE_AREACAMERA_INITALL,value:result});
        // const url = RestFulApi.areaCameraApi();
        // const res = await FetchUtils.fetchGet(url,params);
        // const result = await res.json();
        // if(result.code == 0){

        //     console.log('result',result);
        //     dispatch({type:ActionType.DEVICE_AREACAMERA_INITALL,value:result});
        
        // }else{

        //     const message = {type:'-1',message:'用户加载失败'};
        //     dispatch({type:ActionType.APP_MESSAGE,message});
        
        // }
        

    })();
    

});

