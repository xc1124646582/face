import React, { Component } from 'react';
import ReactDom from 'react-dom';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col } from 'antd';
import { Table,Input ,Button ,Modal,Popconfirm,Select,TreeSelect } from 'antd';
import {removePolice,initServerall} from '../../action';
import FPoliceForm from './FPoliceForm';
import '../../../public/style/app.css';


class FPolice extends Component{
    //初始化
    constructor (props, context)  {

        super(props, context);
        
        this.state = {
            add:false,
            edit:false
 
        };

    }
    componentDidMount=()=>{

        this.props.initServerall();
    
    }

    // 删除
    handleRemove = (id) => {
        
        this.props.removePolice(id);
       
    
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
            title: '人脸图像',
            dataIndex: 'photo',
            render: (text, record) => {

                return <img style={{'width':'90px','height':'90px'}} src='../../../public/images/usercard/user1.jpg'/>;
            
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
            render: (text, record) => {

                return text.join('/');
            
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
                   
                     </Row>
        }];
        return columns ;

    }
    // 删除
    handleRemove = (id) => {
        
        this.props.removePolice(id);
       
    
    }
    searchfn=()=>{

        alert('ooo');
    
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
                <FPoliceForm title='新增人脸布控'  visible={this.state.add} ok={this.handleAdd}  cancel={()=> this.setState({add:false})}></FPoliceForm>
                <FPoliceForm title='编辑人脸布控' editRecord={this.state.editRecord}  visible={this.state.edit} ok={this.handleAdd}  cancel={()=> this.setState({edit:false})}></FPoliceForm>
                <Table  rowKey={(record)=> record.id } columns={this.getColumns()} dataSource={this.props.police.data}/>
            </div>
           
        );
    
    }
}

const state2props = (state = {},ownProps)  =>{

    const police = state.deploy.police;
    const allou = state.system.allou;
    const alldepartment = state.system.alldepartment;
    // 获取数据
    return Object.assign({},{police,allou,alldepartment},ownProps) ;

};

const dispatch2props =(dispatch) => {

    // 获取方法
    return bindActionCreators({removePolice,initServerall}, dispatch);

};
export default connect (state2props,dispatch2props)(FPolice);


