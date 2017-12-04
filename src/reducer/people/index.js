import ActionType from '../../util/ActionTypeUtils';
export default (state = 
{'peoplese':{
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
}



}, action) => {

    switch(action.type){

    case ActionType.DEPLOY_PEOPLESE_INIT:{

    	console.log(action.value);
        // alert(ActionType.DEPLOY_SETUP_INIT);
        const value = action.value;
        state.peoplese.page =  value.page;
        state.peoplese.total =  value.total;
        state.peoplese.data =  value.data;
        return  Object.assign({}, state); 
    
    }
    case ActionType.DEPLOY_PEOPLESE_ADD:{

        let data = state.peoplese.data ;
        if(!data){

            data = [];
            state.peoplese.data = data;
        
        }
     
        data.push(action.value);
        

        state.peoplese = Object.assign({},state.peoplese);
        return  state;
    
    }

    case ActionType.DEPLOY_PEOPLESE_EDIT:{

        let data = state.peoplese.data ;
        for(let i of data){

            

            if(i.id==action.value.id){

                i.code=action.value.code;
                i.name=action.value.name;
                i.tel=action.value.tel;
                i.email=action.value.email;
                i.company=action.value.company;
                i.department=action.value.department;
            
            }
        
        }
        state.peoplese = Object.assign({},state.peoplese);
        return  Object.assign({}, state);
    
    }

    case ActionType.DEPLOY_PEOPLESE_REMOVE:{

        let data = state.peoplese.data ;
        const newData = [];
        for(let i of data){

            if(i.id != action.id){

                newData.push(i);

            }
          

        }

        state.peoplese.data =  newData;
        state.peoplese = Object.assign({}, state.peoplese);
        return  Object.assign({}, state);
    
    }

    default:
        return state;
    
    }

};