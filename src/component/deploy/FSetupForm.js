import React, { Component } from 'react';
import ReactDom from 'react-dom';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col ,Input ,Modal,Form  ,Icon,Button,DatePicker,MonthPicker,RangePicker,TimePicker,PriceInput,Upload} from 'antd';
import { Tooltip, Cascader, Checkbox, AutoComplete ,Select ,TreeSelect} from 'antd';
import {addSetup,editSetup,seleccompanyId} from '../../action';
import '../../../public/style/style.css';
const FormItem = Form.Item;
const Option = Select.Option;
const SHOW_PARENT = TreeSelect.SHOW_PARENT;
const TreeNode = TreeSelect.TreeNode;


class FSetupForm extends Component{
   //初始化
    constructor (props, context)  {

        super(props, context);
        
        this.state = {
            name:'',
            deviceCamera:'',
            companyId:'',
            departmentId:''


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
        if(!this.state.deviceCamera){

            this.refs.deviceCameraspan.innerHTML='分析服务器不能为空';
            boles=false;
        
        }else{

            this.refs.deviceCameraspan.innerHTML='';
        
        }
        if(!this.state.companyId){

            this.refs.companyIdspan.innerHTML='所属单位不能为空';
            boles=false;
        
        }else{

            this.refs.companyIdspan.innerHTML='';
        
        }
        if(!this.state.departmentId){

            console.log(this.props.editRecord);
            this.refs.departmentIdspan.innerHTML='所属部门不能为空';
            boles=false;
        
        }else{

            this.refs.departmentIdspan.innerHTML='';
        
        }

        if(boles){

            if(this.props.title=='新增布控底库'){

                var obj={
                    id:9,
                    name:this.state.name,
                    deviceCamera:this.state.deviceCamera,
                    companyId:this.state.companyId,
                    departmentId:this.state.departmentId,
                    faceNum:300

                };
                this.props.addSetup(obj);
                this.handleCancel();
          
            }else if(this.props.title=='编辑布控底库'){

                var obj={
                    id:this.props.editRecord.id,
                    name:this.state.name,
                    deviceCamera:this.state.deviceCamera,
                    companyId:this.state.companyId,
                    departmentId:this.state.departmentId,
                    faceNum:300

                };
                console.log(obj);
                this.props.editSetup(obj);
                this.handleCancel();
        
            }
        
        }
    
    }

    //取消 清空 新增 | 编辑  
    handleCancel = () => {

        this.props.cancel();
        this.setState({ name:'',deviceCamera:'',companyId:'',departmentId:''});
        this.handleReset();
    
    }

    // 重置
    handleReset=()=>{

        
        this.refs.namespan.innerHTML='';
        this.refs.deviceCameraspan.innerHTML='';
        this.refs.companyIdspan.innerHTML='';
        this.refs.departmentIdspan.innerHTML='';
    
    }


    componentWillReceiveProps=(nextProps)=>{

        const editRecord = nextProps.editRecord;
        if(editRecord){

            this.setState(editRecord);
        
        }
    
    }

    deviceCamerafn=()=>{

        var aa=this.props.allareacameraall.data;
        var arr=[];
        if(aa){

            for (let i = 0; i <aa.length; i++) {

                arr.push(<Option key={aa[i].id} value={aa[i].id} title={aa[i].name}>{aa[i].name}</Option>);
        
            }
        
        }
        return arr;
    
    }

    render(){

        return (




            <Modal title={this.props.title}
                  visible={this.props.visible}
                  width={500}
                  onCancel={this.handleCancel}
                  // key={this.props.editRecord.id}
                  footer={null}
                  maskClosable={false}

                >

                  <div className='formboxs'>
                <div className='formsa'><p className='formP' style={{'display':'inline-block','width':'108px'}}><span>* </span>人脸库名称：</p><input type='text' ref='name' value={this.state.name}  onChange={(e)=>{

                    var ev=e||window.event;
                    this.setState({ name:ev.target.value});
                
                }}/><br/><span className='formspan' ref='namespan'></span></div>
                <div className='selectboxs' style={{marginButtom:'25px'}}><p className='formP' style={{'display':'inline-block','width':'108px'}}><span style={{color:'red'}}>* </span>分析服务器：</p>
                <Select style={{width:273,height:30}} value={this.state.deviceCamera}  onChange={(value)=>   {

                    this.setState({ deviceCamera:value});
                
                }} size='large' dropdownMatchSelectWidth>
                  {this.deviceCamerafn()}
                </Select><br/><span className='formspan' ref='deviceCameraspan'></span>
      </div>
                <div className='selectboxs' style={{marginButtom:'25px'}}><p className='formP' style={{'display':'inline-block','width':'108px'}}><span style={{color:'red'}}>* </span>所属单位：</p>
                <Select style={{width:273,height:30}} value={this.state.companyId}  onChange={(value)=>   {

                    this.setState({ companyId:value});
                
                }} size='large' dropdownMatchSelectWidth>
                                  <Option value='运行'>运行</Option>
                                  <Option value='停止'>停止</Option>
                </Select><br/><span className='formspan' ref='companyIdspan'></span>
      </div>
      <div className='selectboxs' style={{marginButtom:'25px'}}><p className='formP' style={{'display':'inline-block','width':'108px'}}><span style={{color:'red'}}>* </span>所属部门：</p>
                <Select style={{width:273,height:30}} value={this.state.departmentId}  onChange={(value)=>   {

                    this.setState({ departmentId:value});
                
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
FSetupForm = Form.create({})(FSetupForm);
const state2props = (state = {},ownProps)  =>{

    const server = state.device.server;
    const deviceCamera = state.device.deviceCamera;
    const allareacameraall = state.device.allareacameraall;
    // 获取数据
    return Object.assign({},{server,deviceCamera,allareacameraall},ownProps) ;

};

const dispatch2props =(dispatch) => {

    // 获取方法
    return bindActionCreators({addSetup,editSetup,seleccompanyId}, dispatch);

};
export default connect (state2props,dispatch2props)(FSetupForm);