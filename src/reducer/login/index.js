import ActionType from '../../util/ActionTypeUtils';


export default (state ={}, action) => {
    
    switch(action.type){

    //登陆账户
    case ActionType.LOGIN_IN:{

        // alert(ActionType.SYSTEM_INIT);
        const value = action.user;
        return  value;    
    
    }
    case ActionType.LOGIN_OUT:{

        state ={};
        return  state;    
    
    }
    default:
        return state;
    
    }

};