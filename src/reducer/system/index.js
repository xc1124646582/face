import ActionType from '../../util/ActionTypeUtils';
export default (state = 
{'ou':{
    'page':1,
    'total':16,
    'search':'',
    'data':[{
        'id':'1',
        'institutionCode':'234',
        'companyName':'北京兆原数通科技有限公司1',
        'contactAddress':'北京市东城区人民美术大厦C-1',
        'contacts':'张XX',
        'contactNumber':'13903003939',
        'children': [{
            'id':'7',
            'institutionCode':'883',
            'companyName':'北京兆原数通科技有限公司黑龙江分公司',
            'contactAddress':'道里区-1',
            'contacts':'里XX',
            'contactNumber':'10029929929'
        }]

    },
    {
        'id':'2',
        'institutionCode':'2332',
        'companyName':'北京兆原数通科技有限公司2',
        'contactAddress':'北京市东城区人民美术大厦C-1',
        'contacts':'张XX',
        'contactNumber':'13903003939'
    },
    {
        'id':'3',
        'institutionCode':'23421',
        'companyName':'北京兆原数通科技有限公司3',
        'contactAddress':'北京市东城区人民美术大厦C-1',
        'contacts':'张XX',
        'contactNumber':'13903003939'

    }]
},'allou':{
    'page':1,
    'total':16,
    'search':'',
    'data':[{
        'id':'1',
        'institutionCode':'234',
        'companyName':'北京兆原数通科技有限公司1',
        'contactAddress':'北京市东城区人民美术大厦C-1',
        'contacts':'张XX',
        'contactNumber':'13903003939',
        'children': [{
            'id':'7',
            'institutionCode':'883',
            'companyName':'北京兆原数通科技有限公司黑龙江分公司',
            'contactAddress':'道里区-1',
            'contacts':'里XX',
            'contactNumber':'10029929929'
        }]

    },
    {
        'id':'2',
        'institutionCode':'2332',
        'companyName':'北京兆原数通科技有限公司2',
        'contactAddress':'北京市东城区人民美术大厦C-1',
        'contacts':'张XX',
        'contactNumber':'13903003939'
    },
    {
        'id':'3',
        'institutionCode':'23421',
        'companyName':'北京兆原数通科技有限公司3',
        'contactAddress':'北京市东城区人民美术大厦C-1',
        'contacts':'张XX',
        'contactNumber':'13903003939'

    }]
},
    'department':{
        'page':1,
        'total':10,
        'search':'',
        'data':[{
            'id':'1',
            'departmentName':'财务部1',
            'departmentCode':'001',
            'contacts':'张XX-1',
            'contactNumber':'13888888888',
            'fax':'010-88888888',
            'departmentPrincipal':'王某'

        },
        {
            'id':'2',
            'departmentName':'财务部2',
            'departmentCode':'001',
            'contacts':'张XX-1',
            'contactNumber':'13888888888',
            'fax':'010-88888888',
            'departmentPrincipal':'王某'

        },
        {
            'id':'3',
            'departmentName':'财务部3',
            'departmentCode':'001',
            'contacts':'张XX-1',
            'contactNumber':'13888888888',
            'fax':'010-88888888',
            'departmentPrincipal':'王某'


        }]
    },'alldepartment':{
        'page':1,
        'total':10,
        'search':'',
        'data':[{
            'id':'1',
            'departmentName':'财务部1',
            'departmentCode':'001',
            'contacts':'张XX-1',
            'contactNumber':'13888888888',
            'fax':'010-88888888',
            'departmentPrincipal':'王某'

        },
        {
            'id':'2',
            'departmentName':'财务部2',
            'departmentCode':'001',
            'contacts':'张XX-1',
            'contactNumber':'13888888888',
            'fax':'010-88888888',
            'departmentPrincipal':'王某'

        },
        {
            'id':'3',
            'departmentName':'财务部3',
            'departmentCode':'001',
            'contacts':'张XX-1',
            'contactNumber':'13888888888',
            'fax':'010-88888888',
            'departmentPrincipal':'王某'


        }]
    },
    'asset':{
        'page':1,
        'total':10,
        'search':'',
        'data':[{
            'id':'1',
            'sourceName':'人脸查询1',
            'Type':'菜单',
            'link':'/',
            'priority':'1',
            'isOrnot':'正常',
            'resources':['1']

        },
        {
            'id':'2',
            'sourceName':'人脸查询2',
            'Type':'菜单',
            'link':'/',
            'priority':'1',
            'isOrnot':'正常',
            'resources':['1']


        },
        {
            'id':'3',
            'sourceName':'人脸查询3',
            'Type':'菜单',
            'link':'/',
            'priority':'1',
            'isOrnot':'正常',
            'resources':['1']


        }]


    },
    'privilege':{
        'page':1,
        'total':10,
        'search':'',
        'data':[{
            'id':'1',
            'name':'超级管理员1',
            'enName':'hansen1',
            'createBy':'管理员',
            'createTime':'2017-07-13  10:50:36',
            'resources': [
                {
                    'id': 'CBCE6191173E4DD2AB35763355DC902F'
                }
            ]

        },
        {
            'id':'2',
            'name':'超级管理员2',
            'enName':'hansen2',
            'createBy':'管理员',
            'createTime':'2017-07-13  10:50:36',
            'resources': [
                {
                    'id': 'CBCE6191173E4DD2AB35763355DC902F'
                }
            ]

        },
        {
            'id':'3',
            'name':'超级管理员3',
            'enName':'hansen3',
            'createBy':'管理员',
            'createTime':'2017-07-13  10:50:36',
            'resources': [
                {
                    'id': 'CBCE6191173E4DD2AB35763355DC902F'
                }
            ]


        }]


    },
    'role':{
        'page':1,
        'total':10,
        'search':'',
        'data':[{
            'id':'1',
            'name':'超级管理员1',
            'enName':'hansen1',
            'nameLimit':'全部',
            'createBy':'管理员',
            'createTime':'2017-07-13  10:50:36'

        },
        {
            'id':'2',
            'name':'超级管理员2',
            'enName':'hansen2',
            'nameLimit':'全部',
            'createBy':'管理员',
            'createTime':'2017-07-13  10:50:36'

        },
        {
            'id':'3',
            'name':'超级管理员3',
            'enName':'hansen3',
            'nameLimit':'全部',
            'createBy':'管理员',
            'createTime':'2017-07-13  10:50:36'


        }]


    },
    'usergroup':{
        'page':1,
        'total':10,
        'search':'',
        'data':[{
            'id':'1',
            'groupName':'超级管理员1',
            'enName':'hansen1',
            'assignRoles':'全部',
            'createBy':'管理员',
            'createTime':'2017-07-13  10:50:36'

        },
        {
            'id':'2',
            'groupName':'超级管理员2',
            'enName':'hansen2',
            'assignRoles':'全部',
            'createBy':'管理员',
            'createTime':'2017-07-13  10:50:36'

        },
        {
            'id':'3',
            'groupName':'超级管理员3',
            'enName':'hansen3',
            'assignRoles':'全部',
            'createBy':'管理员',
            'createTime':'2017-07-13  10:50:36'


        }]


    },
    'user':{
        'page':1,
        'total':10,
        'search':'',
        'data':[{
            'id':'1',
            'jobNum':'001',
            'departmentId':'销售部',
            'job':'销售员',
            'allocateGroup':'一组',
            'authorityDistribution':'系统管理',
            'userName':'admin1',
            'password':'0000',
            'nickName':'张某1',
            'telephone':'1399999999',
            'email':'1399999999@163.com'


        },
        {
            'id':'2',
            'jobNum':'002',
            'departmentId':'销售部',
            'job':'销售员',
            'allocateGroup':'一组',
            'authorityDistribution':'系统管理',
            'userName':'admin2',
            'password':'0000',
            'nickName':'张某2',
            'telephone':'1399999999',
            'email':'1399999999@163.com'

        },
        {
            'id':'3',
            'jobNum':'003',
            'departmentId':'销售部',
            'job':'销售员',
            'allocateGroup':'一组',
            'authorityDistribution':'系统管理',
            'userName':'admin1',
            'password':'0000',
            'nickName':'张某3',
            'telephone':'1399999999',
            'email':'1399999999@163.com'


        }]


    }



}, action) => {
    
    switch(action.type){

    //单位管理 
    //查询
    case ActionType.SYSTEM_INIT:{

        let ou = state.ou ;
        ou.page =  action.value.page;
        ou.pager = action.value.pager;
        ou.total =  action.value.total;
        ou.data =  action.value.result;
        state.ou = Object.assign({},state.ou);
        return  Object.assign({}, state);
    
    }
    case ActionType.SYSTEM_INITALL:{

        // alert(ActionType.SYSTEM_INITALL);
        const value = action.value;
        state.allou.page =  value.page;
        state.allou.total =  value.total;
        state.allou.data =  value.result;
        return  Object.assign({}, state); 
    
    }
    //增加
    case ActionType.SYSTEM_ADDOR:{

        if(state.ou.total/10-1<state.ou.page){
        
            let data = state.ou.data ;
            if(!data){

                data = [];
                state.ou.data = data;
        
            }
            data.push(action.ou);
            state.ou.total=state.ou.total+1;
        
        }else{

            alert('ppp');
            state.ou.total=state.ou.total+1;
        
        }

        state.ou = Object.assign({},state.ou);
        return  state;
        
    }
    case ActionType.SYSTEM_DELOR:{

        let data = state.ou.data ;
        const newData = [];
        for(let i of data){


            if(i.id != action.id){

                newData.push(i);

            }
            
          

        }

        state.ou.total=state.ou.total-1;

        state.ou.data =  newData;
        state.ou = Object.assign({}, state.ou);
        return  Object.assign({}, state);
    
    }
    case ActionType.SYSTEM_DELORS:{

        console.log('actionrows',action.ids);
        let data = state.ou.data ;
        console.log('actiondata',data);
        const newDatas = [];

        for(let d of data){

            let r = false ;
            for(let id of action.ids){

                if(d.id == id){

                    r = true ;
                    continue ;
                
                }

                if(d.children&&d.children.length>0){

                    for(let j=0;j<d.children.length;j++){

                        if(d.children[j].id==id){

                            d.children.splice(j,1);
                            break;
                        
                        }
                   
                    }

                }
            
            }
             
            if(!r){

                newDatas.push(d);
             
            }
                
        }

    

        state.ou.data =  newDatas;
        state.ou = Object.assign({}, state.ou);
        return  Object.assign({}, state);
        
    }   
    case ActionType.SYSTEM_SELECTOR:{

        
        state.ou.page =action.value.page;
        state.ou.total =action.value.total;
        state.ou.search =action.value.search;
        state.ou.data=action.value.result;

        state.ou = Object.assign({},state.ou);
        return  Object.assign({}, state);
        
    }
    case ActionType.SYSTEM_EDITOR:{

        let data = state.ou.data ;
        for(let i of data){

            //alert(i.id);
            if(i.id==action.ou.id){

                i.number=action.ou.number;
                i.name=action.ou.name;
                i.address=action.ou.address;
                i.contact=action.ou.contact;
                i.contactPhoneNo=action.ou.contactPhoneNo;
                i.emailAddress=action.ou.emailAddress;
            
            }
        
        }
        state.ou.data=data;
        state.ou = Object.assign({},state.ou);
        return  Object.assign({}, state);
        
    }
    // 部门管理
    case ActionType.SYSTEM_DE_INIT:{

        // alert(ActionType.SYSTEM_DE_INIT);
        const value = action.value ;
        state.department.page =  value.page;
        state.department.total =  value.total;
        state.department.data =  value.data;
        return  Object.assign({}, state); 
    
    }
    case ActionType.SYSTEM_DE_INITALL:{

        // alert(ActionType.SYSTEM_DE_USERINIT);
        const value = action.value ;
        state.alldepartment.page =  value.page;
        state.alldepartment.total =  value.total;
        state.alldepartment.data =  value.result;
        return  Object.assign({}, state); 
    
    }
    //新增部门
    case ActionType.SYSTEM_DE_ADDOR:{

        let data = state.department.data ;
        if(!data){

            data = [];
            state.department.data = data;
        
        }
        data.push(action.department);
        state.department = Object.assign({},state.department);
        return  state;
        
    }
    case ActionType.SYSTEM_DE_SELECTOR:{

        state.department.page =action.value.page;
        state.department.total =action.value.total;
        state.department.search =action.value.search;
        state.department.data=action.value.result;

        state.department = Object.assign({},state.department);
        return  Object.assign({}, state);

    }

    //部门编辑
    case ActionType.SYSTEM_DE_EDITOR:{

        let data = state.department.data ;
        for(let i of data){

            if(i.id==action.department.id){

                i.name=action.department.name;
                i.number=action.department.number;
                i.director=action.department.director;
                i.directorPhoneNo=action.department.directorPhoneNo;
                i.emailAddress=action.department.emailAddress;
                i.companyId=action.department.companyId;            
            
            }
        
        }
        state.department = Object.assign({},state.department);
        return  Object.assign({}, state);
        
    }
    case ActionType.SYSTEM_DE_DELOR:{

        let data = state.department.data ;
        const newData = [];
        for(let i of data){

            if(i.id != action.id){

                newData.push(i);
            
            }
        
        }

        state.department.data =  newData;
        state.department = Object.assign({}, state.department);
        return  Object.assign({}, state);
    
    }
    case ActionType.SYSTEM_DE_DELORS:{

        console.log('actionrows',action.ids);
        let data = state.department.data ;
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
        state.department.data =  newDatas;
        state.department = Object.assign({}, state.department);
        return  Object.assign({}, state);
        
    }   
    // 资源管理
    case ActionType.SYSTEM_ASSET_INIT:{

        // alert(ActionType.SYSTEM_ASSET_INIT);
        const value = action.value ;
        state.asset.page =  value.page;
        state.asset.total =  value.total;
        state.asset.data =  value.result;
        return  Object.assign({}, state); 
    
    }

    case ActionType.SYSTEM_ASSET_ADDOR:{

        let data = state.asset.data ;
        if(!data){

            data = [];
            state.asset.data = data;
        
        }
        for(let i of data){

            if(action.asset.parentId==i.id){

                i.children.push(action.asset);

            }

        }
        if(!action.asset.parentId){

            action.asset.children=[];
            data.push(action.asset);

       
        }
        state.asset = Object.assign({},state.asset);
        return  state;
        
    }
    case ActionType.SYSTEM_ASSET_SELECTOR:{


        state.asset.page = action.value.page;
        state.asset.total = action.value.total;
        state.asset.search = action.search;
        state.asset.data = action.value.result;
        state.asset = Object.assign({},state.asset);
        return  Object.assign({}, state);
        
    }
    case ActionType.SYSTEM_ASSET_EDITOR:{

        let data = state.asset.data ;

        for(let i of data){

            if(i.id==action.asset.id){

            
                i.name=action.asset.name;
                i.link=action.asset.link;
                i.pos=action.asset.pos;
                i.usable=action.asset.usable;    
            
            }else if(i.children&&i.children.length>0){

                for(let j=0;j<i.children.length;j++){

                    if(i.children[j].id==action.asset.id&&action.asset.parentId!=action.asset.parent){

                        i.children.splice(j,1);
                        for(let l=0;l<data.length;l++){

                            if(data[l].id==action.asset.parentId){

                                data[l].children.push(action.asset);
                            
                            }
                        
                        }

      
                    }else if(i.children[j].id==action.asset.id&&action.asset.parentId==action.asset.parent){

                        //alert('有parentid 仅改变值');
                        i.children[j].name=action.asset.name;
                        i.children[j].link=action.asset.link;
                        i.children[j].pos=action.asset.pos;
                        i.children[j].usable=action.asset.usable; 
                    
                    }
                
                }

            }

        
        }



        state.asset = Object.assign({},state.asset);
        return  Object.assign({}, state);
        
    }
    case ActionType.SYSTEM_ASSET_DELOR:{

        let data = state.asset.data ;
        const newData = [];
        for(let i of data){

            if(i.children&&i.children.length>0){

                for(let j=0;j<i.children.length;j++){

                    if(i.children[j].id==action.id){

                        i.children.splice(j,1);
                
                    }
                
                }
              
                newData.push(i);
            
            }else{
 
                if(i.id != action.id){

                    newData.push(i);

                }
            
            } 
        
        }
        console.log(newData);
        state.asset.data =  newData;
        state.asset = Object.assign({}, state.asset);
        return  Object.assign({}, state);
    
    }
    case ActionType.SYSTEM_ASSET_DELORS:{

        console.log('actionrows',action.ids);
        let data = state.asset.data ;
        console.log('actiondata',data);
        const newDatas = [];



        for(let d of data){

            let r = false ;
            for(let id of action.ids){

                if(d.id == id){

                    r = true ;
                    continue ;
                
                }
                if(d.children&&d.children.length>0){

                    for(let j=0;j<d.children.length;j++){

                        if(d.children[j].id==id){

                            d.children.splice(j,1);
                            break;
                    
                        }
                   
                    }

                }
            
            }
             
            if(!r){

                newDatas.push(d);
             
            }
                
        }
        state.asset.data =  newDatas;
        state.asset = Object.assign({}, state.asset);
        return  Object.assign({}, state);
        
    }   

    // 权限管理  
    case ActionType.SYSTEM_PRIVILEGE_INIT:{

        // alert(ActionType.SYSTEM_PRIVILEGE_INIT);
        const value = action.value ;
        state.privilege.page = value.page;
        state.privilege.total = value.total;
        state.privilege.data = value.result;
        return  Object.assign({}, state); 
    
    }

    case ActionType.SYSTEM_PRIVILEGE_ADDOR:{

        let data = state.privilege.data ;
        if(!data){

            data = [];
            state.privilege.data = data;
        
        }
        data.push(action.privilege);
        state.privilege = Object.assign({},state.privilege);
        return  state;
        
    }
    case ActionType.SYSTEM_PRIVILEGE_SELECTOR:{

      
        state.privilege.page = action.value.page;
        state.privilege.total = action.value.total;
        state.privilege.search = action.search;
        state.privilege.data = action.value.result;
        state.privilege = Object.assign({},state.privilege);
        return  Object.assign({}, state);
        
    }
    case ActionType.SYSTEM_PRIVILEGE_EDITOR:{

        let data = state.privilege.data ;
        for(let i of data){

            if(i.id==action.privilege.id){

                i.name=action.privilege.name;
                i.enName=action.privilege.enName;     
                i.resources=action.privilege.resources;    
            
            }
        
        }
        state.privilege = Object.assign({},state.privilege);
        return  Object.assign({}, state);
        
    }
    case ActionType.SYSTEM_PRIVILEGE_DELOR:{

        let data = state.privilege.data ;
        const newData = [];
        for(let i of data){

            if(i.id != action.id){

                newData.push(i);
            
            }
        
        }

        state.privilege.data =  newData;
        state.privilege = Object.assign({}, state.privilege);
        return  Object.assign({}, state);
    
    }
    case ActionType.SYSTEM_PRIVILEGE_DELORS:{

        console.log('actionrows',action.ids);
        let data = state.privilege.data ;
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
        state.privilege.data =  newDatas;
        state.privilege = Object.assign({}, state.privilege);
        return  Object.assign({}, state);
        
    }   

    // 角色管理

    case ActionType.SYSTEM_ROLE_INIT:{

        // alert(ActionType.SYSTEM_ROLE_INIT);
        const value = action.value ;
        state.role.page =  value.page;
        state.role.total =  value.total;
        state.role.data =  value.result;
        return  Object.assign({}, state); 
    
    }

    case ActionType.SYSTEM_ROLE_ADDOR:{

        let data = state.role.data ;
        if(!data){

            data = [];
            state.role.data = data;
        
        }
        data.push(action.role);
        state.role = Object.assign({},state.role);
        return  state;

        
    }
    case ActionType.SYSTEM_ROLE_SELECTOR:{

        state.role.page = action.value.page;
        state.role.total = action.value.total;
        state.role.search = action.search;
        state.role.data = action.value.result;

        state.role = Object.assign({},state.role);
        return  Object.assign({}, state);
        
    }
    case ActionType.SYSTEM_ROLE_EDITOR:{

        let data = state.role.data ;
        for(let i of data){

            if(i.id==action.role.id){

                i.name=action.role.name;
                i.enName=action.role.enName;   
                i.privileges=action.role.privileges;        
            
            }
        
        }
        state.role = Object.assign({},state.role);
        return  Object.assign({}, state);
        
    }
    case ActionType.SYSTEM_ROLE_DELOR:{

        let data = state.role.data ;
        const newData = [];
        for(let i of data){

            if(i.id != action.id){

                newData.push(i);
            
            }
        
        }

        state.role.data =  newData;
        state.role = Object.assign({}, state.role);
        return  Object.assign({}, state);
    
    }
    case ActionType.SYSTEM_ROLE_DELORS:{

        console.log('actionrows',action.ids);
        let data = state.role.data ;
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
        state.role.data =  newDatas;
        state.role = Object.assign({}, state.role);
        return  Object.assign({}, state);
        
    }   


    // 用户组管理
    case ActionType.SYSTEM_USERGROUP_INIT:{

        // alert(ActionType.SYSTEM_USERGROUP_INIT);
        const value = action.value ;
        state.usergroup.page =  value.page;
        state.usergroup.total =  value.total;
        state.usergroup.data =  value.result;
        return  Object.assign({}, state); 
    
    
    }
    case ActionType.SYSTEM_USERGROUP_ADDOR:{

        let data = state.usergroup.data ;
        if(!data){

            data = [];
            state.usergroup.data = data;
        
        }
        data.push(action.usergroup);
        state.usergroup = Object.assign({},state.usergroup);
        return  state;
        
    }
    case ActionType.SYSTEM_USERGROUP_SELECTOR:{

        state.usergroup.page = action.value.page;
        state.usergroup.total = action.value.total;
        state.usergroup.search = action.search;
        state.usergroup.data = action.value.result;

        state.usergroup = Object.assign({},state.usergroup);
        return  Object.assign({}, state);
        
    }
    case ActionType.SYSTEM_USERGROUP_EDITOR:{

        let data = state.usergroup.data ;
        for(let i of data){

            if(i.id==action.usergroup.id){

                i.groupName=action.usergroup.groupName;
                i.enName=action.usergroup.enName;  
                i.roles=action.usergroup.roles;
            
            }
        
        }
        state.usergroup = Object.assign({},state.usergroup);
        return  Object.assign({}, state);
        
    }
    case ActionType.SYSTEM_USERGROUP_DELOR:{

        let data = state.usergroup.data ;
        const newData = [];
        for(let i of data){

            if(i.id != action.id){

                newData.push(i);
            
            }
        
        }

        state.usergroup.data =  newData;
        state.usergroup= Object.assign({}, state.usergroup);
        return  Object.assign({}, state);
    
    }
    case ActionType.SYSTEM_USERGROUP_DELORS:{

        console.log('actionrows',action.ids);
        let data = state.usergroup.data ;
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
        state.usergroup.data =  newDatas;
        state.usergroup = Object.assign({}, state.usergroup);
        return  Object.assign({}, state);
        
    }


     // 用户管理
    case ActionType.SYSTEM_USER_ADDOR:{

        let data = state.user.data ;
        if(!data){

            data = [];
            state.user.data = data;
        
        }
        data.push(action.user);

        state.user = Object.assign({},state.user);
        return  state;
        
    }
    case ActionType.SYSTEM_USER_SELECTOR:{
  
        state.user.page = action.value.page;
        state.user.total = action.value.total;
        state.user.search = action.search;
        state.user.data = action.value.result;
  
        state.user = Object.assign({},state.user);
        return  Object.assign({}, state);
        
    }
    case ActionType.SYSTEM_USER_EDITOR:{

        let data = state.user.data ;
        for(let i of data){

            if(i.id==action.user.id){
                
                i.companyId=action.user.companyId;
                i.departmentId=action.user.departmentId;  
                i.jobNumber=action.user.jobNumber;
                i.position=action.user.position;  
                i.userName=action.user.userName;
                i.password=action.user.password;  
                i.nickName=action.user.nickName;
                i.userPhoneNo=action.user.userPhoneNo;   
                i.emailAddress=action.user.emailAddress;
                i.nologin=action.user.nologin;          
                
            }
        
        }
        state.user = Object.assign({},state.user);
        return  Object.assign({}, state);
        
    }
    case ActionType.SYSTEM_USER_DELOR:{

        let data = state.user.data ;
        const newData = [];
        for(let i of data){

            if(i.id != action.id){

                newData.push(i);
            
            }
        
        }

        state.user.data =  newData;
        state.user= Object.assign({}, state.user);
        return  Object.assign({}, state);
    
    }
    case ActionType.SYSTEM_USER_DELORS:{

        console.log('actionrows',action.ids);
        let data = state.user.data ;
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
        state.user.data =  newDatas;
        state.user = Object.assign({}, state.user);
        return  Object.assign({}, state);
        
    }   
    case ActionType.SYSTEM_USER_INIT:{

        // alert(ActionType.SYSTEM_USER_INIT);
        console.log(action.value);
        const value = action.value ;
        state.user.page =  value.page;
        state.user.total =  value.total;
        state.user.data =  value.data;    
        return  Object.assign({}, state); 

    
    }


    default:
        return state;
    
    }

};