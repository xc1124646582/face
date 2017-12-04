import React, { Component } from 'react';
import ReactDom from 'react-dom';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { Modal,Form  ,Select } from 'antd';
import {addServer,editServer} from '../../action';
import '../../../public/style/style.css';
const Option = Select.Option;


class FnetcameraForm extends Component{
   //初始化
    constructor (props, context)  {

        super(props, context);
        
        this.state = {
            name:'',
            number:'',
            host:'',
            prot:'',
            username:'',
            password:'',
            status:'',
            rtspUrl:'',
            type:'',
            coding:''

        };
    
    }

  // 提交表单
    submitfn = (e) => {

        var boles=true;

        if(!this.state.name){

            this.refs.namespan.innerHTML='名称不能为空';
            boles=false;
        
        }else{

            this.refs.namespan.innerHTML='';
        
        }
        if(!this.state.type){

            this.refs.typespan.innerHTML='类型不能为空';
            boles=false;
        
        }else{

            this.refs.typespan.innerHTML='';
        
        }
        if(!this.state.host){

            this.refs.hostspan.innerHTML='IP不能为空';
            boles=false;
        
        }else{

            this.refs.hostspan.innerHTML='';
        
        }
        if(!this.state.number){

            this.refs.numberspan.innerHTML='编码不能为空';
            boles=false;
        
        }else{

            this.refs.numberspan.innerHTML='';
        
        }
        if(!this.state.prot){

            this.refs.protspan.innerHTML='端口号不能为空';
            boles=false;
        
        }else{

            this.refs.protspan.innerHTML='';
        
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
        
        }else{

            this.refs.usernamespan.innerHTML='';
        
        }
        if(!this.state.password){

            this.refs.passwordspan.innerHTML='密码不能为空';
            boles=false;
        
        }else{

            this.refs.passwordspan.innerHTML='';
        
        }
        if(!this.state.rtspUrl){

            this.refs.rtspUrlspan.innerHTML='rtspurl不能为空';
            boles=false;
        
        }else{

            this.refs.rtspUrlspan.innerHTML='';
        
        }

        if(boles){

            if(this.props.title=='新增网络摄像头'){

                var obj={
                    name:this.state.name,
                    type:this.state.type,
                    host:this.state.host,
                    number:this.state.number,
                    prot:this.state.prot,
                    status:this.state.status,
                    username:this.state.username,
                    password:this.state.password,
                    rtspUrl:this.state.rtspUrl

                };
                //console.log(obj);
                this.props.addServer(obj);
                this.handleCancel();
          
            }else if(this.props.title=='编辑网络摄像头'){

                var obj={
                    id:this.props.editRecord.id,
                    name:this.state.name,
                    type:this.state.type,
                    host:this.state.host,
                    number:this.state.number,
                    prot:this.state.prot,
                    status:this.state.status,
                    username:this.state.username,
                    password:this.state.password,
                    rtspUrl:this.state.rtspUrl

                };
                //console.log(obj);
                this.props.editServer(obj);
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
        this.refs.protspan.innerHTML='';
        this.refs.numberspan.innerHTML='';
        this.refs.typespan.innerHTML='';
        this.refs.hostspan.innerHTML='';
        this.refs.statusspan.innerHTML='';
        this.refs.usernamespan.innerHTML='';
        this.refs.passwordspan.innerHTML='';
        this.refs.rtspUrlspan.innerHTML='';
    
    }
    //取消 清空 新增 | 编辑  
    handleCancel = () => {

        //console.log(this.state.name);
        this.props.cancel();
        this.Cancelvalue();
        this.setState({ name:'',prot:'',host:'',number:'',username:'',password:'',rtspUrl:'',status:'',type:''});
        //if(this.props.title=='新增网络摄像头'){

        //    this.handleReset();
        
       // }
    
    }
     // 重置
    handleReset=()=>{

        
        this.refs.ip.value='';
        this.refs.port.value='';
        this.refs.name.value='';
        this.refs.username.value='';
        this.setState({ status:'',type:''});
        this.refs.password.value='';
        this.refs.rtspurl.value='';
    
    }

    componentWillReceiveProps=(nextProps)=>{

        const editRecord = nextProps.editRecord;
        if(editRecord){

            this.setState(editRecord);
        
        }

    
    }
 
    render(){

        //const {name,IP,port,status,username,password,rtspurl,type}=this.props.editRecord?this.props.editRecord:{};
        return (<Modal title={this.props.title}
                  visible={this.props.visible}
                  width={500}
                  onCancel={this.handleCancel}
                  // key={this.props.editRecord.id}
                  footer={null}
                  maskClosable={false}

                >
                <div className='formboxs'>
                <div className='formsa'><p className='formP' style={{'display':'inline-block'}}><span>* </span>名称：</p><input type='text' ref='name' value={this.state.name}  onChange={(e)=>{

                    var ev=e||window.event;
                    this.setState({ name:ev.target.value});
                
                }}/><br/><span className='formspan' ref='namespan'></span></div>
                <div className='formsa'><p className='formP' style={{'display':'inline-block'}}><span>* </span>类型：</p><input type='text' ref='name' value={this.state.type}  onChange={(e)=>{

                    var ev=e||window.event;
                    this.setState({ type:ev.target.value});
                
                }}/><br/><span className='formspan' ref='typespan'></span></div>
                <div className='formsa'><p className='formP' style={{'display':'inline-block'}}><span>* </span>编码：</p><input type='text' ref='coding' value={this.state.number}  onChange={(e)=>{

                    var ev=e||window.event;
                    this.setState({ number:ev.target.value});
                
                }}/><br/><span className='formspan' ref='numberspan'></span></div>
                <div className='formsa'><p className='formP' style={{'display':'inline-block'}}><span>* </span>IP：</p><input ref='ip' type='text' onChange={(e)=>{

                    var ev=e||window.event;
                    this.setState({ host:ev.target.value});
                
                }} value={this.state.host} /><br/><span className='formspan' ref='hostspan'></span></div>
                <div className='formsa'><p className='formP' style={{'display':'inline-block'}}><span>* </span>端口：</p><input type='text' ref='port' value={this.state.prot} onChange={(e)=>{

                    var ev=e||window.event;
                    if(/\D/.test(ev.target.value)){

                        ev.target.value='';

                    }else{

                        this.setState({ prot:ev.target.value});

                    }
                
                }}/><br/> <span className='formspan' ref='protspan'></span></div>
                <div className='selectboxs' style={{marginButtom:'25px'}}><p className='formP' style={{'display':'inline-block'}}><span style={{color:'red'}}>* </span>状态：</p>
                <Select style={{width:273,height:30}} value={this.state.status}  onChange={(value)=>   {

                    this.setState({ status:value});
                
                }} size='large' dropdownMatchSelectWidth>
                                  <Option value='启用'>启用</Option>
                                  <Option value='停用'>停用</Option>
                </Select><br/><span className='formspan' ref='statusspan'></span>
      </div>
                <div className='formsa'><p className='formP' style={{'display':'inline-block'}}><span>* </span>用户名：</p><input type='text' ref='username' onChange={(e)=>{

                    var ev=e||window.event;
                    this.setState({ username:ev.target.value});
                
                }} value={this.state.username}/><br/><span className='formspan' ref='usernamespan'></span></div>
                <div className='formsa'><p className='formP' style={{'display':'inline-block'}}><span>* </span>密码：</p><input type='text' ref='password' value={this.state.password} onChange={(e)=>{

                    var ev=e||window.event;
                    this.setState({ password:ev.target.value});
                
                }}/><br/><span className='formspan' ref='passwordspan'></span></div>
       <div className='formsa'><p className='formP' style={{'display':'inline-block'}}><span>* </span>Rtspurl：</p><input type='text' ref='rtspurl' onChange={(e)=>{

           var ev=e||window.event;
           this.setState({ rtspUrl:ev.target.value});
                
       }} value={this.state.rtspUrl}/><br/><span className='formspan' ref='rtspUrlspan'></span></div>         
      <div className='formsa'><button onClick={this.handleCancel}>取消</button>
                   <button onClick={this.submitfn}>保存</button>
                </div>
                </div>
             </Modal>);
  
    }
}
FnetcameraForm = Form.create({})(FnetcameraForm);
const state2props = (state = {},ownProps)  =>{

    const server = state.device.server;
    // 获取数据
    return Object.assign({},{server},ownProps) ;

};

const dispatch2props =(dispatch) => {

    // 获取方法
    return bindActionCreators({addServer,editServer}, dispatch);

};
export default connect (state2props,dispatch2props)(FnetcameraForm);