import React, { Component } from 'react';
import ReactDom from 'react-dom';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col } from 'antd';
import { Table,Input ,Button ,Modal,Popconfirm,Select,TreeSelect } from 'antd';
import {removePeoplese} from '../../action';
import '../../../public/style/app.css';
import FpeopleseForm from './peopleseForm';
class Fpeoplese extends Component{
    //初始化
    constructor (props, context)  {

        super(props, context);
        
        this.state = {
            add:false
 
        };

    }

    // 删除
    handleRemove = (id) => {

        this.props.removePeoplese(id);
       
    
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
            title: '姓名',
            dataIndex: 'name'
        },{
            title: '警号',
            dataIndex: 'code'
        },{
            title: '联系方式',
            dataIndex: 'tel'
        },{
            title: '电子邮箱',
            dataIndex: 'email'
        },{
            title: '所属单位',
            dataIndex: 'company'
        },{
            title: '所属部门',
            dataIndex: 'department'
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
            <FpeopleseForm title='新增处警人'  visible={this.state.add} ok={this.handleAdd}  cancel={()=> this.setState({add:false})}></FpeopleseForm>
            <FpeopleseForm title='编辑处警人' editRecord={this.state.editRecord}  visible={this.state.edit} ok={this.handleAdd}  cancel={()=> this.setState({edit:false})}></FpeopleseForm>  
              <Table rowKey={(record)=> record.id } columns={this.getColumns()} dataSource={this.props.people.data} />
            </div>
           
        );
    
    }
}

const state2props = (state = {},ownProps)  =>{

    const people = state.people.peoplese;
    // 获取数据
    return Object.assign({},{people},ownProps) ;

};

const dispatch2props =(dispatch) => {

    // 获取方法

    return bindActionCreators({removePeoplese}, dispatch);

};
export default connect (state2props,dispatch2props)(Fpeoplese);


