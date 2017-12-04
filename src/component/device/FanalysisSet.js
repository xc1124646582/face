import React, { Component } from 'react';
import ReactDom from 'react-dom';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col ,Input ,Modal,Form  ,Icon,Button,DatePicker,MonthPicker,RangePicker,TimePicker,PriceInput,Select,TreeSelect } from 'antd';
import {addDeviceCamera,editDeviceCamera,selectDepartment,DeviceCameraSet} from '../../action';
import '../../../public/style/style.css';
const FormItem = Form.Item;
const Option = Select.Option;
const SHOW_PARENT = TreeSelect.SHOW_PARENT;


class FanalysisSet extends Component{
   //初始化
    constructor (props, context)  {

        super(props, context);
        
        this.state = {
            channelCount:'',
            arr:[],
            obj:[]
        };
    
    }

    // 提交表单
    submitfn = (e) => {

        var arr=this.state.arr;
        // //var selectmain=document.getElementById('selectmain');
        // var selects=document.getElementsByClassName('selectClass');
        var selects=this.state.obj;
        for(var i=0;i<selects.length;i++){

            arr[i].netCameraId=selects[i];
        
        }
        var value={'id':this.state.id,
            'arr':arr};
        //console.log(arr);
        this.props.DeviceCameraSet(value);
        this.handleCancel();
    
    }

//取消 清空 新增 | 编辑  
    handleCancel = () => {


        this.props.cancel();
        //var editRecord={};
    
    }
    componentWillReceiveProps=(nextProps)=>{

        const editRecord = nextProps.editRecord;
        if(nextProps.visible){

            var aa=[];
            for(var i in editRecord.channels){

                aa.push(editRecord.channels[i].netCameraId);
            
            }
            this.setState({
                arr:editRecord.channels?editRecord.channels:[],
                obj:aa,
                id:editRecord.id
            });
        
        }

    
    }


    getSetList=() =>{

        var list=this.state.arr;
        const result = [] ;
        for(let i in list){


            result.push(<div key={list[i].id} className='selectboxs' style={{'marginButtom':'25px','lineHeight': '30px','fontSize':'13px'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{color:'red'}}>* </span>{list[i].name}：
                <select className='selectClass' style={{width:273,height:30}} defaultValue={list[i].netCameraId?list[i].netCameraId:-1} >
                {this.optionfn()}
                <option value={-1} title='未配置' >未配置</option>
                </select><br/><span className='formspan' ref='statusspan'></span>
            </div>);
        
        }

        return    result;             
    
    }

    // getSelectedOptions(selectedId){

    //     var aa=this.props.server?this.props.server.data:[];
    //     var arr=[];
    //     for (let i = 0; i <aa.length; i++) {

    //         if(i.id == selectedId){

    //             arr.push(<Option key={aa[i].id} value={aa[i].name} title={aa[i].name} >{aa[i].name}</Option>);
             
    //         }else{

    //             arr.push(<Option key={aa[i].id} value={aa[i].name} title={aa[i].name}>{aa[i].name}</Option>);
            
    //         }
           
        
    //     }

    // }

    optionfn=()=>{

        var aa=this.props.server?this.props.server.data:[];
        //console.log(aa);
        var arr=[];
        for (let i = 0; i <aa.length; i++) {


            arr.push(<option style={{'height':'30px','color':'red','width':'40pz'}} key={aa[i].id} value={aa[i].id} title={aa[i].name} >{aa[i].name}</option>);
           
        
        }
        return arr;
    
    }

    render(){

        //console.log(this.props.serverall);
        //console.log('this.state.arr',this.state.arr);


        return (<Modal title={this.props.title}
                  visible={this.props.visible}
                  width={500}
                  onCancel={this.handleCancel}
                  // key={this.props.editRecord.id}
                  footer={null}
                  maskClosable={false}
                >
                {this.state.arr.map((text,i)=>{

                    return <div key={i} className='selectboxs' style={{marginButtom:'25px'}}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{color:'red'}}>* </span>{text.name}：
                <Select style={{width:273,height:40}} value={this.state.obj[i]?this.state.obj[i]:'-1'}  onChange={(value)=>   {

                    var aa=this.state.obj;
                    aa[i]=value;
                    this.setState({
                        obj:aa
                    });
                
                }} size='large'dropdownMatchSelectWidth>
                {(this.props.serverall?this.props.serverall.data:[]).map(function(mains,is){

                    return <Option key={i*is} value={mains.id} title={mains.name} >{mains.name}</Option>;
                
                })}
                <Option value={'-1'} title='未配置' >未配置</Option>
                </Select><br/><span className='formspan' ref='statusspan'></span>
            </div>;
                
                })}
                {/*<div id='selectmain'>
                {this.getSetList()}
                </div>*/}


                {/*this.state.arr.map((main,i,inds)=>{

                    return <div key={i} className='selectboxs' style={{marginButtom:'25px'}}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{color:'red'}}>* </span>{main.name}：
                <Select style={{width:273,height:40}} value={main.netCameraId?main.netCameraId:-1}  onChange={(value)=>   {

                    this.state.arr[i].netCameraId=value;
                    this.setState({ arr:this.state.arr});
                
                }} size='large'dropdownMatchSelectWidth>
                {(this.props.server?this.props.server.data:[]).map(function(mains,is){

                    return <Option key={i*is} value={mains.id} title={mains.name} >{mains.name}</Option>;
                
                })}
                <Option value={-1} title='未配置' >未配置</Option>
                </Select><br/><span className='formspan' ref='statusspan'></span>
            </div>;
                
                })*/}


 




                {/*this.state.arr.map((main,i,inds)=>{
                    return <div key={i} className='selectboxs' style={{marginButtom:'25px'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{color:'red'}}>* </span>{main.name}：
                <Select style={{width:273,height:40}}  value={main.netCameraId?main.netCameraId:-1} onChange={(value)=>   {

                    this.state.arr[i].netCameraId=value;
                    this.setState({ arr:this.state.arr});
                
                }} size='large'dropdownMatchSelectWidth>
                {(this.props.server?this.props.server.data:[]).map(function(mains,is){

                    return <Option key={i*is} value={mains.id} title={mains.name} >{mains.name}</Option>;
                
                })}
                <Option value={-1} title='未配置' >未配置</Option>
                </Select><br/><span className='formspan' ref='statusspan'></span>
            </div>;
                
                })*/}
<div className='formsa'><button onClick={this.handleCancel}>取消</button>
                   <button onClick={this.submitfn}>保存</button>
                </div>
                
             </Modal>);
  
    }
}
FanalysisSet = Form.create({})(FanalysisSet);
const state2props = (state = {},ownProps)  =>{

    const server = state.device.server;
    const serverall = state.device.serverall;
    // 获取数据
    return Object.assign({},{server,serverall},ownProps) ;

};

const dispatch2props =(dispatch) => {

    // 获取方法
    return bindActionCreators({addDeviceCamera,editDeviceCamera,selectDepartment,DeviceCameraSet}, dispatch);

};
export default connect (state2props,dispatch2props)(FanalysisSet);