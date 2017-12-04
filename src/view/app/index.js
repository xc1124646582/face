import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { Spin ,notification } from 'antd';
import {initOu,initDepartment,initUser,initAreaCamera,initDeviceCamera,initServer,initSetup,initPolice,initQuery,initPeoplese,initWarning,initStatus} from '../../action';



class App extends Component{
    constructor (props, context) {

        super(props, context);
        this.state = {'messageIndex': 0};
        const params=[1,10000];
        //this.props.initAreaCamera(0);
        this.props.initDeviceCamera(0,'');
        this.props.initServer(0,'');
        this.props.initQuery();
        this.props.initSetup();
        this.props.initPolice();
        this.props.initPeoplese();
        //this.props.initStatus();
        this.props.initWarning();
        //this.props.initOu();
        this.props.initDepartment();
        this.props.initUser();


        // this.props.initAllDepartment(params);
        // this.props.initAllOu(params);
        // this.props.initAllAreaCamera(params);  
        // this.props.initAllServer(params);
        // this.props.initAllPolice(params);
        // this.props.initUser();
        // this.props.initUsergroup();
        // this.props.initPrivilege();
        // this.props.initRole();
        // this.props.initAsset();
        // this.props.initDepartment();
        // this.props.initOu();
        // this.props.initAreaCamera();
        // this.props.initDeviceCamera();
        // this.props.initServer();
        // this.props.initRepo();
        // this.props.initFaceb();
        // this.props.initPhotodb();
        // this.props.initSetup();
        // this.props.initPolice();
        // this.props.initWarning();

 
        




    
    }

    componentWillReceiveProps(nextProps){

        if(nextProps.message && nextProps.message.index != this.state.messageIndex){

            this.openNotificationWithIcon(nextProps.message);
            this.setState({messageIndex:nextProps.message.index});
        
        }
    
    }

    /**
    *   全局提示信息
    */
    openNotificationWithIcon = (message) => {

        notification[message.type]({
            message: message.message,
            description: message.description
        });

    };

    /**
    *   全局加载进度
    */
    isLoading = () =>{

        const loading = this.props.loading;
        if(loading && loading > 0){

            return true ;
        
        }
        return false ;
   
    }
   
    render(){

        const falg =  this.isLoading();
        if(falg){

            return ( <Spin tip='Loading...' size='large' delay='800' style={{height:'100%'}} spinning={this.isLoading()} > {this.props.children}</Spin>);
        
        }else{

            return (<div style={{height:'100%'}}>{this.props.children}</div>);
        
        }
       
    
    }
}
const state2props = (state = {},ownProps)  =>{

    const {loading ,message} = state.app;
    // 获取数据
    return Object.assign({},{loading ,message},ownProps) ;

};
const dispatch2props =(dispatch) => {

    // 获取方法
    return bindActionCreators({initOu,initDepartment,initUser,initAreaCamera,initDeviceCamera,initServer,initSetup,initPolice,initQuery,initPeoplese,initWarning,initStatus}, dispatch);

};


export default connect (state2props,dispatch2props)(App);