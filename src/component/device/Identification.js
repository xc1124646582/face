import React, { Component } from 'react';
import ReactDom from 'react-dom';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col } from 'antd';
import { Table,Input ,Button ,Modal,Popconfirm   } from 'antd';
import {removeAreaCamera,AreaCameraStatus,initAreaCamera,selectAreaCamera} from '../../action';
import IdentificationForm from './IdentificationForm';
import '../../../public/style/app.css';


class Identification extends Component{
    //初始化
    constructor (props, context)  { 

        super(props, context);
        
        this.state = {
            add:false,
            edit:false,
            searchkey:'',
            current:1,
            query:''
        };

    }

    componentDidMount=()=>{

        this.props.initAreaCamera(0,'');

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
            title: '机器编号',
            dataIndex: 'number'
        }, {
            title: '名称',
            dataIndex: 'name'
        }, {
            title: 'IP',
            dataIndex: 'host'
        },{
            title: '服务器端口',
            dataIndex: 'sshPort'
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

        this.props.removeAreaCamera(id);

       
    
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
            query:this.state.searchkey
        });
    
    }
    render(){

        var page=this.props.areacamera.page;
        if(this.props.areacamera.data.length==0&&page!=0){

            this.props.initAreaCamera(page-1,this.state.searchkey);
        
        }

        //alert(this.props.areacamera.page);
        console.log(this.props.areacamera.total,this.props.areacamera.pager);
        return (

            <div className='sctollbox' style={{'paddingTop':'8px'}}>
            <input className='searchkey' placeholder='编号/名称/状态' value={this.state.searchkey} type='text' onChange={(e)=>{

                var ev=e||window.event;
                this.setState({ searchkey:ev.target.value});
                
            }}/><Button type='primary' style={{'margin':'10px'}} onClick={this.searchfn}>查询</Button>
                     <Button icon='plus-circle-o' type='primary' onClick={()=>{

                         this.setState({add: true,newKey:new Date().getTime()});
                     
                     }}>新增</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <IdentificationForm title='新增识别服务器' editRecord={{}}  visible={this.state.add} ok={this.handleAdd}  cancel={()=> this.setState({add:false})}></IdentificationForm>
            <IdentificationForm title='编辑识别服务器' editRecord={this.state.editRecord} visible={this.state.edit} ok={this.handleEdit} cancel={()=> this.setState({edit:false})}></IdentificationForm>
            <Table  pagination={{'current':this.props.areacamera.page+1,'total':this.props.areacamera.total,'pageSize':this.props.areacamera.pager,'onChange':(page)=>{

                this.props.initAreaCamera(page-1,this.state.query);
                          
            }}}   rowKey={(record)=> record.id } columns={this.getColumns()}  dataSource={this.props.areacamera.data}/>
            </div>
           
        );
    
    }
}

const state2props = (state = {},ownProps)  =>{

    const areacamera = state.device.areacamera;
    // 获取数据
    return Object.assign({},{areacamera},ownProps) ;

};

const dispatch2props =(dispatch) => {

    // 获取方法
    return bindActionCreators({removeAreaCamera,AreaCameraStatus,initAreaCamera,selectAreaCamera}, dispatch);

};
export default connect (state2props,dispatch2props)(Identification);

