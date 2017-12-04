import React, { Component } from 'react';
import ReactDom from 'react-dom';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { Table ,Button ,Popconfirm,Row, Col   } from 'antd';
import {removeOu,removeUser} from '../../action';
import FUserForm from './FUserForm';
import '../../../public/style/app.css';


class Fuser extends Component{
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
            title: '工号',
            dataIndex: 'jobNumber'
        }, {
            title: '部门',
            dataIndex: 'departmentId'
        }, {
            title: '职位',
            dataIndex: 'position'
        },{
            title: '登录名',
            dataIndex: 'userName'
        },{
            title: '姓名',
            dataIndex: 'nickName'
        },{
            title: '电话',
            dataIndex: 'userPhoneNo'
        },{
            title: '邮箱',
            dataIndex: 'emailAddress'
        },{
            title: '用户头像',
            dataIndex: 'avatar',
            render: (text, record) => {

                return <img style={{'width':'90px','height':'90px'}} src='../../../public/images/usercard/user1.jpg'/>;
            
            }
        },{
            title: '是否可以登录',
            dataIndex: 'nologin',
            render: (text, record) => {

                if(text=='true'){

                    return '是';
                
                }else{

                    return '否';
                
                }
            
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

        this.props.removeUser(id);

       
    
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

        console.log(this.props.department);

        return (

            <div className='sctollbox' style={{'paddingTop':'8px'}}>
            <input className='searchkey' placeholder='编号/名称/状态' value={this.state.searchkey} type='text' onChange={(e)=>{

                var ev=e||window.event;
                this.setState({ searchkey:ev.target.value});
                
            }}/><Button type='primary' style={{'margin':'10px'}} onClick={this.searchfn}>查询</Button>
                     <Button icon='plus-circle-o' type='primary' onClick={()=>{

                         this.setState({add: true,newKey:new Date().getTime()});
                     
                     }}>新增</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <FUserForm title='新增用户' editRecord={{}}  visible={this.state.add} ok={this.handleAdd}  cancel={()=> this.setState({add:false})}></FUserForm>
            <FUserForm title='编辑用户' editRecord={this.state.editRecord} visible={this.state.edit} ok={this.handleEdit} cancel={()=> this.setState({edit:false})}></FUserForm>
            <Table    rowKey={(record)=> record.id } columns={this.getColumns()} dataSource={this.props.user.data}/>
            </div>
           
        );
    
    }
}

const state2props = (state = {},ownProps)  =>{

    //const areacamera = state.device.areacamera;
    const user = state.system.user;
    // 获取数据
    return Object.assign({},{user},ownProps) ;

};

const dispatch2props =(dispatch) => {

    // 获取方法
    return bindActionCreators({removeOu,removeUser}, dispatch);

};
export default connect (state2props,dispatch2props)(Fuser);

