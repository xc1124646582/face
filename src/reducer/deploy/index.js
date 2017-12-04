import ActionType from '../../util/ActionTypeUtils';
export default (state = 
{'setup':{
    'page':1,
    'total':16,
    'search':'',
    'data':[{
        'id':'1',
        'code':'2017071700-1',
        'name':'北新桥地铁C口',
        'addr':'北京市东城区北......1',
        'photoRepoId':'北新桥人脸库',
        'policeManId':'张XX1',
        'alarmWay':'短信1',
        'alarmVal':0.8,
        'state':true
     

    },
    {
        'id':'2',
        'code':'2017071700-2',
        'name':'北新桥地铁C口',
        'addr':'北京市东城区北......2',
        'photoRepoId':'北新桥人脸库',
        'policeManId':'张XX2',
        'alarmWay':'短信2',
        'alarmVal':0.8,
        'state':false
    },
    {
        'id':'3',
        'code':'2017071700-3',
        'name':'北新桥地铁C口',
        'addr':'北京市东城区北......3',
        'photoRepoId':'北新桥人脸库',
        'policeManId':'张XX3',
        'alarmWay':'短信3',
        'alarmVal':0.8,
        'state':true
    }]
},
    'police':{
        'page':1,
        'total':10,
        'search':'',
        'data':[{
            'id':'1',
            'photo':'user1.jpg',
            'name':'张XX-1',
            'sex':'男',
            'age':25,
            'idCard':'4582XX58XX5X8X5X5X',
            'code':'123456',
            'tel':'13999999999',
            'email':'13999999999@163.com',
            'companyId':'北京XX科技有限公司',
            'departmentId':'财务部'   

        },
        {
            'id':'2',
            'photo':'user1.jpg',
            'name':'张XX-1',
            'sex':'男',
            'age':25,
            'idCard':'4582XX58XX5X8X5X5X',
            'code':'123456',
            'tel':'13999999999',
            'email':'13999999999@163.com',
            'companyId':'北京XX科技有限公司',
            'departmentId':'财务部'   
        },{
            'id':'3',
            'photo':'user1.jpg',
            'name':'张XX-1',
            'sex':'男',
            'age':25,
            'idCard':'4582XX58XX5X8X5X5X',
            'code':'123456',
            'tel':'13999999999',
            'email':'13999999999@163.com',
            'companyId':'北京XX科技有限公司',
            'departmentId':'财务部'   

        }]
    }, 'allpolice':{
        'page':1,
        'total':10,
        'search':'',
        'data':[{
            'id':'1',
            'photo':'user1.jpg',
            'name':'张XX-1',
            'sex':'男',
            'age':25,
            'idCard':'4582XX58XX5X8X5X5X',
            'code':'123456',
            'tel':'13999999999',
            'email':'13999999999@163.com',
            'companyId':'北京XX科技有限公司',
            'departmentId':'财务部'   

        },
        {
            'id':'2',
            'photo':'user1.jpg',
            'name':'张XX-1',
            'sex':'男',
            'age':25,
            'idCard':'4582XX58XX5X8X5X5X',
            'code':'123456',
            'tel':'13999999999',
            'email':'13999999999@163.com',
            'companyId':'北京XX科技有限公司',
            'departmentId':'财务部'   
        },{
            'id':'3',
            'photo':'user1.jpg',
            'name':'张XX-1',
            'sex':'男',
            'age':25,
            'idCard':'4582XX58XX5X8X5X5X',
            'code':'123456',
            'tel':'13999999999',
            'email':'13999999999@163.com',
            'companyId':'北京XX科技有限公司',
            'departmentId':'财务部'   

        }]
    },
    'warning':{
        'page':1,
        'total':10,
        'search':'',
        'data':[{
            'id':'1',
            'code':'W-ZYST',
            'name':'1号服务器',
            'ip':'192.168.00.000',
            'deviceState':'1',
            'addr':'公安一所',
            'usrState':'正常'

        },
        {
            'id':'2',
            'code':'W-ZYST',
            'name':'1号服务器',
            'ip':'192.168.00.000',
            'deviceState':'1',
            'addr':'公安一所',
            'usrState':'正常'


        },
        {
            'id':'3',
            'code':'W-ZYST',
            'name':'1号服务器',
            'ip':'192.168.00.000',
            'deviceState':'1',
            'addr':'公安一所',
            'usrState':'正常'

        }]


    


    }



}, action) => {
    
    switch(action.type){

    //布控设置 
    case ActionType.DEPLOY_SETUP_INIT:{

        // alert(ActionType.DEPLOY_SETUP_INIT);
        const value = action.value;
        state.setup.page =  value.page;
        state.setup.total =  value.total;
        state.setup.data =  value.data;
        return  Object.assign({}, state); 
    
    }
    case ActionType.DEPLOY_SETUP_ADDOR:{

        
        let data = state.setup.data ;
        if(!data){

            data = [];
            state.setup.data = data;
        
        }
     
        data.push(action.setup);
        

        state.setup = Object.assign({},state.setup);
        return  state;
        
    }
    case ActionType.DEPLOY_SETUP_DELOR:{

        let data = state.setup.data ;
        const newData = [];
        for(let i of data){

            if(i.id != action.id){

                newData.push(i);

            }
          

        }

        state.setup.data =  newData;
        state.setup = Object.assign({}, state.setup);
        return  Object.assign({}, state);
    
    }
    case ActionType.DEPLOY_SETUP_EDITOR:{

        let data = state.setup.data ;
        for(let i of data){

            

            if(i.id==action.setup.id){

                i.deviceCamera=action.setup.deviceCamera;
                i.name=action.setup.name;
                i.companyId=action.setup.companyId;
                i.departmentId=action.setup.departmentId;
            
            }
        
        }
        state.setup = Object.assign({},state.setup);
        return  Object.assign({}, state);
        
    }
    // 人脸布控
    case ActionType.DEPLOY_POLICE_INIT:{

        // alert(ActionType.SYSTEM_DE_INIT);
        const value = action.value ;
        state.police.page =  value.page;
        state.police.total =  value.total;
        state.police.data =  value.data;
        return  Object.assign({}, state); 
    
    }
    //新增人脸布控
    case ActionType.DEPLOY_POLICE_ADDOR:{

        let data = state.police.data ;
        if(!data){

            data = [];
            state.police.data = data;
        
        }
        data.push(action.police);
        state.police = Object.assign({},state.police);
        return  state;
        
    }
    //人脸布控编辑
    case ActionType.DEPLOY_POLICE_EDITOR:{

        let data = state.police.data ;
        for(let i of data){

            if(i.id==action.police.id){

                i.name=action.police.name;
                i.statetime=action.police.statetime;
                i.endtime=action.police.endtime;
                i.peoplese=action.police.peoplese;
                i.equipment=action.police.equipment;           
            
            }
        
        }
        state.police = Object.assign({},state.police);
        return  Object.assign({}, state);
        
    }
    //人脸布控删除
    case ActionType.DEPLOY_POLICE_DELOR:{

        let data = state.police.data ;
        const newData = [];
        for(let i of data){

            if(i.id != action.id){

                newData.push(i);

            }
          

        }

        state.police.data =  newData;
        state.police = Object.assign({}, state.police);
        return  Object.assign({}, state);
        
    }

    //底库布控
    case ActionType.DEPLOY_WARNING_INIT:{

        // alert(ActionType.DEPLOY_SETUP_INIT);
        const value = action.value;
        state.warning.page =  value.page;
        state.warning.total =  value.total;
        state.warning.data =  value.data;
        return  Object.assign({}, state); 
    
    }
    //新增底库布控
    case ActionType.DEPLOY_WARNING_ADDOR:{

        let data = state.warning.data ;
        if(!data){

            data = [];
            state.warning.data = data;
        
        }
        data.push(action.warning);
        state.warning = Object.assign({},state.warning);
        return  state;
        
    }
    //底库布控编辑
    case ActionType.DEPLOY_WARNING_EDITOR:{

        let data = state.warning.data ;
        for(let i of data){

            if(i.id==action.warning.id){

                i.name=action.warning.name;
                i.statetime=action.warning.statetime;
                i.endtime=action.warning.endtime;
                i.peoplese=action.warning.peoplese;
                i.equipment=action.warning.equipment;           
            
            }
        
        }
        state.warning = Object.assign({},state.warning);
        return  Object.assign({}, state);
        
    }
    //底库布控删除
    case ActionType.DEPLOY_WARNING_DELETE:{

        let data = state.warning.data ;
        const newData = [];
        for(let i of data){

            if(i.id != action.id){

                newData.push(i);

            }
          

        }

        state.warning.data =  newData;
        state.warning = Object.assign({}, state.warning);
        return  Object.assign({}, state);
        
    }
    


    default:
        return state;
    
    }

};