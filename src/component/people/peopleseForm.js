import React, { Component } from 'react';
import ReactDom from 'react-dom';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col ,Input ,Modal,Form  ,Icon,Button,DatePicker,MonthPicker,RangePicker,TimePicker,PriceInput} from 'antd';
import { Tooltip, Cascader, Checkbox, AutoComplete ,Select ,TreeSelect} from 'antd';
import {addPeoplese,editPeoplese} from '../../action';
import '../../../public/style/style.css';
const FormItem = Form.Item;
const Option = Select.Option;
const SHOW_PARENT = TreeSelect.SHOW_PARENT;
const TreeNode = TreeSelect.TreeNode;

class FpeopleseForm extends Component{
   //初始化
    constructor (props, context)  {

        super(props, context);
        
        this.state = {
            name:'',
            code:'',
            tel:'',
            email:'',
            company:'',
            department:''


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
        if(!this.state.code){

            this.refs.warncodespan.innerHTML='警号不能为空';
            boles=false;
        
        }else{

            this.refs.warncodespan.innerHTML='';
        
        }
        if(!this.state.tel){

            this.refs.contactspan.innerHTML='联系方式不能为空';
            boles=false;
        
        }else{

            this.refs.contactspan.innerHTML='';
        
        }
        if(!this.state.email){

            console.log(this.props.editRecord);
            this.refs.emailspan.innerHTML='电子邮箱不能为空';
            boles=false;
        
        }else{

            this.refs.emailspan.innerHTML='';
        
        }
        if(!this.state.company){

            this.refs.companyIdspan.innerHTML='所属单位不能为空';
            boles=false;
        
        }else{

            this.refs.companyIdspan.innerHTML='';
        
        }
        if(!this.state.department){

            this.refs.departmentIdspan.innerHTML='所属部门不能为空';
            boles=false;
        
        }else{

            this.refs.departmentIdspan.innerHTML='';
        
        }

        if(boles){

            if(this.props.title=='新增处警人'){

                var obj={
                    id:Math.ceil(Math.random()*9+1),
                    name:this.state.name,
                    code:this.state.code,
                    tel:this.state.tel,
                    email:this.state.email,
                    company:this.state.company,
                    department:this.state.department

                };
                this.props.addPeoplese(obj);
                this.handleCancel();
          
            }else if(this.props.title=='编辑处警人'){

                var obj={
                    id:this.props.editRecord.id,
                    name:this.state.name,
                    code:this.state.code,
                    tel:this.state.tel,
                    email:this.state.email,
                    company:this.state.company,
                    department:this.state.department

                };
                console.log(obj);
                this.props.editPeoplese(obj);
                this.handleCancel();
        
            }
        
        }
    
    }

    Cancelvalue=()=>{

        this.refs.namespan.innerHTML='';
        this.refs.warncodespan.innerHTML='';
        this.refs.contactspan.innerHTML='';
        this.refs.emailspan.innerHTML='';
        this.refs.companyIdspan.innerHTML='';
        this.refs.departmentIdspan.innerHTML='';
    
    }
    //取消 清空 新增 | 编辑  
    handleCancel = () => {

        console.log(this.state.name);
        this.props.cancel();
        this.Cancelvalue();
        this.setState({ name:'',code:'',tel:'',email:'',company:'',department:''});
        //if(this.props.title=='新增区域'){

            //this.handleReset();
        
        //}
    
    }
     // 重置
    handleReset=()=>{

        
        this.refs.ip.value='';
        this.refs.port.value='';
        this.refs.name.value='';
        this.refs.username.value='';
        this.setState({ status:''});
        this.refs.password.value='';
    
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
                <div className='formsa'><p className='formP' style={{'display':'inline-block','width':'98px'}}><span>* </span>姓名：</p><input type='text' ref='name' value={this.state.name}  onChange={(e)=>{

                    var ev=e||window.event;
                    this.setState({ name:ev.target.value});
                
                }}/><br/><span className='formspan' ref='namespan'></span></div>
                <div className='formsa'><p className='formP' style={{'display':'inline-block','width':'98px'}}><span>* </span>警号：</p><input type='text' ref='name' value={this.state.code}  onChange={(e)=>{

                    var ev=e||window.event;
                    this.setState({ code:ev.target.value});
                
                }}/><br/><span className='formspan' ref='warncodespan'></span></div>
                <div className='formsa'><p className='formP' style={{'display':'inline-block','width':'98px'}}><span>* </span>联系方式：</p><input type='text' ref='name' value={this.state.tel}  onChange={(e)=>{

                    var ev=e||window.event;
                    this.setState({ tel:ev.target.value});
                
                }}/><br/><span className='formspan' ref='contactspan'></span></div>
                <div className='formsa'><p className='formP' style={{'display':'inline-block','width':'98px'}}><span>* </span>电子邮箱：</p><input type='text' ref='name' value={this.state.email}  onChange={(e)=>{

                    var ev=e||window.event;
                    this.setState({ email:ev.target.value});
                
                }}/><br/><span className='formspan' ref='emailspan'></span></div>
                <div className='selectboxs' style={{marginButtom:'25px'}}><p className='formP' style={{'display':'inline-block','width':'98px'}}><span style={{color:'red'}}>* </span>所属单位：</p>
                <Select style={{width:273,height:30}} value={this.state.company}  onChange={(value)=>   {

                    this.setState({ company:value});
                
                }} size='large' dropdownMatchSelectWidth>
                                  <Option value='运行'>运行</Option>
                                  <Option value='停止'>停止</Option>
                </Select><br/><span className='formspan' ref='companyIdspan'></span>
      </div>
      <div className='selectboxs' style={{marginButtom:'25px'}}><p className='formP' style={{'display':'inline-block','width':'98px'}}><span style={{color:'red'}}>* </span>所属部门：</p>
                <Select style={{width:273,height:30}} value={this.state.department}  onChange={(value)=>   {

                    this.setState({ department:value});
                
                }} size='large' dropdownMatchSelectWidth>
                                  <Option value='运行'>运行</Option>
                                  <Option value='停止'>停止</Option>
                </Select><br/><span className='formspan' ref='departmentIdspan'></span>
      </div>
      <div className='formsa'><button onClick={this.handleCancel}>取消</button>
                   <button onClick={this.submitfn}>保存</button>
                </div>
                </div>
             </Modal>);
  
    }
}
FpeopleseForm = Form.create({})(FpeopleseForm);
const state2props = (state = {},ownProps)  =>{

    // 获取数据
    return Object.assign({},{},ownProps) ;

};

const dispatch2props =(dispatch) => {

    // 获取方法
    return bindActionCreators({addPeoplese,editPeoplese}, dispatch);

};
export default connect (state2props,dispatch2props)(FpeopleseForm);