import ActionType from '../../util/ActionTypeUtils';
export default (state = 
{'faceb':{
    'page':1,
    'total':16,
    'search':'',
    'data':[{
        'id':'1',
        'name':'西直门人脸库1',
        'layoutState':'已布控',
        'companyId':'北京XXX科技有限...1',
        'departmentId':'财务部1',
        'num':'20896',
        'share':true,
        'sharer':'张某',
        'companyIdx':'北京XXX科技有限...'
     

    },
    {
        'id':'2',
        'name':'西直门人脸库2',
        'layoutState':'已布控',
        'companyId':'北京XXX科技有限...2',
        'departmentId':'财务部2',
        'num':'20896',
        'share':false,
        'sharer':'张某',
        'companyIdx':'北京XXX科技有限...'
    },
    {
        'id':'3',
        'name':'西直门人脸库3',
        'layoutState':'已布控',
        'companyId':'北京XXX科技有限...3',
        'departmentId':'财务部3',
        'num':'20896',
        'share':true,
        'sharer':'张某',
        'companyIdx':'北京XXX科技有限...'
    }]
},
    'photodb':{
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
            'birthday':'1992-08-25',
            'photoRepoId':'西直门人脸库1',
            'expire':true
      

        },
        {
            'id':'2',
            'photo':'user1.jpg',
            'name':'张XX-1',
            'sex':'男',
            'age':25,
            'idCard':'4582XX58XX5X8X5X5X',
            'birthday':'1992-08-25',
            'photoRepoId':'西直门人脸库2',
            'expire':false
        },
        {
            'id':'3',
            'photo':'user1.jpg',
            'name':'张XX-1',
            'sex':'男',
            'age':25,
            'idCard':'4582XX58XX5X8X5X5X',
            'birthday':'1992-08-25',
            'photoRepoId':'西直门人脸库3',
            'expire':true

        }]
    },
    'repo':{
        'page':1,
        'total':10,
        'search':'',
        'data':[{
            'id':'1',
            'name':'西直门底库'

        }]
    }



}, action) => {
    
    switch(action.type){

    //人脸库管理 
    case ActionType.FACEDB_FACEB_INIT:{

        // alert(ActionType.SYSTEM_INIT);
        const value = action.value;
        state.faceb.page =  value.page;
        state.faceb.total =  value.total;
        state.faceb.data =  value.result;
        return  Object.assign({}, state); 
    
    }
    case ActionType.FACEDB_FACEB_ADDOR:{

        console.log(action.Faceb);
        let data = state.faceb.data ;
        if(!data){

            data = [];
            state.faceb.data = data;
        
        }
      

        data.push(action.Faceb);
       
        
        

        state.faceb = Object.assign({},state.faceb);
        console.log('ssss',state.faceb);
        return  state;
        
    }
    case ActionType.FACEDB_FACEB_DELOR:{

        let data = state.faceb.data ;
        const newData = [];
        for(let i of data){

            if(i.children&&i.children.length>0){

                for(let j=0;j<i.children.length;j++){

                    if(i.children[j].id==action.id){

                        i.children.splice(j,1);
                        newData.push(i);
                
                    }
                
                }
              
            
            } 
            if(i.id != action.id){

                newData.push(i);

            }
          

        }

        state.faceb.data =  newData;
        state.faceb = Object.assign({}, state.faceb);
        return  Object.assign({}, state);
    
    }
    case ActionType.FACEDB_FACEB_DELORS:{

        console.log('actionrows',action.ids);
        let data = state.faceb.data ;
        console.log('actiondata',data);
        const newDatas = [];



        for(let d of data){

            let r = false ;
            for(let id of action.ids){

                if(d.id == id){

                    r = true ;
                    break ;
                
                }
                if(d.children&&d.children.length>0){

                    for(let j=0;j<d.children.length;j++){

                        if(d.children[j]==id){

                            r=true;
                            break;
                        
                        }
                   
                    }

                }
            
            }
             
            if(!r){

                newDatas.push(d);
             
            }
                
        }
        state.faceb.data =  newDatas;
        state.faceb = Object.assign({}, state.faceb);
        return  Object.assign({}, state);
        
    }   
    case ActionType.FACEDB_FACEB_SELECTOR:{

        
        state.faceb.page =action.value.page;
        state.faceb.total =action.value.total;
        state.faceb.search =action.value.search;
        state.faceb.data=action.value.result;

        state.faceb = Object.assign({},state.faceb);
        return  Object.assign({}, state);
        
    }
    case ActionType.FACEDB_FACEB_EDITOR:{

        console.log(action.Faceb);
        let data = state.faceb.data ;
        for(let i of data){

            if(i.id==action.Faceb.id){

                i.companies=action.Faceb.companies;
                i.share=action.Faceb.share;
                i.companyId=action.Faceb.companyId;
                i.departmentId=action.Faceb.departmentId;
                i.organizationCode=action.Faceb.organizationCode;
                i.name=action.Faceb.name;
                i.userId=action.Faceb.userId;
                //i.address=action.Faceb.address;
                //i.linkman=action.Faceb.linkman;
                //i.telephone=action.Faceb.telephone;
                //i.data=action.Faceb.companies;
                //i.share=action.Faceb.share;
                //i.companyId=action.Faceb.companyId;
                //i.department=action.Faceb.departmentId;
            
            }
        
        }
        state.faceb = Object.assign({},state.faceb);
        console.log(state.faceb);
        return  Object.assign({}, state);
        
    }

    case ActionType.SELECTION_UNIT:{

        let data = state.faceb.data ;
        var aa=[];
        console.log(data,action.setup.companyId);
        for(var i in data){

            if(data[i].companyId==action.setup.companyId){

                aa.push(data[i]);
            
            }
        
        }
        state.faceb.data=aa;
        state.faceb = Object.assign({},state.faceb);
        return  Object.assign({}, state);
        // if(!data){

        //     data = [];
        //     state.photodb.data = data;
        
        // }
        // data.push(action.photodb);
        // state.photodb = Object.assign({},state.photodb);
        // return  state;
        
    }
    // 底库照片管理 
    case ActionType.FACEDB_PHOTODB_INIT:{

        // alert(ActionType.FACEDB_PHOTODB_INIT);
        const value = action.value ;
        state.photodb.page =  value.page;
        state.photodb.total =  value.total;
        state.photodb.data =  value.result;
        return  Object.assign({}, state); 
    
    }
    case ActionType.FACEDB_PHOTODB_INITREPO:{

        // alert(ActionType.FACEDB_PHOTODB_INIT);
        const value = action.value ;
        state.repo.page =  value.page;
        state.repo.total =  value.total;
        state.repo.data =  value.result;
        return  Object.assign({}, state); 
    
    }
    case ActionType.FACEDB_PHOTODB_ADDOR:{

        let data = state.photodb.data ;
        if(!data){

            data = [];
            state.photodb.data = data;
        
        }
        data.push(action.photodb);
        state.photodb = Object.assign({},state.photodb);
        return  state;
        
    }
    case ActionType.FACEDB_PHOTODB_SELECTOR:{

        state.photodb.page =action.value.page;
        state.photodb.total =action.value.total;
        state.photodb.search =action.value.search;
        state.photodb.data=action.value.result;

        state.photodb = Object.assign({},state.photodb);
        return  Object.assign({}, state);

    }
    case ActionType.FACEDB_PHOTODB_EDITOR:{

        let data = state.photodb.data ;
        for(let i of data){

            if(i.id==action.photodb.id){

                i.photo=action.photodb.photo;
                i.name=action.photodb.name;
                i.sex=action.photodb.sex;
                i.age=action.photodb.age;
                i.idCard=action.photodb.idCard;
                i.birthday=action.photodb.birthday;   
                i.repoName=action.photodb.repoName;         
            
            }
        
        }
        state.photodb = Object.assign({},state.photodb);
        return  Object.assign({}, state);
        
    }
    case ActionType.FACEDB_PHOTODB_DELOR:{

        let data = state.photodb.data ;
        const newData = [];
        for(let i of data){

            if(i.id != action.id){

                newData.push(i);
            
            }
        
        }

        state.photodb.data =  newData;
        state.photodb = Object.assign({}, state.photodb);
        return  Object.assign({}, state);
    
    }
    case ActionType.FACEDB_PHOTODB_DELORS:{

        console.log('actionrows',action.ids);
        let data = state.photodb.data ;
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
        state.photodb.data =  newDatas;
        state.photodb = Object.assign({}, state.photodb);
        return  Object.assign({}, state);
        
    }   
   
    default:
        return state;
    
    }

};