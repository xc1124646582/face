import RestFulApi from '../../util/RestFulApi';
import FetchUtils from '../../util/FetchUtils';
import ActionType from '../../util/ActionTypeUtils';



export const initQuery =  () =>  (dispatch =>{

    (async ()=>{

        var  result={
            'page':1,
            'total':10,
            'search':'',
            'data':[{
                'id':1,
                'name':'任务名称',
                'time':'创建时间',
                'setname':'创建人',
                'schedule':'进行中',
                'elapsed':'两小时'
            }]
        };
        dispatch({type:ActionType.DEVICE_FACE_INITALL,value:result});
        

    })();
    

});


/**
*   新增查询任务
*/
export const addface = (face) =>(dispatch =>{

    (async ()=>{

        dispatch({type:ActionType.DEVICE_FACE_ADDOR,value:face});
        const message = {type:'0',message:'添加成功'};
        dispatch({type:ActionType.APP_MESSAGE,message});

    })();


});


/**
*   删除查询任务
*/
export const faceRemove = (id) =>(dispatch =>{

    (async ()=>{

        dispatch({type:ActionType.DELETE_FACE_ADDOR,value:id});
        const message = {type:'0',message:'删除成功'};
        dispatch({type:ActionType.APP_MESSAGE,message});

    })();


});