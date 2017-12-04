import React, { Component } from 'react';
import ReactDom from 'react-dom';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col } from 'antd';
import { Table,Input ,Button ,Modal,Popconfirm,Select } from 'antd';
import {initControl,videoUrl} from '../../action';
import FFacebForm from './FFaceqForm';
import '../../../public/style/app.css';
import { browserHistory } from 'react-router';

class FFacec extends Component{
    //初始化
    constructor (props, context)  {

        super(props, context);
        
        this.state = {
            add:false,
            value:'',
            obj:[]
        };
 
    }

    playsfn=(url)=>{

        //this.props.videoUrl(url);

        //跳转
        //browserHistory.push('/faceVideo');
    
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
            title: '搜索',
            dataIndex: 'seek',
            render: (text, record) => {

                return <img style={{'width':'90px','height':'90px'}} src='../../../public/images/usercard/user1.jpg'/>;
            
            }
        }, {
            title: '结果',
            dataIndex: 'result',
            render: (text, record) => {

                return <img  style={{'width':'90px','height':'90px'}} src='../../../public/images/usercard/user1.jpg'/>;
            
            }
        },{
            title: '相似度',
            dataIndex: 'similarity'
        },{
            title: '出现设备',
            dataIndex: 'equipment'
        },{
            title: '出现时间',
            dataIndex: 'time'
        },{
            title: '视频',
            dataIndex: 'video',
            render: (text, record) => {

                return <a href='http://localhost:3300/faceVideo' target='_blank'><div className='videoimg' onClick={this.playsfn.bind(null,'http://www.w3school.com.cn/example/html5/mov_bbb.mp4')} style={{'position':'relative','width':'180px','height':'90px','margin':'0 auto','cursor': 'pointer','overflow': 'hidden'}}>
                <img style={{'width':'100%','height':'100%'}} src='../../../public/images/usercard/user1.jpg'/>
                <div  style={{'position':'absolute','top':0,'left':0,'width':'180px','height':'90px','background':'black'}}></div>
                <img  className='videoimg2' style={{'width':'100px','height':'60px','position':'absolute','top':'17px','left':'42px'}} src='../../../public/images/usercard/video.jpg'/>
                </div></a>;
            
            }
        }];
        return columns ;

    }

    componentDidMount=()=>{

        var id=window.location.href.split('?').length>1?window.location.href.split('?')[1]:'';
        if(id){

            this.props.initControl(id);
            this.setState({ value:this.props.control.data[0].name,obj:this.props.control.data});
        
        }
    
    }
    query=()=>{

        if(this.state.value){

            alert(this.state.value);
        
        }
    
    }


    render(){

       
        return (

            <div> 
            <div style={{'margin':'9px 0'}}><input value={this.state.value} style={{'border':'1px solid #ccc','paddingLeft':'5px'}} type='text' onChange={(e)=>{

                var ev=e||window.event;
                this.setState({ value:ev.target.value});
                
            }}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Button icon='plus-circle-o' type='primary' onClick={this.query}>查询</Button></div>         
            <Table  rowKey={(record)=> record.id } columns={this.getColumns()}  dataSource={this.state.obj}/>
            </div>
           
        );
    
    }
}

const state2props = (state = {},ownProps)  =>{

    const control = state.face.control;
    // 获取数据
    return Object.assign({},{control},ownProps) ;

};

const dispatch2props =(dispatch) => {

    // 获取方法
    return bindActionCreators({initControl,videoUrl}, dispatch);

};
export default connect (state2props,dispatch2props)(FFacec);


