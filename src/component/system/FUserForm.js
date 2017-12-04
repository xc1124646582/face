    import React, { Component } from 'react';
    import ReactDom from 'react-dom';
    import {connect} from 'react-redux';
    import { bindActionCreators } from 'redux';
    import { Select,Modal,Icon,Upload } from 'antd';
    import {addUser,editUser} from '../../action';
    import '../../../public/style/style.css';

    class FUserForm extends Component{
   //初始化
        constructor (props, context)  {

            super(props, context);
        
            this.state = {
                companyId:'',
                jobNumber:'',
                departmentId:'',
                position:'',
                telephone:'',
                userName:'',
                password:'',
                passwords:'',
                nickName:'',
                userPhoneNo:'',
                emailAddress:'',
                nologin:'',
                previewVisible: false,
                previewImage: '',
                fileList: []




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
            if(!this.state.departmentId){

                this.refs.departmentIdspan.innerHTML='所属部门不能为空';
                boles=false;
        
            }else{

                this.refs.departmentIdspan.innerHTML='';
        
            }
            if(!this.state.jobNumber){

                this.refs.jobNumberspan.innerHTML='工号不能为空';
                boles=false;
        
            }else{

                this.refs.jobNumberspan.innerHTML='';
        
            }
            if(!this.state.position){

                this.refs.positionspan.innerHTML='职位不能为空';
                boles=false;
        
            }else{

                this.refs.positionspan.innerHTML='';
        
            }
            if(!this.state.userName){

            //console.log(this.props.editRecord);
                this.refs.userNamespan.innerHTML='登录名不能为空';
                boles=false;
        
            }else{

                this.refs.userNamespan.innerHTML='';
        
            }
            if(!this.state.passwords){

            //console.log(this.props.editRecord);
                this.refs.passwordspan.innerHTML='密码不能为空';
                boles=false;
        
            }else{

                this.refs.passwordspan.innerHTML='';
        
            }
            if(!this.state.nickName){

            //console.log(this.props.editRecord);
                this.refs.nickNamespan.innerHTML='姓名不能为空';
                boles=false;
        
            }else{

                this.refs.nickNamespan.innerHTML='';
        
            }
            if(!this.state.userPhoneNo){

            //console.log(this.props.editRecord);
                this.refs.userPhoneNospan.innerHTML='电话不能为空';
                boles=false;
        
            }else{

                this.refs.userPhoneNospan.innerHTML='';
        
            }
            if(!this.state.emailAddress){

            //console.log(this.props.editRecord);
                this.refs.emailAddressspan.innerHTML='邮箱不能为空';
                boles=false;
        
            }else{

                this.refs.emailAddressspan.innerHTML='';
        
            }

            if(boles){

                if(this.props.title=='新增用户'){

                    var obj={
                        id:8,
                        companyId:this.state.companyId,
                        departmentId:this.state.departmentId,
                        jobNumber:this.state.jobNumber,
                        position:this.state.position,
                        userName:this.state.userName,
                        password:this.state.passwords,
                        nickName:this.state.nickName,
                        userPhoneNo:this.state.userPhoneNo,
                        emailAddress:this.state.emailAddress,
                        nologin:this.state.nologin

                    };
                    this.props.addUser(obj);
                    this.handleCancel();
          
                }else if(this.props.title=='编辑用户'){

                    var obj={
                        id:this.props.editRecord.id,
                        companyId:this.state.companyId,
                        departmentId:this.state.departmentId,
                        jobNumber:this.state.jobNumber,
                        position:this.state.position,
                        userName:this.state.userName,
                        password:this.state.passwords,
                        nickName:this.state.nickName,
                        userPhoneNo:this.state.userPhoneNo,
                        emailAddress:this.state.emailAddress,
                        nologin:this.state.nologin
                    };
                    //console.log(obj);
                    this.props.editUser(obj);
                    this.handleCancel();
        
                }
        
            }
    
        }

        Cancelvalue=()=>{

            this.refs.companyIdspan.innerHTML='',
            this.refs.departmentIdspan.innerHTML='',
            this.refs.jobNumberspan.innerHTML='';
            this.refs.positionspan.innerHTML='';
            this.refs.userNamespan.innerHTML='';
            this.refs.passwordspan.innerHTML='';
            this.refs.nickNamespan.innerHTML='';
            this.refs.userPhoneNospan.innerHTML='';
            this.refs.emailAddressspan.innerHTML='';
        
        }
    //取消 清空 新增 | 编辑  
        handleCancel = () => {

        //console.log(this.state.name);
            this.props.cancel();
            this.Cancelvalue();
            this.setState({jobNum:'',companyId:'',departmentId:'',job:'',groups:'',userName:'',password:'',nickName:'',telephone:'',email:''});
        //if(this.props.title=='新增区域'){

            //this.handleReset();
        
        //}
    
        }

        componentWillReceiveProps=(nextProps)=>{

        

            const editRecord = nextProps.editRecord;
            if(editRecord){

                this.setState(editRecord);
                var aa=editRecord.password;

                var length=aa?aa.length:0;
                var str='';
                for(var i=0;i<length;i++){

                    str+='*';
                
                }
                this.setState({
                    password:str,
                    passwords:editRecord.password
                });
        
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
        handleCancelimg = () => this.setState({ previewVisible: false })

        handlePreview = (file) => {

            this.setState({
                previewImage: file.url || file.thumbUrl,
                previewVisible: true
            });
    
        }

        handleChange = ({ fileList }) => {

            this.setState({ fileList });
    
        }
        render(){

            //alert(this.state.password);
            const { previewVisible, previewImage, fileList } = this.state;
            const uploadButton = (
      <div>
        <Icon type='plus' />
        <div className='ant-upload-text'>Upload</div>
      </div>
    );


            return (<Modal title={this.props.title}
                  visible={this.props.visible}
                  width={500}
                  onCancel={this.handleCancel}
                  // key={this.props.editRecord.id}
                  footer={null}
                  maskClosable={false}

                >
<div className='formboxs'>
                <div className='selectboxs' style={{marginButtom:'15px'}}><p className='formP' style={{'display':'inline-block','width':'106px'}}><span style={{'color':'red','fontSize':'13px'}}>* </span>所属单位：</p>
                <Select style={{width:273,height:40}} value={this.state.companyId}  onChange={(value)=>   {

                    this.setState({
                        companyId:value
                    });
                
                }} size='large'dropdownMatchSelectWidth>
{this.fn()}
                </Select><br/><span className='formspan' ref='companyIdspan'></span>
      </div>
                <div className='formsa'><p className='formP' style={{'display':'inline-block','width':'106px'}}><span>* </span>所属部门：</p><input type='text' ref='name' value={this.state.departmentId}  onChange={(e)=>{

                    var ev=e||window.event;
                    this.setState({ departmentId:ev.target.value});
                
                }}/><br/><span className='formspan' ref='departmentIdspan'></span></div>
                <div className='formsa'><p className='formP' style={{'display':'inline-block','width':'106px'}}><span>* </span>工号：</p><input type='text' ref='name' value={this.state.jobNumber}  onChange={(e)=>{

                    var ev=e||window.event;
                    this.setState({ jobNumber:ev.target.value});
                
                }}/><br/><span className='formspan' ref='jobNumberspan'></span></div>
                <div className='formsa'><p className='formP' style={{'display':'inline-block','width':'106px'}}><span>* </span>职位：</p><input ref='ip' type='text' onChange={(e)=>{

                    var ev=e||window.event;
                    this.setState({ position:ev.target.value});
                
                }} value={this.state.position} /><br/><span className='formspan' ref='positionspan'></span></div>
                <div className='formsa'><p className='formP' style={{'display':'inline-block','width':'106px'}}><span>* </span>登录名：</p><input type='text' ref='port' value={this.state.userName} onChange={(e)=>{

                    var ev=e||window.event;

                    this.setState({ userName:ev.target.value});

                }}/><br/> <span className='formspan' ref='userNamespan'></span></div>
                <div className='formsa'><p className='formP' style={{'display':'inline-block','width':'106px'}}><span>* </span>密码：</p><input type='text' ref='port' value={this.state.password} onChange={(e)=>{

                    var ev=e||window.event;
                    var length=ev.target.value.length;
                    var str='';
                    for(var i=0;i<length;i++){

                        str+='*';
                    
                    }
                    
                    this.setState({ password:str,
                        passwords:ev.target.value});

                }}/><br/> <span className='formspan' ref='passwordspan'></span></div>
                <div className='formsa'><p className='formP' style={{'display':'inline-block','width':'106px'}}><span>* </span>姓名：</p><input type='text' ref='port' value={this.state.nickName} onChange={(e)=>{

                    var ev=e||window.event;
                    
                    this.setState({ nickName:ev.target.value});

                }}/><br/> <span className='formspan' ref='nickNamespan'></span></div>
                <div className='formsa'><p className='formP' style={{'display':'inline-block','width':'106px'}}><span>* </span>电话：</p><input type='text' ref='port' value={this.state.userPhoneNo} onChange={(e)=>{

                    var ev=e||window.event;

                    this.setState({ userPhoneNo:ev.target.value});

                }}/><br/> <span className='formspan' ref='userPhoneNospan'></span></div>
                <div className='formsa'><p className='formP' style={{'display':'inline-block','width':'106px'}}><span>* </span>邮箱：</p><input type='text' ref='port' value={this.state.emailAddress} onChange={(e)=>{

                    var ev=e||window.event;

                    this.setState({ emailAddress:ev.target.value});

                }}/><br/> <span className='formspan' ref='emailAddressspan'></span></div>
                <div className='selectboxs'>
<p className='formP' style={{'display':'inline-block','width':'106px','fontSize':'16px','float':'left'}}><span style={{'color':'red'}}>* </span>照片：</p>
        <div className='clearfix' style={{'width':'100px','height':'100px','float':'left'}}>
        <Upload
        action='http//jsonplaceholder.typicode.com/posts/'
          listType='picture-card'
          fileList={fileList}
          onPreview={this.handlePreview}
          onChange={this.handleChange}
        >
          {fileList.length >= 1 ? null : uploadButton}
        </Upload>
        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancelimg}>
          <img alt='example' style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </div>
      <div className='clear'></div>
      <span className='formspan' ref='imgspan' style={{'color':'red'}}></span>
      </div>
                <div className='selectboxs' style={{marginButtom:'15px'}}><p className='formP' style={{'display':'inline-block','width':'106px'}}><span style={{'color':'red','fontSize':'13px'}}>* </span>是否可登录：</p>
                <Select style={{width:273,height:40}} value={this.state.nologin}  onChange={(value)=>   {

                    this.setState({
                        nologin:value
                    });

                }} size='large'dropdownMatchSelectWidth>
                <Option value='true' title='是' >是</Option>
                <Option value='false' title='否' >否</Option>
                </Select><br/><span className='formspan' ref='companyIdspan'></span>
      </div>
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
        return bindActionCreators({addUser,editUser}, dispatch);

    };
    export default connect (state2props,dispatch2props)(FUserForm);