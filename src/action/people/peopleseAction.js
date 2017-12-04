import RestFulApi from '../../util/RestFulApi';
import FetchUtils from '../../util/FetchUtils';
import ActionType from '../../util/ActionTypeUtils';


export const initPeoplese =  () =>  (dispatch =>{
    
    (async ()=>{

        var obj={
            'page':1,
            'total':10,
            'search':'',
            'data':[{
                'id':'1',
                'name':'名字',
                'code':'code',
                'tel':'联系方式',
                'email':'电子邮箱',
                'company':'所属单位',
                'department':'所属部门'

            }]
        };
        dispatch({type:ActionType.DEPLOY_PEOPLESE_INIT,value:obj});
    
    })();
    

});

export const addPeoplese =  (value) =>  (dispatch =>{
    
    (async ()=>{

        dispatch({type:ActionType.DEPLOY_PEOPLESE_ADD,value:value});
    
    })();
    

});
export const editPeoplese =  (value) =>  (dispatch =>{
    
    (async ()=>{

        dispatch({type:ActionType.DEPLOY_PEOPLESE_EDIT,value:value});
    
    })();

});

export const removePeoplese =  (id) =>  (dispatch =>{
    
    (async ()=>{

        dispatch({type:ActionType.DEPLOY_PEOPLESE_REMOVE,id:id});
    
    })();
    

});