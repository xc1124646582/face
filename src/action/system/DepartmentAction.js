import RestFulApi from '../../util/RestFulApi';
import FetchUtils from '../../util/FetchUtils';
import ActionType from '../../util/ActionTypeUtils';


export const initDepartment =  () =>  (dispatch =>{
    
    (async ()=>{

        var obj={
            'page':1,
            'total':10,
            'search':'',
            'data':[{
                'id':'1',
                'name':'财务部1',
                'number':'001',
                'director':'张XX-1',
                'directorPhoneNo':'13888888888',
                'companyId':'北京兆原数通科技有限公司1',
                'emailAddress':'010-88888888'

            },
            {
                'id':'2',
                'name':'财务部2',
                'number':'001',
                'director':'张XX-1',
                'companyId':'北京兆原数通科技有限公司2',
                'directorPhoneNo':'13888888888',
                'emailAddress':'010-88888888'

            },
            {
                'id':'3',
                'name':'财务部3',
                'number':'001',
                'director':'张XX-1',
                'companyId':'北京兆原数通科技有限公司3',
                'directorPhoneNo':'13888888888',
                'emailAddress':'010-88888888'


            }]
        };

        dispatch({type:ActionType.SYSTEM_DE_INIT,value:obj});

        // const url = RestFulApi.departmentsApi();
        // const res = await FetchUtils.fetchGet(url);
        // const result = await res.json();
        // if(result.code == 0){

        //     dispatch({type:ActionType.SYSTEM_DE_INIT,value:result});
        
        // }else{

        //     const message = {type:'-1',message:'用户加载失败'};
        //     dispatch({type:ActionType.APP_MESSAGE,message});
        
        // }
        

    })();
    

});


/**
*   查询
*/
export const selectDepartment = (value) =>(dispatch =>{


    (async ()=>{

        const url = RestFulApi.departmentApi();
        const res = await FetchUtils.fetchGet(url,value);
        // +'?page=1&pager=10&sort=id,userName&userName='
        const result = await res.json();
        if(result.code == 0){

            console.log('result',result);
            dispatch({type:ActionType.SYSTEM_DE_SELECTOR,value:result,search:value});
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
export const addDepartment = (department) =>(dispatch =>{

    (async ()=>{

        dispatch({type:ActionType.SYSTEM_DE_ADDOR,department:department});
        const message = {type:'0',message:'添加成功'};
        dispatch({type:ActionType.APP_MESSAGE,message});



        // const url = RestFulApi.departmentApi();
        // console.log(department);
        // var aa={
        //     'name':'财务部',
        //     'companyId':'E1F85D3A686B43ECBD899D2152F819CA',
        //     'code':'001',
        //     'linkman':'孙某',
        //     'telephone':'13544444444',
        //     'fax':'13245645',
        //     'manager':'王某'
        // };
        // const res = await FetchUtils.fetchPost(url,department);
        // console.log(res);
        // const result = await res.json();
        // console.log(result);
        // if(result.code == 0){

        //     dispatch({type:ActionType.SYSTEM_DE_ADDOR,department:result.result});
        //     const message = {type:'0',message:'添加成功'};
        //     dispatch({type:ActionType.APP_MESSAGE,message});
    
        
        // }else{

        //     const message = {type:'-1',message:'新增失败'};
        //     dispatch({type:ActionType.APP_MESSAGE,message});
        
        // }
        

    })();


});
/**
*   编辑单位
*/
export const editDepartment = (department) =>(dispatch =>{


    (async ()=>{

        dispatch({type:ActionType.SYSTEM_DE_EDITOR,department:department});
        const message = {type:'0',message:'编辑成功'};
        dispatch({type:ActionType.APP_MESSAGE,message});

        // const url = RestFulApi.departmentApi();
        // const result = await FetchUtils.fetchPut(url,department);
        // // const result = await res.json();
        // if(result.code == 0){

        //     dispatch({type:ActionType.SYSTEM_DE_EDITOR,department:department});
        //     const message = {type:'0',message:'编辑成功'};
        //     dispatch({type:ActionType.APP_MESSAGE,message});
    
        
        // }else{

        //     const message = {type:'-1',message:'编辑失败'};
        //     dispatch({type:ActionType.APP_MESSAGE,message});
        
        // }
        

    })();


});

/**
*   删除单位
*/
export const removeDepartment = (id) =>(dispatch =>{


    (async ()=>{

        dispatch({type:ActionType.SYSTEM_DE_DELOR,id:id});
        const message = {type:'0',message:'删除成功'};
        dispatch({type:ActionType.APP_MESSAGE,message});
        
        // const url = RestFulApi.departmentApi();
        // const result = await FetchUtils.fetchDelete(url+'/'+id);
        // console.log(result);
        // // const result = await res.json();
        // if(result.code == 0){

        //     dispatch({type:ActionType.SYSTEM_DE_DELOR,id:id});
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
export const removeDepartments = (ids) =>(dispatch =>{


    (async ()=>{

        console.log(ids);
        const url = RestFulApi.departmentApi();
        const result = await FetchUtils.fetchDelete(url,ids);
        console.log(JSON.stringify(result));
        // const result = await res.json();
        if(result.code == 0){

            dispatch({type:ActionType.SYSTEM_DE_DELORS,ids:result.result});
            const message = {type:'0',message:'删除成功'};
            dispatch({type:ActionType.APP_MESSAGE,message});
        
           
        
        }else{

            const message = {type:'-1',message:'删除失败。'};
            dispatch({type:ActionType.APP_MESSAGE,message});
        
        }


    })();


});

// 初始化所有页
export const initAllDepartment =  (params) =>  (dispatch =>{
    
    (async ()=>{

        const url = RestFulApi.departmentApi();
        const res = await FetchUtils.fetchGet(url,params);
        const result = await res.json();
        if(result.code == 0){

            dispatch({type:ActionType.SYSTEM_DE_INITALL,value:result});
        
        }else{

            const message = {type:'-1',message:'用户加载失败'};
            dispatch({type:ActionType.APP_MESSAGE,message});
        
        }
        

    })();
    

});