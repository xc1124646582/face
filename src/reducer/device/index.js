import ActionType from '../../util/ActionTypeUtils';
export default (state = 
{'areacamera':{
    'page':1,
    'pager':10,
    'tocatl':200,
    'search':'',
    'data':[{'name':'name',
        'id':1,
        'IP':'ip',
        'port':'port',
        'status':'运行',
        'username':'user',
        'password':'password'},
    {'name':'name2',
        'IP':'ip',
        'id':2,
        'port':'port',
        'status':'运行',
        'username':'user',
        'password':'password'},
    {'name':'name3',
        'id':3,
        'IP':'ip',
        'port':'port',
        'status':'运行',
        'username':'user',
        'password':'password'}]
},
    'allareacamera':{
        'page':1,
        'total':16,
        'search':'',
        'data':[{
            'id':'1',
            'name':'北京市',
            'describe':'暂无描述',
            'children': [{
                'id':'1-1',
                'name':'北京市',
                'describe':'暂无描述'
            }]

        },
        {
            'id':'2',
            'name':'河北省',
            'describe':'暂无描述',
            'children': [{
                'id':'2-1',
                'name':'北京市',
                'describe':'暂无描述'
            }]
        },
        {
            'id':'3',
            'name':'天津市',
            'describe':'暂无描述'

        }]
    },
    'deviceCamera':{
        'page':1,
        'total':10,
        'search':'',
        'data':[{
            'id':'1',
            'code':'财务部1',
            'name':'001',
            'type':'张XX-1',
            'captureServer':'13888888888',
            'deviceState':'010-88888888',
            'layoutState':'王某',
            'cameraAreaId':'张XX-1',
            'companyId':'13888888888',
            'departmentId':'010-88888888',
            'channels':[],
            'usrState':'王某'

        },
        {
            'id':'2',
            'code':'财务部1',
            'name':'001',
            'type':'张XX-1',
            'captureServer':'13888888888',
            'deviceState':'010-88888888',
            'layoutState':'王某',
            'cameraAreaId':'张XX-1',
            'companyId':'13888888888',
            'departmentId':'010-88888888',
            'channels':'',
            'usrState':'王某'

        },
        {
            'id':'3',
            'code':'财务部1',
            'name':'001',
            'type':'张XX-1',
            'captureServer':'13888888888',
            'deviceState':'010-88888888',
            'layoutState':'王某',
            'cameraAreaId':'张XX-1',
            'companyId':'13888888888',
            'channels':[],
            'departmentId':'010-88888888',
            'usrState':'王某'


        }]
    },
    'server':{
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


    


    },
    'allareacameraall':{
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

        }]
    },
    'serverall':{
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

        }]
    },
    'status':{
        'page':1,
        'total':10,
        'search':'',
        'data':[{   'id':1,
            'name':'设备名称',
            'type':'设备类型',
            'IP':'IP',
            'status':'状态'
        },
        {   'id':2,
            'name':'设备名称',
            'type':'设备类型',
            'IP':'IP',
            'status':'状态'
        }
                ,
        {   'id':3,
            'name':'设备名称',
            'type':'设备类型',
            'IP':'IP',
            'status':'状态'
        }]
    }



}, action) => {
    
    switch(action.type){

        //识别服务器
    case ActionType.DEVICE_AREACAMERA_INITALL:{

        // const value = action.value ;
        // state.areacamera.page =  value.page;
        // state.areacamera.pager = value.pager;
        // state.areacamera.total =  value.total;
        // state.areacamera.data =  value.result;
        // return  Object.assign({}, state); 
        

        let areacamera = state.areacamera ;
        areacamera.page =  action.value.page;
        areacamera.pager = action.value.pager;
        areacamera.total =  action.value.total;
        areacamera.data =  action.value.result;
        if(action.delet&&areacamera.total%10==1){

            areacamera.total =  action.value.total-1;
        
        }
        state.areacamera = Object.assign({},state.areacamera);
        return  Object.assign({}, state);
    
    }
    //增加
    case ActionType.DEVICE_AREACAMERA_ADDOR:{

        if(state.areacamera.total/10-1<state.areacamera.page){

            //alert(state.areacamera.total);
            let data = state.areacamera.data ;
            if(!data){

                data = [];
                state.areacamera.data = data;
        
            }
            data.push(action.areacamera);
            state.areacamera.total=state.areacamera.total+1;
        
        }else{

            state.areacamera.total=state.areacamera.total+1;   
        
        }
        

        state.areacamera = Object.assign({},state.areacamera);
        return  state;
        
    }
    // case ActionType.DEVICE_AREACAMERA_DELOR:{

    //     // alert('DEVICE_AREACAMERA_DELOR');
    //     // const id = action.id ;
    //     // const newData = [];
    //     // const oldDate = state.areacamera.data;
    //     // // 删除被移除的对象
    //     // for(let i of oldDate){

    //     //     if(i.id != id){

    //     //         newData.push(i);
            
    //     //     }
        
    //     // }


    //     // // // 判断是否分页是否被更换

    //     // // const pager = state.areacamera.pager ;
    //     // // let page = state.areacamera.page;
    //     // // const maxPage = Math.ceil(newData / pager) ;
    //     // // if((page+1) > maxPage ){

    //     // //     page-- ;
        
    //     // // }
        
    //     // //state.areacamera.page = page ;
    //     // //state.areacamera.total = state.areacamera.total -1 ;
    //     // state.areacamera.data = newData;
    //     // state.areacamera = Object.assign({},state.areacamera);
    //     // return  state ;





    //     alert('uuu');
    //     let data = state.areacamera.data ;
    //     let newData = [];
    //     //if(state.areacamera.total%20!=1){

    //         // for(let i of data){

    //         //     if(i.id != action.id){

    //         //         newData.push(i);

    //         //     }
        
    //         // }
            
    //     newData=data;

    //     //}else{

    //     //    newData=data;
        
    //     //}
    //     //state.areacamera.total=state.areacamera.total-1;
    //     ///

    //     state.areacamera.data =  newData;
    //     console.log(state.areacamera);
    //     state.areacamera = Object.assign({}, state.areacamera);
       
    
    // }

    case ActionType.DEVICE_AREACAMERA_DELOR:{

        let data = state.areacamera.data ;
        const newData = [];
        for(let i of data){

            if(i.id != action.id){

                newData.push(i);
            
            }
        
        }
        state.areacamera.total=state.areacamera.total-1;
        state.areacamera.data =  newData;
        state.areacamera = Object.assign({}, state.areacamera);
        return  Object.assign({}, state);
    
    }
    case ActionType.DEVICE_AREACAMERA_EDITOR:{

        let data = state.areacamera.data ;
        console.log(action);
        for(let i of data){

            
            if(i.id==action.areacamera.id){

                i.name=action.areacamera.name;
                i.number=action.areacamera.number;
                i.host=action.areacamera.host;
                i.sshPort=action.areacamera.sshPort;
                i.status=action.areacamera.status;
                i.username=action.areacamera.username;
                i.password=action.areacamera.password;
            
            }

        
        }
        console.log(data);
        state.areacamera.data =  data;
        state.areacamera = Object.assign({},state.areacamera);
        return  Object.assign({}, state);
        
    }
    case ActionType.DEVICE_AREACAMERA_STATUS:{

        let data = state.areacamera.data ;
        for(let i of data){

            if(i.id==action.areacamera){

                i.status=i.status=='停用'?'启用':'停用';
            
            }

        
        }
        state.areacamera = Object.assign({},state.areacamera);
        return  Object.assign({}, state);
        
    }
    // 分析服务器
    case ActionType.DEVICE_DEVICECAMERA_INIT:{

        console.log(action.value);
        // alert(ActionType.DEVICE_DE_INIT);
        let deviceCamera = state.deviceCamera ;
        deviceCamera.page =  action.value.page;
        deviceCamera.pager = action.value.pager;
        deviceCamera.total =  action.value.total;
        deviceCamera.data =  action.value.result;
        state.deviceCamera = Object.assign({},state.deviceCamera);
        return  Object.assign({}, state);
    
    }

    // 所有分析服务器
    case ActionType.DEVICE_DEVICECAMERA_INITALL:{

        console.log(action.value);
        // alert(ActionType.DEVICE_DE_INIT);
        let allareacameraall = state.allareacameraall ;
        allareacameraall.page =  action.value.page;
        allareacameraall.pager = action.value.pager;
        allareacameraall.total =  action.value.total;
        allareacameraall.data =  action.value.result;
        state.allareacameraall = Object.assign({},state.allareacameraall);
        return  Object.assign({}, state);
    
    }
    //增加
    case ActionType.DEVICE_DEVICECAMERA_ADDOR:{

        if(state.deviceCamera.total/10-1<state.deviceCamera.page){

            let data = state.deviceCamera.data ;
            if(!data){

                data = [];
                state.deviceCamera.data = data;
        
            }
            data.push(action.deviceCamera);
            state.deviceCamera.total=state.deviceCamera.total+1;
        
        }else{

            state.deviceCamera.total=state.deviceCamera.total+1;
        
        }
        state.deviceCamera = Object.assign({},state.deviceCamera);
        return  state;
        
    }
    case ActionType.DEVICE_DEVICECAMERA_SELECTOR:{

        state.deviceCamera.page =action.value.page;
        state.deviceCamera.total =action.value.total;
        state.deviceCamera.search =action.value.search;
        state.deviceCamera.data=action.value.result;

        state.deviceCamera = Object.assign({},state.deviceCamera);
        return  Object.assign({}, state);

    }
    case ActionType.DEVICE_DEVICECAMERA_EDITOR:{

        let data = state.deviceCamera.data ;
        console.log(action.deviceCamera);
        for(let i of data){

            if(i.id==action.deviceCamera.id){

                i.name=action.deviceCamera.name;
                i.number=action.deviceCamera.number;
                i.host=action.deviceCamera.host;
                i.sshPort=action.deviceCamera.sshPort;
                i.status=action.deviceCamera.status;
                i.username=action.deviceCamera.username;  
                i.password=action.deviceCamera.password;  
                //i.channelCount=action.deviceCamera.channelCount;     
            
            }
        
        }
        state.deviceCamera = Object.assign({},state.deviceCamera);
        return  Object.assign({}, state);
        
    }

//修改状态
    case ActionType.DEVICE_DEVICECAMERA_STATUS:{

        let data = state.deviceCamera.data ;
        console.log(action.deviceCamera);
        for(let i of data){

            if(i.id==action.deviceCamera){

                i.status=i.status=='停用'?'启用':'停用';   
            
            }
        
        }
        state.deviceCamera = Object.assign({},state.deviceCamera);
        return  Object.assign({}, state);
        
    }
//通道设置
    case ActionType.DEVICE_DEVICECAMERA_SET:{

        let data = state.deviceCamera.data ;
        console.log(action.deviceCamera);
        for(let i of data){

            if(i.id==action.id){

                i.channels=action.channel;  
            
            }
        
        }
        state.deviceCamera = Object.assign({},state.deviceCamera);
        return  Object.assign({}, state);
        
    }
    case ActionType.DEVICE_DEVICECAMERA_DELOR:{

        let data = state.deviceCamera.data ;
        const newData = [];
        for(let i of data){

            if(i.id != action.id){

                newData.push(i);
            
            }
        
        }
        state.deviceCamera.total=state.deviceCamera.total-1;
        state.deviceCamera.data =  newData;
        state.deviceCamera = Object.assign({}, state.deviceCamera);
        return  Object.assign({}, state);
    
    }
    case ActionType.DEVICE_DEVICECAMERA_DELORS:{

        console.log('actionrows',action.ids);
        let data = state.deviceCamera.data ;
        console.log('actiondata',data);
        const newDatas = [];



        for(let d of data){

            let r = false ;
            for(let id of action.ids){

                if(d.id == id){

                    r = true ;
                    break ;
                
                }
            
            }
             
            if(!r){

                newDatas.push(d);
             
            }
                
        }
        state.deviceCamera.data =  newDatas;
        state.deviceCamera = Object.assign({}, state.deviceCamera);
        return  Object.assign({}, state);
        
    }   
    // 网络摄像头
    case ActionType.DEVICE_SERVER_INIT:{

        // alert(ActionType.DEVICE_SERVER_INIT);
        console.log(action.value);
        const server = state.server ;
        server.page =  action.value.page;
        server.pager =  action.value.pager;
        server.total =  action.value.total;
        server.data =  action.value.result;
        state.server = Object.assign({},state.server);
        return  Object.assign({}, state);
    
    }
    // 全部网络摄像头
    case ActionType.DEVICE_SERVER_INITALL:{

        // alert(ActionType.DEVICE_SERVER_INIT);
        const serverall = state.serverall ;
        serverall.page =  action.value.page;
        serverall.pager =  action.value.pager;
        serverall.total =  action.value.total;
        serverall.data =  action.value.result;
        state.server = Object.assign({},state.server);
        return  Object.assign({}, state);
    
    }
    case ActionType.DEVICE_SERVER_INITALL:{

        // alert(ActionType.DEVICE_SERVER_INIT);
        const value = action.value ;
        state.allserver.page =  value.page;
        state.allserver.total =  value.total;
        state.allserver.data =  value.result;
        return  Object.assign({}, state); 
    
    }
 
 //网络摄像头增加
    case ActionType.DEVICE_SERVER_ADDOR:{

        if(state.server.total/10-1<state.server.page){

            let data = state.server.data ;
            if(!data){

                data = [];
                state.server.data = data;
        
            }
            state.server.total=state.server.total+1;
            data.push(action.server);
        
        }else{

            state.server.total=state.server.total+1;
        
        }

        state.server = Object.assign({},state.server);
        return  state;
        
    }
    
    case ActionType.DEVICE_SERVER_SELECTOR:{


        state.server.page = action.value.page;
        state.server.total = action.value.total;
        state.server.search = action.search;
        state.server.data = action.value.data;
        state.server = Object.assign({},state.server);
        return  Object.assign({}, state);
        
    }
    case ActionType.DEVICE_SERVER_EDITOR:{

        let data = state.server.data ;
        for(let i of data){

            if(i.id==action.server.id){

                i.name=action.server.name;
                i.type=action.server.type;
                i.host=action.server.host;
                i.number=action.server.number;
                i.prot=action.server.prot;
                i.status=action.server.status; 
                i.username=action.server.username; 
                i.password=action.server.password;
                i.rtspUrl=action.server.rtspUrl;         
                     
            
            }
        
        }
        state.server = Object.assign({},state.server);
        return  Object.assign({}, state);
        
    }

    case ActionType.DEVICE_SERVER_STATUS:{

        let data = state.server.data ;
        for(let i of data){

            if(i.id==action.server){

                i.status=i.status=='停用'?'启用':'停用';
            
            }
        
        }
        state.server = Object.assign({},state.server);
        return  Object.assign({}, state);
        
    }
    //删除
    case ActionType.DEVICE_SERVER_DELOR:{

        let data = state.server.data ;
        const newData = [];
        for(let i of data){

            if(i.id != action.id){

                newData.push(i);

            }
        
        }
        state.server.data =  newData;

       // if(state.server.total/10-1>state.server.page||(Math.ceil(state.server.total/10-1)==state.server.page&&state.server.data.length>1)){

        state.server.total=state.server.total-1;
        
       // }
        state.server = Object.assign({}, state.server);
        return  Object.assign({}, state);
    
    }
    case ActionType.DEVICE_SERVER_DELORS:{

        console.log('actionrows',action.ids);
        let data = state.server.data ;
        console.log('actiondata',data);
        const newDatas = [];



        for(let d of data){

            let r = false ;
            for(let id of action.ids){

                if(d.id == id){

                    r = true ;
                    break ;
                
                }
            
            }
             
            if(!r){

                newDatas.push(d);
             
            }
                
        }
        state.server.data =  newDatas;
        state.server = Object.assign({}, state.server);
        return  Object.assign({}, state);
        
    }   
    case ActionType.DEVICE_STATUS_INIT:{

        // alert(ActionType.DEVICE_INIT);
        const status = state.status ;
        status.page =  action.value.page;
        status.pager =  action.value.pager;
        status.total =  action.value.total;
        status.data =  action.value.result;
        state.status = Object.assign({},state.status);
        return  Object.assign({}, state);
    
    }

    


    default:
        return state;
    
    }

};