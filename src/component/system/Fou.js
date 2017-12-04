import React, { Component } from 'react';
import ReactDom from 'react-dom';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { Table ,Button ,Popconfirm,Row, Col   } from 'antd';
import {removeOu,initOu} from '../../action';
import FouForm from './FouForm';
import '../../../public/style/app.css';


class Fou extends Component{
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

        this.props.initOu(0,'');
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
            title: '机构代码',
            dataIndex: 'number'
        }, {
            title: '单位名称',
            dataIndex: 'name'
        }, {
            title: '联系地址',
            dataIndex: 'address'
        },{
            title: '联系人',
            dataIndex: 'contact'
        },{
            title: '联系电话',
            dataIndex: 'contactPhoneNo'
        },{
            title: '邮箱地址',
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

        this.props.removeOu(id);

       
    
    }

    //点击分页
    pagefn=(page)=>{

        this.props.initAreaCamera(page-1);
        console.log(this.props.areacamera.data);
       // alert(page);
    
    }
    //查询
    searchfn=()=>{

        //alert(this.state.searchkey);
        this.props.initOu(this.state.searchkey);
    
    }
    render(){

        var page=this.props.ou.page;
        if(this.props.ou.data.length==0&&page!=0){

            this.props.initOu(page-1,this.state.searchkey);
        
        }

        return (

            <div className='sctollbox' style={{'paddingTop':'8px'}}>
            <input className='searchkey' placeholder='编号/名称/状态' value={this.state.searchkey} type='text' onChange={(e)=>{

                var ev=e||window.event;
                this.setState({ searchkey:ev.target.value});
                
            }}/><Button type='primary' style={{'margin':'10px'}} onClick={this.searchfn}>查询</Button>
                     <Button icon='plus-circle-o' type='primary' onClick={()=>{

                         this.setState({add: true,newKey:new Date().getTime()});
                     
                     }}>新增</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <FouForm title='新增单位' editRecord={{}}  visible={this.state.add} ok={this.handleAdd}  cancel={()=> this.setState({add:false})}></FouForm>
            <FouForm title='编辑单位' editRecord={this.state.editRecord} visible={this.state.edit} ok={this.handleEdit} cancel={()=> this.setState({edit:false})}></FouForm>
            <Table pagination={{'current':this.props.ou.page+1,'total':this.props.ou.total,'pageSize':this.props.ou.pager,'onChange':(page)=>{

                this.props.initOu(page-1,this.state.searchkey);
                          
            }}}   rowKey={(record)=> record.id } columns={this.getColumns()} dataSource={this.props.ou.data}/>
            </div>
           
        );
    
    }
}

const state2props = (state = {},ownProps)  =>{

    //const areacamera = state.device.areacamera;
    const ou = state.system.ou;
    // 获取数据
    return Object.assign({},{ou},ownProps) ;

};

const dispatch2props =(dispatch) => {

    // 获取方法
    return bindActionCreators({removeOu,initOu}, dispatch);

};
export default connect (state2props,dispatch2props)(Fou);

