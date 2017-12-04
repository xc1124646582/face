import RestFulApi from '../../util/RestFulApi';
import FetchUtils from '../../util/FetchUtils';
import ActionType from '../../util/ActionTypeUtils';

export const initStatus =  (status,page,searchkey) =>  (dispatch =>{
    
    (async ()=>{

        const url = RestFulApi.statusApi();
        const res = await FetchUtils.fetchGet(url+'?type='+status+'&page='+page+'&pager=10&searchkey='+searchkey);
        const result = await res.json();
        if(result.code == 0){

            console.log(result);
            dispatch({type:ActionType.DEVICE_STATUS_INIT,value:result});
        
        }else{

            const message = {type:'-1',message:'用户加载失败'};
            dispatch({type:ActionType.APP_MESSAGE,message});
        
        }
    
    })();
    

});
