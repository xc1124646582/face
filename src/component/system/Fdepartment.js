import React, { Component } from 'react';
import ReactDom from 'react-dom';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col } from 'antd';
import { Table ,Button ,Popconfirm   } from 'antd';
import {removeDepartment} from '../../action';
import FdepartmentForm from './FdepartmentForm';
import '../../../public/style/app.css';


class Fdepartment extends Component{
    //初始化
    constructor (props, context)  { 

        super(props, context);
        
        this.state = {
            add:false,
            edit:false,
            searchkey:'',
            current:1
        };

    }

    componentDidMount=()=>{

        //this.props.initAreaCamera(0,'');

    }

/**
    *  获取表格列
    */
    getColumns = () =>{

        const columns = [{
            title: '序号',
            dataIndex: 'idx',
            render:(text,recode,index) => {

                return index+1;
            
            }
        }, {
            title: '部门名称',
            dataIndex: 'name'
        }, {
            title: '部门代码',
            dataIndex: 'number'
        }, {
            title: '联系人',
            dataIndex: 'director'
        },{
            title: '联系电话',
            dataIndex: 'directorPhoneNo'
        },{
            title: '邮箱',
            dataIndex: 'emailAddress'
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

                              this.AreaCameraStatus(record);
                          
                          }}>{record.status=='停用'?'启用':'停用'}</Button>
                      </Col>
                     </Row>
        }];
        return columns ;

    }
    //改变状态
    AreaCameraStatus=(id)=>{

        this.props.AreaCameraStatus(id);
    
    }
    // 删除
    handleRemove = (id) => {

        this.props.removeDepartment(id);

       
    
    }

    //点击分页
    pagefn=(page)=>{

        this.props.initAreaCamera(page-1);
        console.log(this.props.areacamera.data);
       // alert(page);
    
    }
    //查询
    searchfn=()=>{

        this.props.selectAreaCamera(0,this.state.searchkey);
        this.setState({
            current:1
        });
    
    }
    render(){

        return (

            <div className='sctollbox' style={{'paddingTop':'8px'}}>
            <input className='searchkey' placeholder='编号/名称/状态' value={this.state.searchkey} type='text' onChange={(e)=>{

                var ev=e||window.event;
                this.setState({ searchkey:ev.target.value});
                
            }}/><Button type='primary' style={{'margin':'10px'}} onClick={this.searchfn}>查询</Button>
                     <Button icon='plus-circle-o' type='primary' onClick={()=>{

                         this.setState({add: true,newKey:new Date().getTime()});
                     
                     }}>新增</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <FdepartmentForm title='新增部门' editRecord={{}}  visible={this.state.add} ok={this.handleAdd}  cancel={()=> this.setState({add:false})}></FdepartmentForm>
            <FdepartmentForm title='编辑部门' editRecord={this.state.editRecord} visible={this.state.edit} ok={this.handleEdit} cancel={()=> this.setState({edit:false})}></FdepartmentForm>
            
                     <Table    rowKey={(record)=> record.id } columns={this.getColumns()} dataSource={this.props.department.data}/>
            </div>
           
        );
    
    }
}

const state2props = (state = {},ownProps)  =>{

    //const areacamera = state.device.areacamera;
    const department = state.system.department;
    // 获取数据
    return Object.assign({},{department},ownProps) ;

};

const dispatch2props =(dispatch) => {

    // 获取方法
    return bindActionCreators({removeDepartment}, dispatch);

};
export default connect (state2props,dispatch2props)(Fdepartment);

