import React, { Component } from 'react';
import ReactDom from 'react-dom';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col ,Input ,Modal,Form  ,Icon,Button,DatePicker,MonthPicker,RangePicker,TimePicker,PriceInput,Select,TreeSelect ,message,Upload} from 'antd';
import {editWarning,addWarning} from '../../action';
import '../../../public/style/style.css';
import moment from 'moment';
const FormItem = Form.Item;
const Option = Select.Option;
const SHOW_PARENT = TreeSelect.SHOW_PARENT;
const TreeNode = TreeSelect.TreeNode;

class FPoliceForm extends Component{
   //初始化
    constructor (props, context)  {

        super(props, context);
        
        this.state = {
            name:'',
            setup:[],
            peoplese:'',
            equipment:[]

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
        if(this.state.setup==undefined||this.state.setup.length==0){

            this.refs.setupspan.innerHTML='设备不能为空';
            boles=false;
        
        }else{

            this.refs.setupspan.innerHTML='';
        
        }
        if(!this.state.statedate||!this.state.statetime){

            this.refs.statetimespan.innerHTML='开始时间不能为空';
            boles=false;
        
        }else{

            this.refs.statetimespan.innerHTML='';
        
        }
        if(!this.state.enddate||!this.state.endtime){

            this.refs.endtimespan.innerHTML='结束时间不能为空';
            boles=false;
        
        }else{

            this.refs.endtimespan.innerHTML='';
        
        }
        if(!this.state.peoplese){

           
            this.refs.peoplesespan.innerHTML='处警人不能为空';
            boles=false;
        
        }else{

            this.refs.peoplesespan.innerHTML='';
        
        }
        if(this.state.equipment==undefined||this.state.equipment.length==0){

            this.refs.equipmentspan.innerHTML='设备不能为空';
            boles=false;
        
        }else{

            this.refs.equipmentspan.innerHTML='';
        
        }
        if(boles){

            if(this.props.title=='新增底库布控'){

                var obj={
                    id:Math.ceil(Math.random()*9+1),
                    setup:this.state.setup,
                    name:this.state.name,
                    statetime:this.state.statedate+'/'+this.state.statetime,
                    endtime:this.state.enddate+'/'+this.state.endtime,
                    peoplese:this.state.peoplese,
                    equipment:this.state.equipment

                };
                this.props.addWarning(obj);
                this.handleCancel();
          
            }else if(this.props.title=='编辑底库布控'){

                var obj={
                    id:this.props.editRecord.id,
                    name:this.state.name,
                    setup:this.state.setup,
                    statetime:this.state.statedate+'/'+this.state.statetime,
                    endtime:this.state.enddate+'/'+this.state.endtime,
                    peoplese:this.state.peoplese,
                    equipment:this.state.equipment

                };
                console.log(obj);
                this.props.editWarning(obj);
                this.handleCancel();
        
            }
        
        }
    
    }

    //取消 清空 新增 | 编辑
    handleCancel = () => {

        this.props.cancel();
        this.setState({ name:'',setup:[],statedate:'',statetime:'',enddate:'',endtime:'',peoplese:'',equipment:[]});
        this.handleReset();
    
    }

     // 重置
    handleReset=()=>{

        
        this.refs.namespan.innerHTML='';
        this.refs.setupspan.innerHTML='';
        this.refs.statetimespan.innerHTML='';
        this.refs.endtimespan.innerHTML='';
        this.refs.peoplesespan.innerHTML='';
        this.refs.equipmentspan.innerHTML='';
    
    }
    componentWillReceiveProps=(nextProps)=>{

        

        const editRecord = nextProps.editRecord;
        console.log(editRecord);
        if(editRecord){

            console.log(editRecord.statetime.split('/'));
            this.setState(editRecord);
            var state=editRecord.statetime.split('/');
            var end=editRecord.endtime.split('/');
            this.setState({
                name:editRecord.name,
                setup:editRecord.setup,
                peoplese:editRecord.peoplese,
                equipment:editRecord.equipment,
                statedate:state[0],
                statetime:state[1],
                enddate:end[0],
                endtime:end[1]
            });
        
        }

    
    }
    fn=()=>{

        var data=this.props.serverall.data;
        let treeData = [];
        for(let i=0;i<data.length;i++){

            if(data[i].companyId==this.state.companyName){

                console.log(data[i].companyId);
                treeData.push(<TreeNode key={data[i].id} value={data[i].name}  title={data[i].name}></TreeNode>);
            
            }

            
        }
        return treeData;
    
    }

    setupfn=()=>{

        var data=this.props.setup.data;
        let treeData = [];
        for(let i=0;i<data.length;i++){

            console.log(data[i].companyId);
            treeData.push(<TreeNode key={data[i].id} value={data[i].name}  title={data[i].name}></TreeNode>);
            

            
        }
        return treeData;
    
    }

    people=()=>{

        var aa=this.props.people.data;
        let treeData = [];
        for(let i=0;i<aa.length;i++){

            treeData.push(<Option key={aa[i].id} value={aa[i].name} title={aa[i].name}>{aa[i].name}</Option>);

            
        }
        return treeData;
    
    }
 
    render(){

        var statedate=this.state.statedate?moment(this.state.statedate):null;
        var statetime=this.state.statetime?moment(this.state.statetime,'HH'):null;
        var enddate=this.state.enddate?moment(this.state.enddate):null;
        var endtime=this.state.endtime?moment(this.state.endtime,'HH'):null;

        const props = {
            name: 'file',
            action: '//jsonplaceholder.typicode.com/posts/',
            headers: {
                authorization: 'authorization-text'
            },
            onChange(info) {

                console.log(info);
                if (info.file.status !== 'uploading') {

                    console.log(info.file, info.fileList);
    
                }
                if (info.file.status === 'done') {

                    message.success(`${info.file.name} file uploaded successfully`);
                    this.setState({ img:true});
    
                } else if (info.file.status === 'error') {

                    message.error(`${info.file.name} file upload failed.`);
    
                }
  
            }
        };
        const format = 'HH';

        return (<Modal title={this.props.title}
                  visible={this.props.visible}
                  width={500}
                  onCancel={this.handleCancel}
                  // key={this.props.editRecord.id}
                  footer={null}
                  maskClosable={false}

                >

                 <div className='formboxs'>
<div className='formsa'><p className='formP' style={{'display':'inline-block','width':'98px'}}><span>* </span>名称：</p><input type='text' ref='name' value={this.state.name}  onChange={(e)=>{

    var ev=e||window.event;
    this.setState({ name:ev.target.value});
                
}}/><br/><span className='formspan' ref='namespan'></span></div>

<div className='selectboxs'><p className='formP' style={{'display':'inline-block','width':'98px'}}><span style={{color:'red'}}>* </span>底库：</p><TreeSelect
        showSearch
        style={{ width: 273 }}
        value={this.state.setup}
        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
        placeholder='Please select'
        allowClear
        multiple
        treeDefaultExpandAll
        onChange={(value,label) => {

            console.log('value',value,label);
            const Value=[];
            var bb=[];
            for(let i=0;i<label.length;i++){

                Value.push({id:value[i],name:label[i]});
                bb.push(label[i]);
                                    
            }
            //console.log('Value',Value,aa);
            this.setState({setup:bb});
                                 
        }}
      >
        {this.setupfn()}
      </TreeSelect><br/><span className='formspan' ref='setupspan'></span></div>
       <div className='formsa inputtime'><p className='formP' style={{'display':'inline-block','width':'98px'}}><span>* </span>开始时间：</p>
      <DatePicker allowClear='false' value={statedate}   onChange={(value,label) => {

          this.setState({statedate:label});
      
      }}  />&nbsp;&nbsp;&nbsp;&nbsp; <TimePicker format={format} value={statetime} onChange={(value,label) => {

          this.setState({statetime:label});

      }} />
      <br/><span className='formspan' ref='statetimespan'></span></div>
      <div className='formsa inputtime'><p className='formP' style={{'display':'inline-block','width':'98px'}}><span>* </span>结束时间：</p>
      <DatePicker value={enddate} onChange={(value,label) => {

          this.setState({enddate:label});

      }} />&nbsp;&nbsp;&nbsp;&nbsp; <TimePicker value={endtime} format={format}  onChange={(value,label) => {

          this.setState({endtime:label});

      }} />
      <br/><span className='formspan' ref='endtimespan'></span></div>
      <div className='selectboxs' style={{marginButtom:'25px'}}><p className='formP' style={{'display':'inline-block','width':'98px'}}><span style={{color:'red'}}>* </span>处警人：</p>
                <Select style={{width:273,height:30}} value={this.state.peoplese}  onChange={(value)=>   {

                    this.setState({ peoplese:value});
                
                }} size='large' dropdownMatchSelectWidth>
                {this.people()}
                </Select><br/><span className='formspan' ref='peoplesespan'></span>
      </div>
      <div className='selectboxs'><p className='formP' style={{'display':'inline-block','width':'98px'}}><span style={{color:'red'}}>* </span>设备：</p><TreeSelect
        showSearch
        style={{ width: 273 }}
        value={this.state.equipment}
        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
        placeholder='Please select'
        allowClear
        multiple
        treeDefaultExpandAll
        onChange={(value,label) => {

            console.log('value',value,label);
            const Value=[];
            var bb=[];
            for(let i=0;i<label.length;i++){

                Value.push({id:value[i],name:label[i]});
                bb.push(label[i]);
                                    
            }
            //console.log('Value',Value,aa);
            this.setState({equipment:bb});
                                 
        }}
      >
        {this.fn()}
      </TreeSelect><br/><span className='formspan' ref='equipmentspan'></span></div>
      <div className='formsa'><button onClick={this.handleCancel}>取消</button>
                   <button onClick={this.submitfn}>保存</button>
                </div>
                </div>

                
             </Modal>);
  
    }
}
FPoliceForm = Form.create({})(FPoliceForm);
const state2props = (state = {},ownProps)  =>{

    const server = state.device.server;
    const setup = state.deploy.setup;
    const people = state.people.peoplese;
    const serverall = state.device.serverall;
    // 获取数据
    return Object.assign({},{server,setup,people,serverall},ownProps) ;

};

const dispatch2props =(dispatch) => {

    // 获取方法
    return bindActionCreators({addWarning,editWarning}, dispatch);

};
export default connect (state2props,dispatch2props)(FPoliceForm);