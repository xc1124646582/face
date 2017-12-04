import React, { Component } from 'react';
import ReactDom from 'react-dom';
import {connect} from 'react-redux';
// import moment from 'moment';
// import 'moment/locale/zh-cn';
import { bindActionCreators } from 'redux';
import { Modal,Form  ,Icon,DatePicker,TimePicker,TreeSelect,Upload } from 'antd';
import {addface,editPhotodb} from '../../action';
import '../../../public/style/style.css';
import moment from 'moment';
const TreeNode = TreeSelect.TreeNode;


class FPhotodbForm extends Component{
   //初始化
    constructor (props, context)  {

        super(props, context);
        
        this.state = {
            name:'',
            img:false,
            equipment:[],
            statedate:'',
            statetime:'',
            enddate:'',
            endtime:'',
            videolength:'',
            previewVisible: false,
            previewImage: '',
            fileList: []
        };
    
    }

         // 提交表单
    submitfn = (e) => {

        //console.log(this.state.name,this.state.equipment);
        //this.refs.datepck.value='';
        var boles=true;
        if(!this.state.name){

            this.refs.namespan.innerHTML='名称不能为空';
            boles=false;
        
        }else{

            this.refs.namespan.innerHTML='';
        
        }
        if(this.state.fileList.length==0){

            this.refs.imgspan.innerHTML='人脸不能为空';
        
        }else{

            this.refs.imgspan.innerHTML='';
        
        }
        if(this.state.equipment==undefined||this.state.equipment.length==0){

            this.refs.equipmentspan.innerHTML='设备不能为空';
            boles=false;
        
        }else{

            this.refs.equipmentspan.innerHTML='';
        
        }
        if(!this.state.statedate||!this.state.statetime){

            this.refs.statespan.innerHTML='开始时间不能为空';
            boles=false;
        
        }else{

            this.refs.statespan.innerHTML='';
        
        }
        if(!this.state.enddate||!this.state.endtime){

            this.refs.endspan.innerHTML='结束时间不能为空';
            boles=false;
        
        }else{

            this.refs.endspan.innerHTML='';
        
        }
        if(!this.state.videolength){

            this.refs.videolengthspan.innerHTML='截取时长不能为空';
            boles=false;
        
        }else{

            this.refs.videolengthspan.innerHTML='';
        
        }

        if(boles){

            var obj={
                id:3,
                name:this.state.name,
                equipment:this.state.equipment,
                state:this.state.statedate+'-'+this.state.statetime,
                end:this.state.enddate+'-'+this.state.endtimr,
                videolength:this.state.videolength

            };
            //console.log(this.state.fileList);
            this.props.addface(obj);
            this.handleCancel();
          
        
        }
    
    }

        //取消 清空 新增 | 编辑  
    handleCancel = () => {

        this.props.cancel();
        this.setState({ name:'',fileList:[],statedate:'',statetime:'',enddate:'',endtime:'',videolength:'',equipment:[]});
        this.handleReset();
    
    }

    // 重置
    handleReset=()=>{

        
        this.refs.namespan.innerHTML='';
        this.refs.statespan.innerHTML='';
        this.refs.imgspan.innerHTML='';
        this.refs.endspan.innerHTML='';
        this.refs.videolengthspan.innerHTML='';
        this.refs.equipmentspan.innerHTML='';
    
    }

    fn=()=>{

        var data=this.props.server.data;
        let treeData = [];
        for(let i=0;i<data.length;i++){

            if(data[i].companyId==this.state.companyName){

                //console.log(data[i].companyId);
                treeData.push(<TreeNode id={data[i].id} key={data[i].id} value={data[i].id}  title={data[i].name}>
                        </TreeNode>);
            
            }

            
        }
        return treeData;
    
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

        const { previewVisible, previewImage, fileList } = this.state;
        const uploadButton = (
      <div>
        <Icon type='plus' />
        <div className='ant-upload-text'>Upload</div>
      </div>
    );

        const format = 'HH';
        var statedate=this.state.statedate?moment(this.state.statedate):null;
        var statetime=this.state.statetime?moment(this.state.statetime,'HH'):null;
        var enddate=this.state.enddate?moment(this.state.enddate):null;
        var endtime=this.state.endtime?moment(this.state.endtime,'HH'):null;

        return (<Modal title={this.props.title}
                  visible={this.props.visible}
                  width={500}
                  onCancel={this.handleCancel}
                  // key={this.props.editRecord.id}
                  footer={null}
                  maskClosable={false}

                >
                <div className='formboxs'>
                <div className='formsa'>
                <p className='formP' style={{'display':'inline-block','width':'98px'}}><span>* </span>任务名称：</p>
                <input type='text' ref='name' value={this.state.name}  onChange={(e)=>{

                    var ev=e||window.event;
                    this.setState({ name:ev.target.value});
                
                }}/><br/><span className='formspan' ref='namespan'></span></div>
                <div className='selectboxs'>
<p className='formP' style={{'display':'inline-block','width':'98px','fontSize':'16px','float':'left'}}><span style={{'color':'red'}}>* </span>照片：</p>
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
                {/*<div className='formsa inputimg'>
                <p className='formP' style={{'display':'inline-block','width':'98px'}}><span style={{'color':'red'}}>* </span>人脸：</p>
                <Upload {...props}>
                    <Button>
                      选择图标
                    </Button>
                    <span>（建议尺寸：200*200）</span>
                </Upload><span className='formspan' ref='imgspan'></span></div>*/}
                <div className='selectboxs'><p className='formP' style={{'display':'inline-block','width':'98px'}}><span style={{'color':'red'}}>* </span>设备：</p>
<TreeSelect
        showSearch
        style={{ width: 273 }}
        value={this.state.equipment}
        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
        placeholder='Please select'
        allowClear
        multiple
        treeDefaultExpandAll
        onChange={(value,label) => {

            //console.log('value',value,label);
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
      <div className='formsa inputtime'><p className='formP' style={{'display':'inline-block','width':'98px'}}><span>* </span>开始时间：</p>
      <DatePicker allowClear='false' value={statedate}   onChange={(value,label) => {

          this.setState({statedate:label});
      
      }}  />&nbsp;&nbsp;&nbsp;&nbsp; <TimePicker format={format} value={statetime} onChange={(value,label) => {

          this.setState({statetime:label});

      }} />
      <br/><span className='formspan' ref='statespan'></span></div>
      <div className='formsa inputtime'><p className='formP' style={{'display':'inline-block','width':'98px'}}><span>* </span>结束时间：</p>
      <DatePicker value={enddate} onChange={(value,label) => {

          this.setState({enddate:label});

      }} />&nbsp;&nbsp;&nbsp;&nbsp; <TimePicker value={endtime} format={format}  onChange={(value,label) => {

          this.setState({endtime:label});

      }} />
      <br/><span className='formspan' ref='endspan'></span></div>
      <div className='formsa inputtime'><p className='formP' style={{'display':'inline-block','width':'98px'}}><span>* </span>视频截取：</p><input type='text' ref='name' value={this.state.videolength}  onChange={(e)=>{

          var ev=e||window.event;
          if(/\D/.test(ev.target.value)){

              ev.target.value='';

          }else{

              this.setState({ videolength:ev.target.value});
          
          }
                
      }}/>&nbsp;&nbsp;秒<br/><span className='formspan' ref='videolengthspan'></span></div>
      <div className='formsa'><button onClick={this.handleCancel}>取消</button>
                   <button onClick={this.submitfn}>保存</button>
                </div>
                </div>
             </Modal>);
  
    }
}
FPhotodbForm = Form.create({})(FPhotodbForm);
const state2props = (state = {},ownProps)  =>{

    const photodb = state.facedb.photodb;
    const server = state.device.server;
    // 获取数据
    return Object.assign({},{photodb,server},ownProps) ;

};

const dispatch2props =(dispatch) => {

    // 获取方法
    return bindActionCreators({addface,editPhotodb}, dispatch);

};
export default connect (state2props,dispatch2props)(FPhotodbForm);