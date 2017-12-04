import React, { Component } from 'react';
import ReactDom from 'react-dom';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col } from 'antd';
import { Table,Input ,Button ,Modal,Popconfirm,Select,TreeSelect } from 'antd';
import {} from '../../action';
import '../../../public/style/app.css';


class Fpeoplesecord extends Component{
    //初始化
    constructor (props, context)  {

        super(props, context);
        
        this.state = {
            add:false
 
        };

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
        },{
            title: '摄像头',
            dataIndex: 'equipment' 
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

            <div>
            </div>
           
        );
    
    }
}

const state2props = (state = {},ownProps)  =>{

    
    // 获取数据
    return Object.assign({},{},ownProps) ;

};

const dispatch2props =(dispatch) => {

    // 获取方法
    return bindActionCreators({}, dispatch);

};
export default connect (state2props,dispatch2props)(Fpeoplesecord);


