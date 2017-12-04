import RestFulApi from '../../util/RestFulApi';
import FetchUtils from '../../util/FetchUtils';
import ActionType from '../../util/ActionTypeUtils';



export const initControl =  (id) =>  (dispatch =>{

    (async ()=>{

        var data=[
            {
                'id':1,
                'name':'任务名称',
                'result':'结果',
                'similarity':'相似度',
                'equipment':'出现设备',
                'time':'出现时间',
                'video':'视频'
            },
            {
                'id':2,
                'name':'任务名称2',
                'result':'结果',
                'similarity':'相似度',
                'equipment':'出现设备',
                'time':'出现时间',
                'video':'视频'
            },
            {
                'id':3,
                'name':'任务名称3',
                'result':'结果',
                'similarity':'相似度',
                'equipment':'出现设备',
                'time':'出现时间',
                'video':'视频'
            }
        ];
        dispatch({type:ActionType.DEVICE_CONTROL_INITALL,value:data[id]});
        

    })();
    

});


export const videoUrl =  (url) =>  (dispatch =>{

    (async ()=>{

        //alert('lll');
        dispatch({type:ActionType.FACE_VIDEO,value:url});
        

    })();
    

});

