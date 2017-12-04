import React, { Component } from 'react';
import ReactDom from 'react-dom';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col } from 'antd';
import { Table,Input ,Button ,Modal,Popconfirm,Select,TreeSelect  } from 'antd';
import {removeDeviceCamera,DeviceCameraStatus,selectDeviceCamera,initDeviceCamera,initServerall} from '../../action';
import FanalysisForm from './FanalysisForm';
import FanalysisSet from './FanalysisSet';
import '../../../public/style/app.css';


class Fanalysis extends Component{
    //初始化
    constructor (props, context)  {

        super(props, context);
        
        this.state = {
            editRecord:{},
            Channel:null,
            add:false,
            edit:false,
            sets:false,
            current:0,
            searchkey:'',
            query:''

        };
 
    }

    componentDidMount=()=>{

        this.props.initServerall();
    
    }


    getColumns = () =>{

        const columns = [{
            title: '序号',
            dataIndex: 'idx',
            render:(text,recode,index) => {

                return index+1;
            
            }
        }, {
            title: '名称',
            dataIndex: 'name'
        }, {
            title: '机器编码',
            dataIndex: 'number'
        },{
            title: 'IP',
            dataIndex: 'host'
        },{
            title: '服务器端口',
            dataIndex: 'sshPort'
        },{
            title: '状态',
            dataIndex: 'status'
        },{
            title: '服务器账号',
            dataIndex: 'username'
        },{
            title: '服务器密码',
            dataIndex: 'password'
        },{
            title: '通道',
            dataIndex: 'channelCount',
            render: (text, record) => <a onClick={()=>{

                this.setState({sets:true,Channel:record});
            
            }}>{text}</a>
        },{
            title: '已分配',
            dataIndex: 'used',
            render:(text,recode,index) => {

                console.log(recode);
                var num=0;
                for(var i=0;i<recode.channels.length;i++){

                    if(recode.channels[i].netCameraId!=null&&recode.channels[i].netCameraId!=-1){

                        num++;
                    
                    }
                
                }
                return num;
            
            }
        },{
            title: '未分配',
            dataIndex: 'unused',
            render:(text,recode,index) => {

                var num=0;
                for(var i=0;i<recode.channels.length;i++){

                    if(recode.channels[i].netCameraId==null||recode.channels[i].netCameraId==-1){

                        num++;
                    
                    }
                
                }
                return num;
            
            }
        },{
            title: '操作',
            dataIndex: 'operation',
            render: (text, record) => <Row className='operation' type='flex' align='middle' gutter={10}>
                      <Col className='gutter-row'>
                          <Button type='primary' onClick={()=> this.setState({edit:true,editRecord:record})}>编辑</Button>
                      </Col>
                      <Col className='gutter-row'>
                          <Popconfirm title='确定删除吗?' onConfirm={() => this.handleRemove(record.id)}>
                              <Button type='primary'>删除</Button>
                          </Popconfirm>
                      </Col>
                      <Col className='gutter-row'>
                          <Button type='primary' onClick={()=>{

                              this.deviceCameraStatus(record);
                          
                          }}>{record.status=='停用'?'启用':'停用'}</Button>
                      </Col>
                     </Row>
        }];
        return columns ;

    }
    //修改状态
    deviceCameraStatus=(id)=>{

        this.props.DeviceCameraStatus(id);
    
    }

    // 删除
    handleRemove = (id) => {
        
        this.props.removeDeviceCamera(id);
       
    
    }

    //查询
    searchfn=()=>{

        this.props.selectDeviceCamera(this.state.searchkey);
        this.setState({
            query:this.state.searchkey
        });
    
    }
    render(){

        var page=this.props.deviceCamera.page;
        if(this.props.deviceCamera.data.length==0&&page!=0){

            this.props.initDeviceCamera(page-1,this.state.searchkey);
        
        }

        return (

            <div style={{'paddingTop':'8px'}}>
            <input className='searchkey' placeholder='编号/名称/状态' value={this.state.searchkey} type='text' onChange={(e)=>{

                var ev=e||window.event;
                this.setState({ searchkey:ev.target.value});
                
            }}/><Button type='primary' style={{'margin':'10px'}} onClick={this.searchfn}>查询</Button>
                         <Button icon='plus-circle-o' type='primary' onClick={()=>{

                             this.setState({add: true,newKey:new Date().getTime()});
                         
                         }}>新增</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;








               
                <FanalysisForm title='新增分析服务器' editRecord={{}}  visible={this.state.add} ok={this.handleAdd}  cancel={()=> this.setState({add:false})}></FanalysisForm>
            <FanalysisForm title='编辑分析服务器' editRecord={this.state.editRecord} visible={this.state.edit} ok={this.handleEdit} cancel={()=> this.setState({edit:false})}></FanalysisForm>            
            <FanalysisSet title='通道设置' editRecord={this.state.Channel} visible={this.state.sets} ok={this.handleEdit} cancel={()=> this.setState({sets:false})}></FanalysisSet>
            <Table pagination={{'current':this.props.deviceCamera.page+1,'total':this.props.deviceCamera.total,'pageSize':this.props.deviceCamera.pager,'onChange':(page)=>{

                this.props.initDeviceCamera(page-1,this.state.query);
                          
            }}} rowKey={(record)=> record.id } columns={this.getColumns()} dataSource={this.props.deviceCamera.data} />
            </div>
           
        );
    
    }
}

const state2props = (state = {},ownProps)  =>{

    const deviceCamera = state.device.deviceCamera;
    const allou = state.system.allou;
    const allareacamera = state.device.allareacamera;
    const allserver = state.device.allserver;
    // 获取数据
    return Object.assign({},{deviceCamera,allou,allareacamera},ownProps) ;

};

const dispatch2props =(dispatch) => {

    // 获取方法
    return bindActionCreators({removeDeviceCamera,DeviceCameraStatus,selectDeviceCamera,initDeviceCamera,initServerall}, dispatch);

};
export default connect (state2props,dispatch2props)(Fanalysis);


