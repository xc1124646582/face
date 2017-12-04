import RestFulApi from '../../util/RestFulApi';
import FetchUtils from '../../util/FetchUtils';
import ActionType from '../../util/ActionTypeUtils';



//获取所有分析服务器
export const initDeviceCameraAll =  () =>  (dispatch =>{
    
    (async ()=>{

        const url = RestFulApi.analysisApi();
        const res = await FetchUtils.fetchGet(url+'?page=0&pager=9999');
        const result = await res.json();
        if(result.code == 0){

            dispatch({type:ActionType.DEVICE_DEVICECAMERA_INITALL,value:result});
        
        }else{

            const message = {type:'-1',message:'用户加载失败'};
            dispatch({type:ActionType.APP_MESSAGE,message});
        
        }
        

    })();
    

});


export const initDeviceCamera =  (page,searchkey) =>  (dispatch =>{
    
    (async ()=>{

        const url = RestFulApi.analysisApi();
        const res = await FetchUtils.fetchGet(url+'?page='+page+'&pager=10&searchkey='+searchkey);
        const result = await res.json();
        if(result.code == 0){

            dispatch({type:ActionType.DEVICE_DEVICECAMERA_INIT,value:result});
        
        }else{

            const message = {type:'-1',message:'用户加载失败'};
            dispatch({type:ActionType.APP_MESSAGE,message});
        
        }
        

    })();
    

});

/**
*   查询
*/
export const selectDeviceCamera = (searchkey) =>(dispatch =>{

    (async ()=>{

        var str='';
        if(searchkey==''){

            str='?page=0&pager=10';
        
        }else{

            str='?page=0&pager=10&searchkey='+searchkey;
        
        }

        const url = RestFulApi.analysisApi();
        const res = await FetchUtils.fetchGet(url+str);
        const result = await res.json();
        if(result.code == 0){

            dispatch({type:ActionType.DEVICE_DEVICECAMERA_INIT,value:result});
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
export const addDeviceCamera = (deviceCamera) =>(dispatch =>{

    (async ()=>{

        // dispatch({type:ActionType.DEVICE_DEVICECAMERA_ADDOR,deviceCamera:deviceCamera});
        // const message = {type:'0',message:'添加成功'};
        // dispatch({type:ActionType.APP_MESSAGE,message});


        console.log(deviceCamera);
        const url = RestFulApi.analysisApi();
        const res = await FetchUtils.fetchPost(url,deviceCamera);
        const result = await res.json();
        if(result.code == 0){

            console.log('result',result);
            dispatch({type:ActionType.DEVICE_DEVICECAMERA_ADDOR,deviceCamera:result.result});
            const message = {type:'0',message:'添加成功'};
            dispatch({type:ActionType.APP_MESSAGE,message});
    
        
        }else{

            const message = {type:'-1',message:'新增失败'};
            dispatch({type:ActionType.APP_MESSAGE,message});
        
        }
        

    })();


});
/**
*   编辑单位
*/
export const editDeviceCamera = (deviceCamera) =>(dispatch =>{

    (async ()=>{

        // dispatch({type:ActionType.DEVICE_DEVICECAMERA_EDITOR,deviceCamera:deviceCamera});
        // const message = {type:'0',message:'编辑成功'};
        // dispatch({type:ActionType.APP_MESSAGE,message});

        const url = RestFulApi.analysisApi();
        console.log(url);
        const res = await FetchUtils.fetchPut(url+'/'+deviceCamera.id,deviceCamera);
        console.log(res);
        if(res.code == 0){

            console.log(res);
            dispatch({type:ActionType.DEVICE_DEVICECAMERA_EDITOR,deviceCamera:res.result});
            const message = {type:'0',message:'编辑成功'};
            dispatch({type:ActionType.APP_MESSAGE,message});
    
        
        }else{

            const message = {type:'-1',message:'编辑失败'};
            dispatch({type:ActionType.APP_MESSAGE,message});
        
        }
        

    })();


});


/**
*   通道设置
*/
export const DeviceCameraSet = (channel) =>(dispatch =>{

    (async ()=>{


        // dispatch({type:ActionType.DEVICE_DEVICECAMERA_SET,channel:channel});
        // const message = {type:'0',message:'通道设置成功'};
        // dispatch({type:ActionType.APP_MESSAGE,message});

        const url = RestFulApi.analysisApi();
        console.log(url);
        const res = await FetchUtils.fetchPut(url+'/'+channel.id+'/channels',channel.arr);
        console.log(res);
        if(res.code == 0){

            console.log(res);
            dispatch({type:ActionType.DEVICE_DEVICECAMERA_SET,channel:res.result,id:channel.id});
            const message = {type:'0',message:'通道设置成功'};
            dispatch({type:ActionType.APP_MESSAGE,message});
    
        
        }else{

            const message = {type:'-1',message:'通道设置失败'};
            dispatch({type:ActionType.APP_MESSAGE,message});
        
        }
        

    })();


});


/**
*   修改状态
*/
export const DeviceCameraStatus = (deviceCamera) =>(dispatch =>{

    (async ()=>{

        // dispatch({type:ActionType.DEVICE_DEVICECAMERA_STATUS,deviceCamera:id});
        // const message = {type:'0',message:'状态修改成功'};
        // dispatch({type:ActionType.APP_MESSAGE,message});

        deviceCamera.status=deviceCamera.status=='停用'?'启用':'停用';
        const url = RestFulApi.analysisApi();
        console.log(url);
        const res = await FetchUtils.fetchPut(url+'/'+deviceCamera.id,deviceCamera);
        console.log(res);
        if(res.code == 0){

            console.log(res);
            dispatch({type:ActionType.DEVICE_DEVICECAMERA_EDITOR,deviceCamera:deviceCamera});
            const message = {type:'0',message:'编辑成功'};
            dispatch({type:ActionType.APP_MESSAGE,message});
    
        
        }else{

            const message = {type:'-1',message:'编辑失败'};
            dispatch({type:ActionType.APP_MESSAGE,message});
        
        }
        

    })();


});

/**
*   删除单位
*/
export const removeDeviceCamera = (id) =>(dispatch =>{

    (async ()=>{

        // dispatch({type:ActionType.DEVICE_DEVICECAMERA_DELOR,id:id});
        // const message = {type:'0',message:'删除成功'};
        // dispatch({type:ActionType.APP_MESSAGE,message});
        
        const url = RestFulApi.analysisApi();
        const result = await FetchUtils.fetchDelete(url+'/'+id);
        // const result = await res.json();
        if(result.code == 0){

            dispatch({type:ActionType.DEVICE_DEVICECAMERA_DELOR,id:id});
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
export const removeDeviceCameras = (ids) =>(dispatch =>{

    (async ()=>{

        console.log(ids);
        const url = RestFulApi.deviceCameraApi();
        const result = await FetchUtils.fetchDelete(url,ids);
        console.log(JSON.stringify(result));
        // const result = await res.json();
        if(result.code == 0){

            dispatch({type:ActionType.DEVICE_DEVICECAMERA_DELORS,ids:result.result});
            const message = {type:'0',message:'删除成功'};
            dispatch({type:ActionType.APP_MESSAGE,message});
        
           
        
        }else{

            const message = {type:'-1',message:'删除失败。'};
            dispatch({type:ActionType.APP_MESSAGE,message});
        
        }


    })();


});

