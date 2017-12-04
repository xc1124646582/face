import React, { Component } from 'react';
import ReactDom from 'react-dom';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col } from 'antd';
import { Table,Input ,Button ,Modal,Popconfirm,TreeSelect,Select } from 'antd';
import {removeServer,ServerStatus,selectServer,initServer} from '../../action';
import FnetcameraForm from './FnetcameraForm';
import '../../../public/style/app.css';
const TreeNode = TreeSelect.TreeNode;
const Option = Select.Option;

class Fnetcamera extends Component{
    //初始化
    constructor (props, context)  {

        super(props, context);
        
        this.state = {
            add:false,
            edit:false,
            searchkey:'',
            query:''

        };
 
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
            title: '类型',
            dataIndex: 'type'
        },{
            title: '编码',
            dataIndex: 'number'
        },{
            title: 'IP',
            dataIndex: 'host'
        },{
            title: '端口',
            dataIndex: 'prot'
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
            title: 'rtspUrl',
            dataIndex: 'rtspUrl'
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

                              this.serverStatus(record);
                          
                          }}>{record.status=='停用'?'启用':'停用'}</Button>
                      </Col>
                     </Row>
        }];
        return columns ;

    }
    //修改状态
    serverStatus=(id)=>{

        this.props.ServerStatus(id);
    
    }

    // 删除
    handleRemove = (id) => {
        
        this.props.removeServer(id);
       
    
    }
    //查询
    searchfn=()=>{

        this.props.selectServer(this.state.searchkey);
        this.setState({
            query:this.state.searchkey
        });
    
    }


    render(){

        var page=this.props.server.page;
        if(this.props.server.data.length==0&&page!=0){

            this.props.initServer(page-1,this.state.searchkey);
        
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


                <FnetcameraForm title='新增网络摄像头' editRecord={{}}  visible={this.state.add} ok={this.handleAdd}  cancel={()=> this.setState({add:false})}></FnetcameraForm>
                <FnetcameraForm title='编辑网络摄像头' editRecord={this.state.editRecord} visible={this.state.edit} ok={this.handleEdit} cancel={()=> this.setState({edit:false})}></FnetcameraForm>
                <Table pagination={{'current':this.props.server.page+1,'total':this.props.server.total,'pageSize':this.props.server.pager,'onChange':(page)=>{

                    this.props.initServer(page-1,this.state.query);
                          
                }}} rowKey={(record)=> record.id }  columns={this.getColumns()} dataSource={this.props.server.data} />
            </div>
           
        );
    
    }
}

const state2props = (state = {},ownProps)  =>{

    const server = state.device.server;
    // 获取数据
    return Object.assign({},{server},ownProps) ;

};

const dispatch2props =(dispatch) => {

    // 获取方法
    return bindActionCreators({initServer,removeServer,ServerStatus,selectServer,selectServer}, dispatch);

};
export default connect (state2props,dispatch2props)(Fnetcamera);

