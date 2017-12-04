import ActionType from '../../util/ActionTypeUtils';
export default (state = {}, action) => {
    
    switch(action.type){

    case ActionType.APP_LOGIN:{

        state.user = action.user;
        return  Object.assign({},state);
        
    }
    case ActionType.APP_MESSAGE:{

        console.log(action.message);
        let type = 'success';
        let message = '成功';
        let description = action.message.message;
        let codetype=action.message.code?action.message.code:action.message.type;
        switch(codetype*1){

        case 0:
            type = 'success';
            message = '成功';
            break;
        case -1:
            type = 'error';
            message = '错误';
            break;
        case 1:
            type = 'info';
            message = '信息';
            break;
        case 2:
            type = 'warning';
            message = '警告';
            break;
        
        }
        let oldIndex = 0 ;
        if(!state.message){

            state.message = {};
            state.message.index = oldIndex;
        
        }

        state.message.index = state.message.index+1;
        state.message.type = type;
        state.message.message = message;
        state.message.description = description;
        state.message = Object.assign({},state.message );
        return Object.assign({},state );
        
    }
    default:
        return state;
    
    }

};