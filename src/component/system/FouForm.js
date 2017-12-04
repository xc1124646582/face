    import React, { Component } from 'react';
    import ReactDom from 'react-dom';
    import {connect} from 'react-redux';
    import { bindActionCreators } from 'redux';
    import { Modal,Form  } from 'antd';
    import {addAreaCamera,editAreaCamera,editOu,addOu} from '../../action';
    import '../../../public/style/style.css';

    class FouForm extends Component{
   //初始化
        constructor (props, context)  {

            super(props, context);
        
            this.state = {
                number:'',
                name:'',
                address:'',
                contact:'',
                contactPhoneNo:'',
                emailAddress:''
            };

    
    
        }
     // 提交表单
        submitfn = (e) => {

            var boles=true;
            if(!this.state.number){

                this.refs.numberspan.innerHTML='机构代码不能为空';
                boles=false;
        
            }else{

                this.refs.numberspan.innerHTML='';
        
            }
            if(!this.state.name){

                this.refs.namespan.innerHTML='单位名称不能为空';
                boles=false;
        
            }else{

                this.refs.namespan.innerHTML='';
        
            }
            if(!this.state.address){

                this.refs.addressspan.innerHTML='联系地址不能为空';
                boles=false;
        
            }else{

                this.refs.addressspan.innerHTML='';
        
            }
            if(!this.state.contact){

                this.refs.contactspan.innerHTML='联系人不能为空';
                boles=false;
        
            }else{

                this.refs.contactspan.innerHTML='';
        
            }
            if(!this.state.contactPhoneNo){

            //console.log(this.props.editRecord);
                this.refs.contactPhoneNospan.innerHTML='联系电话不能为空';
                boles=false;
        
            }else{

                this.refs.contactPhoneNospan.innerHTML='';
        
            }

            if(!this.state.emailAddress){

            //console.log(this.props.editRecord);
                this.refs.emailAddressspan.innerHTML='邮箱地址不能为空';
                boles=false;
        
            }else{

                this.refs.emailAddressspan.innerHTML='';
        
            }

            if(boles){

                if(this.props.title=='新增单位'){

                    var obj={
                        number:this.state.number,
                        name:this.state.name,
                        address:this.state.address,
                        contact:this.state.contact,
                        contactPhoneNo:this.state.contactPhoneNo,
                        emailAddress:this.state.emailAddress

                    };
                    this.props.addOu(obj);
                    this.handleCancel();
          
                }else if(this.props.title=='编辑单位'){

                    var obj={
                        id:this.props.editRecord.id,
                        number:this.state.number,
                        name:this.state.name,
                        address:this.state.address,
                        contact:this.state.contact,
                        contactPhoneNo:this.state.contactPhoneNo,
                        emailAddress:this.state.emailAddress

                    };
                    //console.log(obj);
                    this.props.editOu(obj);
                    this.handleCancel();
        
                }
        
            }
    
        }

        Cancelvalue=()=>{

            this.refs.numberspan.innerHTML='';
            this.refs.namespan.innerHTML='';
            this.refs.addressspan.innerHTML='';
            this.refs.contactspan.innerHTML='';
            this.refs.contactPhoneNospan.innerHTML='';
            this.refs.emailAddressspan.innerHTML='';
        
        }
    //取消 清空 新增 | 编辑  
        handleCancel = () => {

        //console.log(this.state.name);
            this.props.cancel();
            this.Cancelvalue();
            this.setState({number:'',name:'',address:'',contact:'',contactPhoneNo:'',emailAddress:''});
        //if(this.props.title=='新增区域'){

            //this.handleReset();
        
        //}
    
        }

        componentWillReceiveProps=(nextProps)=>{

        

            const editRecord = nextProps.editRecord;
            if(editRecord){

                this.setState(editRecord);
        
            }

    
        }
        render(){

            return (<Modal title={this.props.title}
                  visible={this.props.visible}
                  width={500}
                  onCancel={this.handleCancel}
                  // key={this.props.editRecord.id}
                  footer={null}
                  maskClosable={false}

                >
<div className='formboxs'>
<div className='formsa'><p className='formP' style={{'display':'inline-block'}}><span>* </span>机构代码：</p><input type='text' ref='name' value={this.state.number}  onChange={(e)=>{

    var ev=e||window.event;
    this.setState({ number:ev.target.value});
                
}}/><br/><span className='formspan' ref='numberspan'></span></div>
                <div className='formsa'><p className='formP' style={{'display':'inline-block'}}><span>* </span>单位名称：</p><input type='text' ref='name' value={this.state.name}  onChange={(e)=>{

                    var ev=e||window.event;
                    this.setState({ name:ev.target.value});
                
                }}/><br/><span className='formspan' ref='namespan'></span></div>
                <div className='formsa'><p className='formP' style={{'display':'inline-block'}}><span>* </span>联系地址：</p><input ref='ip' type='text' onChange={(e)=>{

                    var ev=e||window.event;
                    this.setState({ address:ev.target.value});
                
                }} value={this.state.address} /><br/><span className='formspan' ref='addressspan'></span></div>
                <div className='formsa'><p className='formP' style={{'display':'inline-block'}}><span>* </span>联系人：</p><input type='text' ref='port' value={this.state.contact} onChange={(e)=>{

                    var ev=e||window.event;

                    this.setState({ contact:ev.target.value});

                }}/><br/> <span className='formspan' ref='contactspan'></span></div>
                <div className='formsa'><p className='formP' style={{'display':'inline-block'}}><span>* </span>联系电话：</p><input type='text' ref='port' value={this.state.contactPhoneNo} onChange={(e)=>{

                    var ev=e||window.event;

                    this.setState({ contactPhoneNo:ev.target.value});

                }}/><br/> <span className='formspan' ref='contactPhoneNospan'></span></div>
                <div className='formsa'><p className='formP' style={{'display':'inline-block'}}><span>* </span>邮箱地址：</p><input type='text' ref='port' value={this.state.emailAddress} onChange={(e)=>{

                    var ev=e||window.event;

                    this.setState({ emailAddress:ev.target.value});

                }}/><br/> <span className='formspan' ref='emailAddressspan'></span></div>
      <div className='formsa'><button onClick={this.handleCancel}>取消</button>
                   <button onClick={this.submitfn}>保存</button>
                </div>
                </div>
             </Modal>);
  
        }
}
    FouForm = Form.create({})(FouForm);
    const state2props = (state = {},ownProps)  =>{

        const areacamera = state.device.areacamera;
    // 获取数据
        return Object.assign({},{areacamera},ownProps) ;

    };

    const dispatch2props =(dispatch) => {

    // 获取方法
        return bindActionCreators({addAreaCamera,editAreaCamera,editOu,addOu}, dispatch);

    };
    export default connect (state2props,dispatch2props)(FouForm);