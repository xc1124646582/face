import React, { Component } from 'react';
import ReactDom from 'react-dom';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col } from 'antd';
import { Table,Input ,Button ,Modal,Popconfirm,TreeSelect,Select,Checkbox  } from 'antd';
import {initStatus} from '../../action';
import '../../../public/style/app.css';
const TreeNode = TreeSelect.TreeNode;
const Option = Select.Option;

class FStatus extends Component{
    //初始化
    constructor (props, context)  {

        super(props, context);
        
        this.state = {
            identification:true,
            analysis:true,
            netcamera:true,
            searchkey:'',
            serns:true,
            canos:'analysis,identification,netcamera',
            obj:[
                {   id:1,
                    name:'设备名称',
                    type:'设备类型',
                    IP:'IP',
                    status:'状态'
                }
            ]
        };
 
    }
//初始化数据
    componentDidMount=()=>{

        var str='analysis,identification,netcamera';
        this.props.initStatus(str,0,'');
    
    }

    getColumns = () =>{

        const columns = [{
            title: '序号',
            dataIndex: 'idx',
            render:(text,recode,index) => {

                return index+1;
            
            }
        },{
            title: '类型',
            dataIndex: 'type'
        },{
            title: '名称',
            dataIndex: 'name'
        },{
            title: '编码',
            dataIndex: 'number'
        },{
            title: 'IP',
            dataIndex: 'host'
        },{
            title: '状态',
            dataIndex: 'status'
        }];
        return columns ;

    }
//点击刷新
    refresh=()=>{

        var arr=[];
        if(this.state.identification)
            {

            arr.push('identification');

        }
        if(this.state.analysis)
            {

            arr.push('analysis');

        }
        if(this.state.netcamera)
            {

            arr.push('netcamera');

        }
        var str=arr.join(',');
        this.setState({
            canos:str
        });
        this.props.initStatus(str,0,this.state.searchkey);
        //console.log(this.state.areaCamera,this.state.deviceCamera,this.state.server);
    
    }
    


    render(){

        return (
            <div>
            <div className='checkform' style={{'marginTop':'15px','marginBottom':'15px','fontSize':'17px'}}>
            <Checkbox checked={this.state.identification} onChange={()=>{

                this.setState({
                    identification:!this.state.identification,
                    serns:false
                });
            
            }}>识别服务器</Checkbox>
            <Checkbox checked={this.state.analysis} onChange={()=>{

                this.setState({
                    analysis:!this.state.analysis,
                    serns:false
                });
            
            }}>分析服务器</Checkbox>
            <Checkbox checked={this.state.netcamera} onChange={()=>{

                this.setState({
                    netcamera:!this.state.netcamera,
                    serns:false
                });
            
            }}>网络摄像头</Checkbox>
            <input className='searchkey' placeholder='名称/编码/状态' value={this.state.searchkey} type='text' onChange={(e)=>{

                var ev=e||window.event;
                this.setState({ searchkey:ev.target.value});
                
            }}/><Button type='primary' style={{'margin':'10px'}} onClick={this.refresh}>刷新</Button>
            </div>
                <Table pagination={{'current':this.props.status.page+1,'total':this.props.status.total,'pageSize':this.props.status.pager,'onChange':(page)=>{

                    this.props.initStatus(this.state.canos,page-1,this.state.searchkey);
                          
                }}} bordered rowKey={(record)=> record.id }  columns={this.getColumns()}  dataSource={this.props.status.data}/>
            </div>
           
        );
    
    }
}

const state2props = (state = {},ownProps)  =>{

    const status = state.device.status;
    const server = state.device.server;
    // 获取数据
    return Object.assign({},{status,server},ownProps) ;

};

const dispatch2props =(dispatch) => {

    // 获取方法
    return bindActionCreators({initStatus}, dispatch);

};
export default connect (state2props,dispatch2props)(FStatus);

