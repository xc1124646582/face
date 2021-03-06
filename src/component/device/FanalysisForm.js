import React, { Component } from 'react';
import ReactDom from 'react-dom';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { Modal  ,Select } from 'antd';
import {addDeviceCamera,editDeviceCamera,selectDepartment} from '../../action';
import '../../../public/style/style.css';
const Option = Select.Option;


class FanalysisForm extends Component{
   //初始化
    constructor (props, context)  {

        super(props, context);
        
        this.state = {
            name:'',
            number:'',
            host:'',
            sshPort:'',
            username:'',
            password:'',
            channelCount:'',
            status:''

        };
    
    }


     // 提交表单
    submitfn = (e) => {

        var boles=true;

        if(!this.state.name){

            this.refs.namespan.innerHTML='名称不能为空';
            boles=false;
        
        }else if(this.state.name.length>100){

            this.refs.namespan.innerHTML='设备名称长度不能超过100字符';
            boles=false;
        
        }else{

            this.refs.namespan.innerHTML='';
        
        }
        if(!this.state.number){

            this.refs.numberspan.innerHTML='机器编号不能为空';
            boles=false;
        
        }else if(this.state.number.length>100){

            this.refs.numberspan.innerHTML='设备编号长度不能超过100字符';
            boles=false;
        
        }else{

            this.refs.numberspan.innerHTML='';
        
        }
        if(!this.state.host){

            this.refs.hostspan.innerHTML='IP不能为空';
            boles=false;
        
        }else if(this.state.host.length>100){

            this.refs.hostspan.innerHTML='设备ip长度不能超过100字符';
            boles=false;
        
        }else{

            this.refs.hostspan.innerHTML='';
        
        }
        if(!this.state.sshPort){

            this.refs.sshPortspan.innerHTML='端口号不能为空';
            boles=false;
        
        }else if(this.state.sshPort<20||this.state.sshPort>65535){

            this.refs.sshPortspan.innerHTML='设备通讯端口值非法，有效值(20-65535)';
            boles=false;
        
        }else{

            this.refs.sshPortspan.innerHTML='';
        
        }
        if(!this.state.status){

            //console.log(this.props.editRecord);
            this.refs.statusspan.innerHTML='状态不能为空';
            boles=false;
        
        }else{

            this.refs.statusspan.innerHTML='';
        
        }
        if(!this.state.username){

            this.refs.usernamespan.innerHTML='用户名不能为空';
            boles=false;
        
        }else if(this.state.username.length<2||this.state.username.length>32){

            this.refs.usernamespan.innerHTML='设备通讯用户名命长度非法，有效值(2-32)';
            boles=false;
        
        }else{

            this.refs.usernamespan.innerHTML='';
        
        }
        if(!this.state.password){

            this.refs.passwordspan.innerHTML='密码不能为空';
            boles=false;
        
        }else if(this.state.password.length<2||this.state.password.length>32){

            this.refs.passwordspan.innerHTML='设备密码长度非法，有效值(2-32)';
            boles=false;
        
        }else{

            this.refs.passwordspan.innerHTML='';
        
        }
        if(!this.state.channelCount){

            this.refs.channelCountspan.innerHTML='通道不能为空';
            boles=false;
        
        }else if(this.state.channelCount<1||this.state.channelCount>20){

            this.refs.passwordspan.innerHTML='设备分析通道数量非法，有效值(1-20)';
            boles=false;
        
        }else{

            this.refs.channelCountspan.innerHTML='';
        
        }
        if(boles){

            if(this.props.title=='新增分析服务器'){

                var obj={
                    number:this.state.number,
                    name:this.state.name,
                    host:this.state.host,
                    sshPort:this.state.sshPort,
                    status:this.state.status,
                    username:this.state.username,
                    password:this.state.password,
                    channelCount:this.state.channelCount

                };
                this.props.addDeviceCamera(obj);
                this.handleCancel();
          
            }else if(this.props.title=='编辑分析服务器'){

                var obj={
                    id:this.props.editRecord.id,
                    number:this.state.number,
                    name:this.state.name,
                    host:this.state.host,
                    sshPort:this.state.sshPort,
                    status:this.state.status,
                    username:this.state.username,
                    password:this.state.password,
                    channelCount:this.state.channelCount

                };
                //console.log(obj);
                this.props.editDeviceCamera(obj);
                this.handleCancel();
        
            }
        
        }
        // if (!err) {


        //     if(this.props.title=='新增区域'){

        //             //this.handleAdd(values);
                      

                          
        //     }else if(this.props.title=='编辑区域'){


        //             //this.handleEdit(values);
                
        //     }


 
        
        // }
    
    }

    Cancelvalue=()=>{

        this.refs.namespan.innerHTML='';
        this.refs.numberspan.innerHTML='';
        this.refs.hostspan.innerHTML='';
        this.refs.sshPortspan.innerHTML='';
        this.refs.statusspan.innerHTML='';
        this.refs.usernamespan.innerHTML='';
        this.refs.passwordspan.innerHTML='';
        this.refs.channelCountspan.innerHTML='';
    
    }
    //取消 清空 新增 | 编辑  
    handleCancel = () => {

        this.props.cancel();
        this.Cancelvalue();
        this.setState({ name:'',number:'',host:'',sshPort:'',username:'',password:'',status:'',channelCount:''});
        //if(this.props.title=='新增分析服务器'){

         //   this.handleReset();
        
       // }
    
    }
     // 重置
    handleReset=()=>{

        this.refs.IP.value='';
        this.refs.port.value='';
        this.refs.name.value='';
        this.refs.username.value='';
        this.setState({ status:'',channelCount:''});
        this.refs.password.value='';
    
    }

    componentWillReceiveProps=(nextProps)=>{

        const editRecord = nextProps.editRecord;
        

        this.setState(editRecord);
    
    }
    // 重置
    // handleReset2=()=>{

    //     this.refs.IP.value=this.props.editRecord.IP;
    //     this.refs.port.value=this.props.editRecord.port;
    //     this.refs.name.value=this.props.editRecord.name;
    //     this.refs.username.value=this.props.editRecord.username;
    //     this.setState({ status:this.props.editRecord.status,channelCount:this.props.editRecord.channelCount});
    //     this.refs.password.value=this.props.editRecord.password;
    
    // }
    render(){
       
        //const {name,IP,port,status,username,password,channelCount}=this.props.editRecord?this.props.editRecord:{};
  
        return (<Modal title={this.props.title}
                  visible={this.props.visible}
                  width={500}
                  onCancel={this.handleCancel}
                  // key={this.props.editRecord.id}
                  footer={null}
                  maskClosable={false}

                >
                <div className='formboxs'>
                <div className='formsa'><p className='formP' style={{'display':'inline-block'}}><span>* </span>名称：</p><input type='text' ref='name' value={this.state.name} onChange={(e)=>{

                    var ev=e||window.event;
                    this.setState({ name:ev.target.value});
                
                }}/><br/><span className='formspan' ref='namespan'></span></div>
                <div className='formsa'><p className='formP' style={{'display':'inline-block'}}><span style={{color:'red'}}>* </span>机器编号：</p>
                <input type='text' ref='port' value={this.state.number}  onChange={(e)=>{

                    var ev=e||window.event;
                    this.setState({ number:ev.target.value});
                
                }}/><br/><span className='formspan' ref='numberspan'></span>
      </div>
                <div className='formsa'><p className='formP' style={{'display':'inline-block'}}><span>* </span>IP：</p><input type='text' value={this.state.host} ref='IP'  onChange={(e)=>{

                    var ev=e||window.event;
                    this.setState({ host:ev.target.value});
                
                }}/><br/><span className='formspan' ref='hostspan'></span></div>
                <div className='formsa'><p className='formP' style={{'display':'inline-block'}}><span>* </span>端口：</p><input type='text' ref='port' value={this.state.sshPort}  onChange={(e)=>{

                    var ev=e||window.event;
                    if(/\D/.test(ev.target.value)){

                        ev.target.value='';

                    }else{

                        this.setState({ sshPort:ev.target.value});

                    }
                
                }}/><br/><span className='formspan' ref='sshPortspan'></span></div>
                <div className='selectboxs' style={{marginButtom:'15px'}}><p className='formP' style={{'display':'inline-block'}}><span style={{color:'red'}}>* </span>状态：</p>
                <Select style={{width:273,height:30}} value={this.state.status} onChange={(value)=>   {

                    this.setState({ status:value});
                
                }} size='large'dropdownMatchSelectWidth>
                                  <Option value='启用'>启用</Option>
                                  <Option value='停用'>停用</Option>
                </Select><br/><span className='formspan' ref='statusspan'></span>
      </div>
                <div className='formsa'><p className='formP' style={{'display':'inline-block'}}><span>* </span>用户名：</p><input type='text' ref='username' value={this.state.username} onChange={(e)=>{

                    var ev=e||window.event;
                    this.setState({ username:ev.target.value});
                
                }}/><br/><span className='formspan' ref='usernamespan'></span></div>
                <div className='formsa'><p className='formP' style={{'display':'inline-block'}}><span>* </span>密码：</p><input ref='password' value={this.state.password} onChange={(e)=>{

                    var ev=e||window.event;
                    this.setState({ password:ev.target.value});
                
                }}type='text'/><br/><span className='formspan' ref='passwordspan'></span></div>
      <div className='formsa' style={{marginButtom:'25px'}}><p className='formP' style={{'display':'inline-block'}}><span style={{color:'red'}}>* </span>通道数量：</p>
                <input type='text' ref='port' disabled={this.props.title=='编辑分析服务器'} value={this.state.channelCount}  onChange={(e)=>{

                    var ev=e||window.event;
                    if(/\D/.test(ev.target.value)){

                        ev.target.value='';

                    }else{

                        this.setState({ channelCount:ev.target.value});

                    }
                
                }}/><br/><span className='formspan' ref='channelCountspan'></span>
      </div>
      <div className='formsa'><button onClick={this.handleCancel}>取消</button>
                   <button onClick={this.submitfn}>保存</button>
                </div>
                </div>
             </Modal>
        );
  
    }
}
const state2props = (state = {},ownProps)  =>{

    const deviceCamera = state.device.deviceCamera;
    const allareacamera = state.device.allareacamera;
    const allou = state.system.allou;
    const allserver = state.device.allserver;
    const department = state.system.department;
    const alldepartment = state.system.alldepartment;

    // 获取数据
    return Object.assign({},{deviceCamera,allareacamera,allou,allserver,department,alldepartment},ownProps) ;

};

const dispatch2props =(dispatch) => {

    // 获取方法
    return bindActionCreators({addDeviceCamera,editDeviceCamera,selectDepartment}, dispatch);

};
export default connect (state2props,dispatch2props)(FanalysisForm);