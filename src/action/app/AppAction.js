import { push } from 'react-router-redux';
import ActionType from '../../util/ActionTypeUtils';


/**
*   发送全局信息
*/
export const sendMessage = (message) =>(dispatch =>{

    dispatch({type:ActionType.APP_MESSAGE,message});

});

export const gotoPage = (page) =>(dispatch =>{

    dispatch(push(page));

});

export const gotoIndex = () =>(dispatch =>{

    dispatch(push('/'));

});

