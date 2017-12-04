    import React, { Component } from 'react';
    import ReactDom from 'react-dom';
    import {connect} from 'react-redux';
    import { bindActionCreators } from 'redux';
    import { Modal  } from 'antd';
    import { Select } from 'antd';
    import {addDepartment,editDepartment} from '../../action';
    import '../../../public/style/style.css';
    const Option = Select.Option;

    class FdepartmentForm extends Component{
   //初始化
        constructor (props, context)  {

            super(props, context);
        
            this.state = {
                companyId:'',
                name:'',
                number:'',
                director:'',
                directorPhoneNo:'',
                emailAddress:''
            };

    
    
        }
     // 提交表单
        submitfn = (e) => {

            var boles=true;
            if(!this.state.companyId){

                this.refs.companyIdspan.innerHTML='所属单位不能为空';
                boles=false;
        
            }else{

                this.refs.companyIdspan.innerHTML='';
        
            }
            if(!this.state.name){

                this.refs.namespan.innerHTML='部门名称不能为空';
                boles=false;
        
            }else{

                this.refs.namespan.innerHTML='';
        
            }
            if(!this.state.number){

                this.refs.numberspan.innerHTML='部门代码不能为空';
                boles=false;
        
            }else{

                this.refs.numberspan.innerHTML='';
        
            }
            if(!this.state.director){

                this.refs.directorspan.innerHTML='联系人不能为空';
                boles=false;
        
            }else{

                this.refs.directorspan.innerHTML='';
        
            }
            if(!this.state.directorPhoneNo){

                this.refs.directorPhoneNospan.innerHTML='联系电话不能为空';
                boles=false;
        
            }else{

                this.refs.directorPhoneNospan.innerHTML='';
        
            }
            if(!this.state.emailAddress){

            //console.log(this.props.editRecord);
                this.refs.emailAddressspan.innerHTML='邮箱地址不能为空';
                boles=false;
        
            }else{

                this.refs.emailAddressspan.innerHTML='';
        
            }

            if(boles){

                if(this.props.title=='新增部门'){

                    var obj={
                        id:9,
                        name:this.state.name,
                        number:this.state.number,
                        director:this.state.director,
                        directorPhoneNo:this.state.directorPhoneNo,
                        emailAddress:this.state.emailAddress,
                        companyId:this.state.companyId

                    };
                    this.props.addDepartment(obj);
                    this.handleCancel();
          
                }else if(this.props.title=='编辑部门'){

                    var obj={
                        id:this.props.editRecord.id,
                        name:this.state.name,
                        number:this.state.number,
                        director:this.state.director,
                        directorPhoneNo:this.state.directorPhoneNo,
                        emailAddress:this.state.emailAddress,
                        companyId:this.state.companyId

                    };
                    //console.log(obj);
                    this.props.editDepartment(obj);
                    this.handleCancel();
        
                }
        
            }
    
        }

        Cancelvalue=()=>{

            this.refs.namespan.innerHTML='';
            this.refs.numberspan.innerHTML='';
            this.refs.directorspan.innerHTML='';
            this.refs.directorPhoneNospan.innerHTML='';
            this.refs.emailAddressspan.innerHTML='';
            this.refs.companyIdspan.innerHTML='';
        
        }
    //取消 清空 新增 | 编辑  
        handleCancel = () => {

        //console.log(this.state.name);
            this.props.cancel();
            this.Cancelvalue();
            this.setState({name:'',number:'',director:'',directorPhoneNo:'',emailAddress:'',companyId:''});
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
        fn=()=>{

            console.log(this.props.ou);

            var data=this.props.ou.data;
            var arr=[];
            for (var i=0;i<data.length;i++){

                arr.push(<Option key={i} value={data[i].id} title={data[i].name} >{data[i].name}</Option>);
            
            }
            return arr;
        
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
<div className='selectboxs' style={{marginButtom:'15px'}}><p className='formP' style={{'display':'inline-block','width':'105px'}}><span style={{color:'red'}}>* </span>所属单位：</p>
                <Select style={{width:273,height:40}} value={this.state.companyId}  onChange={(value)=>   {

                    this.setState({
                        companyId:value
                    });
                
                }} size='large'dropdownMatchSelectWidth>
{this.fn()}
                </Select><br/><span className='formspan' ref='companyIdspan'></span>
      </div>

<div className='formsa'><p className='formP' style={{'display':'inline-block','width':'105px'}}><span>* </span>部门名称：</p><input type='text' ref='name' value={this.state.name}  onChange={(e)=>{

    var ev=e||window.event;
    this.setState({ name:ev.target.value});
                
}}/><br/><span className='formspan' ref='namespan'></span></div>
                <div className='formsa'><p className='formP' style={{'display':'inline-block','width':'105px'}}><span>* </span>部门代码：</p><input type='text' ref='name' value={this.state.number}  onChange={(e)=>{

                    var ev=e||window.event;
                    this.setState({ number:ev.target.value});
                
                }}/><br/><span className='formspan' ref='numberspan'></span></div>
                <div className='formsa'><p className='formP' style={{'display':'inline-block','width':'105px'}}><span>* </span>联系人：</p><input ref='ip' type='text' onChange={(e)=>{

                    var ev=e||window.event;
                    this.setState({ director:ev.target.value});
                
                }} value={this.state.director} /><br/><span className='formspan' ref='directorspan'></span></div>
                <div className='formsa'><p className='formP' style={{'display':'inline-block','width':'105px'}}><span>* </span>联系电话：</p><input type='text' ref='port' value={this.state.directorPhoneNo} onChange={(e)=>{

                    var ev=e||window.event;

                    this.setState({ directorPhoneNo:ev.target.value});

                }}/><br/> <span className='formspan' ref='directorPhoneNospan'></span></div>
                <div className='formsa'><p className='formP' style={{'display':'inline-block','width':'105px'}}><span>* </span>邮箱地址：</p><input type='text' ref='port' value={this.state.emailAddress} onChange={(e)=>{

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
    const state2props = (state = {},ownProps)  =>{

        const areacamera = state.device.areacamera;
        const ou = state.system.ou;
    // 获取数据
        return Object.assign({},{areacamera,ou},ownProps) ;

    };

    const dispatch2props =(dispatch) => {

    // 获取方法
        return bindActionCreators({addDepartment,editDepartment}, dispatch);

    };
    export default connect (state2props,dispatch2props)(FdepartmentForm);