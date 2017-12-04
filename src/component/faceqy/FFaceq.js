import React, { Component } from 'react';
import ReactDom from 'react-dom';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col } from 'antd';
import { Table ,Button ,Popconfirm  } from 'antd';
import {faceRemove} from '../../action';
import FFaceqForm from './FFaceqForm';
import '../../../public/style/app.css';
import { browserHistory } from 'react-router';


class FFaceq extends Component{
    //初始化
    constructor (props, context)  { 

        super(props, context);
        
        this.state = {
            edit:false,
            add:false
        };

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
            title: '任务名称',
            dataIndex: 'name'
        }, {
            title: '创建时间',
            dataIndex: 'time'
        },{
            title: '创建人',
            dataIndex: 'setname'
        },{
            title: '进度',
            dataIndex: 'schedule'
        },{
            title: '耗时',
            dataIndex: 'elapsed'
        },{
            title: '操作',
            dataIndex: 'operation',
            render: (text, record) => <Row className='operation' type='flex' align='middle' gutter={10}>
                      <Col className='gutter-row'>
                          <Button type='primary' onClick={()=> {

                              browserHistory.push('/face/control?'+record.id);
                          
                          }}>查看</Button>
                      </Col>
                      <Col className='gutter-row'>
                          <Popconfirm title='确定删除吗?' onConfirm={() => this.props.faceRemove(record.id)}>
                              <Button type='primary'>删除</Button>
                          </Popconfirm>
                      </Col>
                      <Col className='gutter-row'>
                          <Button type='primary' onClick={()=> this.setState({edit:true,editRecord:record})}>停用</Button>
                      </Col>
                     </Row>
        }];
        return columns ;

    }
   
      
    render(){

        console.log(this.props.face);
        return (

            <div>
            <div style={{'padding':'10px 0'}}>
                     <Button icon='plus-circle-o' type='primary' onClick={()=>{

                         this.setState({add: true,newKey:new Date().getTime()});
                     
                     }}>新增</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </div>

                
            <FFaceqForm title='新增查询任务' editRecord={{}}  visible={this.state.add} ok={this.handleAdd}  cancel={()=> this.setState({add:false})}></FFaceqForm>
            <Table  rowKey={(record)=> record.id } columns={this.getColumns()}  dataSource={this.props.face.data}/>
            </div>
           
        );
    
    }
}

const state2props = (state = {},ownProps)  =>{

    const setup = state.deploy.setup;
    const allareacamera = state.device.allareacamera;
    const face = state.face.faceb;
    // 获取数据
    return Object.assign({},{setup,allareacamera,face},ownProps) ;

};

const dispatch2props =(dispatch) => {

    // 获取方法
    return bindActionCreators({faceRemove}, dispatch);

};
export default connect (state2props,dispatch2props)(FFaceq);



