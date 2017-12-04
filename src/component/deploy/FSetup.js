import React, { Component } from 'react';
import ReactDom from 'react-dom';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col } from 'antd';
import { Table,Input ,Button ,Modal,Popconfirm ,Select,TreeSelect } from 'antd';
import {removeSetup,removeSetups,selectSetup,initDeviceCameraAll} from '../../action';
import FSetupForm from './FSetupForm';
import FSetupSet from './FSetupset';
import '../../../public/style/app.css';


class FSetup extends Component{
    //初始化
    constructor (props, context)  { 

        super(props, context);
        
        this.state = {
            add:false,
            searchkey:''
        };

    }

    // 删除
    handleRemove = (id) => {
        
        this.props.removeSetup(id);
       
    
    }

    componentDidMount=()=>{

        this.props.initDeviceCameraAll();
    
    }
    //查询
    searchfn=()=>{

        alert('ooo');
    
    }


    /**
    *  获取表格列
    */
    getColumns = () =>{

        const columns = [{
            title: '序号',
            dataIndex:  'idx',
            render:(text,recode,index) => {

                return index+1;
            
            }
        },{
            title: '人脸库名称',
            dataIndex: 'name'
        }, {
            title: '所属单位',
            dataIndex: 'companyId'
        },{
            title: '所属部门',
            dataIndex: 'departmentId' 
        },{
            title: '人脸数量',
            dataIndex: 'faceNum'
        },{
            title: '操作',
            dataIndex: 'operation',
            render: (text, record) => <Row className='operation' type='flex' align='middle' gutter={10}>
                      <Col className='gutter-row'>
                          <Popconfirm title='确定删除吗?' onConfirm={() => this.handleRemove(record.id)}>
                              <Button type='primary'>删除</Button>
                          </Popconfirm>
                      </Col>
                      <Col className='gutter-row'>
                          <Button type='primary' onClick={()=> this.setState({edit:true,editRecord:record})}>编辑</Button>
                      </Col>
                      <Col className='gutter-row'>
                          <Button type='primary' onClick={()=> this.setState({set:true,editRecord:record})}>添加人脸</Button>
                      </Col>
                   
                     </Row>
        }];
        return columns ;

    }
   
      
    render(){

        console.log(this.props.allareacameraall);

        return (

            <div style={{'paddingTop':'8px'}}>
            <input className='searchkey' placeholder='编号/名称/状态' value={this.state.searchkey} type='text' onChange={(e)=>{

                var ev=e||window.event;
                this.setState({ searchkey:ev.target.value});
                
            }}/><Button type='primary' style={{'margin':'10px'}} onClick={this.searchfn}>查询</Button>
                     <Button icon='plus-circle-o' type='primary' onClick={()=>{

                         this.setState({add: true,newKey:new Date().getTime()});
                     
                     }}>新增</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


                
            <FSetupForm title='新增布控底库' editRecord={{}}  visible={this.state.add} ok={this.handleAdd}  cancel={()=> this.setState({add:false})}></FSetupForm>
            <FSetupForm title='编辑布控底库' editRecord={this.state.editRecord}  visible={this.state.edit} ok={this.handleAdd}  cancel={()=> this.setState({edit:false})}></FSetupForm>
            <FSetupSet title='添加人脸' editRecord={{}}  visible={this.state.set} ok={this.handleAdd}  cancel={()=> this.setState({set:false})}></FSetupSet>
            <Table  rowKey={(record)=> record.id } columns={this.getColumns()} dataSource={this.props.setup.data} />
            </div>
           
        );
    
    }
}

const state2props = (state = {},ownProps)  =>{

    const setup = state.deploy.setup;
    const allareacameraall = state.device.allareacameraall;
    // 获取数据
    return Object.assign({},{setup,allareacameraall},ownProps) ;

};

const dispatch2props =(dispatch) => {

    // 获取方法
    return bindActionCreators({removeSetup,removeSetups,selectSetup,initDeviceCameraAll}, dispatch);

};
export default connect (state2props,dispatch2props)(FSetup);

