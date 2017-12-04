import React, { Component } from 'react';
import ReactDom from 'react-dom';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col } from 'antd';
import { Table,Input ,Button ,Modal,Popconfirm } from 'antd';
import {removeWarning,initServerall} from '../../action';
// import FWarningForm from './FWarningForm';
import '../../../public/style/app.css';
import FWarningForm from './FWarningForm';

class FWarning extends Component{
    //初始化
    constructor (props, context)  {

        super(props, context);
        
        this.state = {
            add:false
        };
 
    }

    componentDidMount=()=>{

        this.props.initServerall();
    
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
        }, {
            title: '名称',
            dataIndex: 'name'
        },{
            title: '底库',
            dataIndex: 'setup',
            render: (text, record) => {

                return text.join('/');
            
            }
        }, {
            title: '布控开始时间',
            dataIndex: 'statetime'
        }, {
            title: '布控结束时间',
            dataIndex: 'endtime'
        }, {
            title: '处警人',
            dataIndex: 'peoplese'
        },{
            title: '摄像头',
            dataIndex: 'equipment',
            render: (text,record) => {

                return text.join('/');
            
            }
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
                   
                     </Row>
        }];
        return columns ;

    }

    // 删除
    handleRemove = (id) => {
        
        this.props.removeWarning(id);
       
    
    }
    //查询
    searchfn=()=>{

        alert('....');
    
    }

    render(){

        return (

            <div style={{'paddingTop':'8px'}}>
            <input className='searchkey' placeholder='编号/名称/状态' value={this.state.searchkey} type='text' onChange={(e)=>{

                var ev=e||window.event;
                this.setState({ searchkey:ev.target.value});
                
            }}/><Button type='primary' style={{'margin':'10px'}} onClick={this.searchfn}>查询</Button>
                     <Button icon='plus-circle-o' type='primary' onClick={()=>{

                         this.setState({add: true,newKey:new Date().getTime()});
                     
                     }}>新增</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <FWarningForm title='新增底库布控'  visible={this.state.add} ok={this.handleAdd}  cancel={()=> this.setState({add:false})}></FWarningForm>
                 <FWarningForm title='编辑底库布控' editRecord={this.state.editRecord}  visible={this.state.edit} ok={this.handleAdd}  cancel={()=> this.setState({edit:false})}></FWarningForm>
            <Table  rowKey={(record)=> record.id } columns={this.getColumns()} dataSource={this.props.warning.data}/>
            </div>
           
        );
    
    }
}

const state2props = (state = {},ownProps)  =>{

    const warning = state.deploy.warning;
    // 获取数据
    return Object.assign({},{warning},ownProps) ;

};

const dispatch2props =(dispatch) => {

    // 获取方法
    return bindActionCreators({removeWarning,initServerall}, dispatch);

};
export default connect (state2props,dispatch2props)(FWarning);

