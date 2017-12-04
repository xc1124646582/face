import RestFulApi from '../../util/RestFulApi';
import FetchUtils from '../../util/FetchUtils';
import ActionType from '../../util/ActionTypeUtils';



export const initSetup =  () =>  (dispatch =>{

    (async ()=>{

        var obj={
            'page':1,
            'total':16,
            'search':'',
            'data':[
                {'id':1,
                    'name':'底库名称',
                    'deviceCamera':'分析服务器',
                    'companyId':'单位名称',
                    'departmentId':'部门名称',
                    'faceNum':300}
            ]
        };
        dispatch({type:ActionType.DEPLOY_SETUP_INIT,value:obj});
        // const url = RestFulApi.setupApi();
        // const res = await FetchUtils.fetchGet(url);
        // const result = await res.json();
        // if(result.code == 0){

        //     console.log('result',result);
        //     dispatch({type:ActionType.DEPLOY_SETUP_INIT,value:result});
        
        // }else{

        //     const message = {type:'-1',message:'用户加载失败'};
        //     dispatch({type:ActionType.APP_MESSAGE,message});
        
        // }
        

    })();
    

});


/**
*   查询
*/
export const selectSetup = (value) =>(dispatch =>{

    (async ()=>{

        const url = RestFulApi.setupApi();
        const res = await FetchUtils.fetchGet(url,value);
        // +'?page=1&pager=10&sort=id,userName&userName='
        const result = await res.json();
        if(result.code == 0){

            console.log('result',result);
            dispatch({type:ActionType.DEPLOY_SETUP_SELECTOR,value:result,search:value});
            const message = {type:'0',message:'查询成功'};
            dispatch({type:ActionType.APP_MESSAGE,message});
    
        
        }else{

            const message = {type:'-1',message:'查询失败'};
            dispatch({type:ActionType.APP_MESSAGE,message});
        
        }
        

    })();


});
/**
*   新增底库
*/
export const addSetup = (setup) =>(dispatch =>{

    (async ()=>{

        dispatch({type:ActionType.DEPLOY_SETUP_ADDOR,setup:setup});
        const message = {type:'0',message:'添加成功'};
        dispatch({type:ActionType.APP_MESSAGE,message});

        // console.log('aaaaa',setup);
        // const url = RestFulApi.setupApi();
        // const res = await FetchUtils.fetchPost(url,setup);
        // console.log(res);
        // const result = await res.json();
        // console.log(result);
        // if(result.code == 0){

        //     dispatch({type:ActionType.DEPLOY_SETUP_ADDOR,setup:result.result});
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
export const removeSetup = (id) =>(dispatch =>{

  
    (async ()=>{

        dispatch({type:ActionType.DEPLOY_SETUP_DELOR,id:id});
        const message = {type:'0',message:'删除成功'};
        dispatch({type:ActionType.APP_MESSAGE,message});
        
        // const url = RestFulApi.setupApi();
        // const result = await FetchUtils.fetchDelete(url+'/'+id);
        // console.log(result);
        // // const result = await res.json();
        // if(result.code == 0){

        //     dispatch({type:ActionType.DEPLOY_SETUP_DELOR,id:id});
        //     const message = {type:'0',message:'删除成功'};
        //     dispatch({type:ActionType.APP_MESSAGE,message});
        
        // }else{

        //     const message = {type:'-1',message:'删除失败'};
        //     dispatch({type:ActionType.APP_MESSAGE,message});
        
        // }
        

    })();



});

/**
*   删除多个单位
*/
export const removeSetups = (ids) =>(dispatch =>{

    (async ()=>{

        console.log(ids);
        const url = RestFulApi.setupApi();
        const result = await FetchUtils.fetchDelete(url,ids);
        console.log(JSON.stringify(result));
        // const result = await res.json();
        if(result.code == 0){

            dispatch({type:ActionType.DEPLOY_SETUP_DELORS,ids:result.result});
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
export const editSetup = (setup) =>(dispatch =>{

    (async ()=>{

        dispatch({type:ActionType.DEPLOY_SETUP_EDITOR,setup:setup});
        const message = {type:'0',message:'编辑成功'};
        dispatch({type:ActionType.APP_MESSAGE,message});


        // const url = RestFulApi.setupApi();
        // const result = await FetchUtils.fetchPut(url,setup);
        // // const result = await res.json();
        // if(result.code == 0){

        //     dispatch({type:ActionType.DEPLOY_SETUP_EDITOR,setup:setup});
        //     const message = {type:'0',message:'编辑成功'};
        //     dispatch({type:ActionType.APP_MESSAGE,message});
    
        
        // }else{

        //     const message = {type:'-1',message:'编辑失败'};
        //     dispatch({type:ActionType.APP_MESSAGE,message});
        
        // }
        

    })();

});



export const seleccompanyId = (setup) =>(dispatch =>{

    (async ()=>{

        alert('ppp');
        dispatch({type:ActionType.SELECTION_UNIT,setup:setup});
        

    })();

});

// export const initAllAreaCamera =  (params) =>  (dispatch =>{

//     (async ()=>{

//         const url = RestFulApi.setupApi();
//         const res = await FetchUtils.fetchGet(url,params);
//         const result = await res.json();
//         if(result.code == 0){

//             console.log('result',result);
//             dispatch({type:ActionType.DEPLOY_SETUP_INITALL,value:result});
        
//         }else{

//             const message = {type:'-1',message:'用户加载失败'};
//             dispatch({type:ActionType.APP_MESSAGE,message});
        
//         }
        

//     })();
    

// });



