/*
* @Author: huanghongqiang
* @Date:   2017-07-14 16:13:10
* @Last Modified by:   huanghongqiang
* @Last Modified time: 2017-07-28 11:48:09
* @Email: st8817@163.com
* @File Path: /Users/huanghongqiang/work/dsj/Face/trunk/zyweb/src/view/index/Index.js
* @File Name: Index.js
* @Descript:
*/

'use strict';
import React, { Component } from 'react';
import {FUserCard} from '../../component/';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {logout} from '../../action';
import RouterUtils from '../../util/RouterUtils';
import './Index.css';
import { browserHistory } from 'react-router';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;




class Index extends Component{
    state = {
        collapsed: false,
        first:'人脸查询',
        sencend:'query',
        firstPath:'',
        RouterPath:'/face',
        nickName:''
    };
    onCollapse = (collapsed) => {

        console.log(collapsed);
        this.setState({ collapsed });
  
    }

    checkRouter = (item, key, keyPath) => {

        RouterUtils.go(item.key);
  
    }
    componentDidMount(){

        if(window.sessionStorage.getItem('username')){

            var name=JSON.parse(window.sessionStorage.getItem('username')).nickName;
            this.setState({
                nickName:name
            });
        
        }else{

            browserHistory.push('/login');
        
        }

        
    
    }


    getMenus(){

        const menus = [

            {'id':'x1','name':'人脸查询','action':'face','pos':1,'collapsed':true,'children':[
          {'id':'x1','name':'查询任务','action':'query','pos':1,'collapsed':true},
          {'id':'x1','name':'查询结果','action':'control','pos':1,'collapsed':true}
            ]},
            {'id':'x2','name':'系统管理','action':'system','pos':2,'collapsed':true,'children':[
        {'id':'x1','name':'单位管理','action':'ou','pos':1,'collapsed':true},
        {'id':'x1','name':'部门管理 ','action':'department','pos':2,'collapsed':true},
        {'id':'x1','name':'用户管理','action':'user','pos':7,'collapsed':true}
            ]},
            {'id':'x3','name':'设备管理','action':'device','pos':3,'collapsed':true,'children':[
         {'id':'x1','name':'识别服务器','action':'Identification','pos':1,'collapsed':true},
         {'id':'x1','name':'分析服务器 ','action':'analysis','pos':2,'collapsed':true},
         {'id':'x1','name':'网络摄像头','action':'netcamera','pos':3,'collapsed':true},
         {'id':'x1','name':'设备运行状态','action':'status','pos':4,'collapsed':true}
            ]},
            {'id':'x4','name':'布控管理','action':'deploy','pos':4,'collapsed':true,'children':[
          {'id':'x1','name':'布控底库','action':'setup','pos':1,'collapsed':true},
          {'id':'x1','name':'人脸布控','action':'police','pos':2,'collapsed':true},
          {'id':'x1','name':'底库布控','action':'warning','pos':3,'collapsed':true}
            ]},
            {'id':'x5','name':'处警管理','action':'people','pos':5,'collapsed':true,'children':[
          {'id':'x1','name':'处警人管理','action':'peoplese','pos':1,'collapsed':true},
          {'id':'x1','name':'处警记录管理','action':'peoplerecord','pos':2,'collapsed':true}
            ]}
        ];
        const items = [];
        let RouterParent = '';
        let RouterChild = '';
        RouterParent = this.props.routes[2].path;
        RouterParent = this.props.routes[2] ? this.props.routes[2].path : this.state.first;
        RouterChild = this.props.routes[3] ? this.props.routes[3].path : this.state.sencend;
        for(let i of menus){

            if(i.action==RouterParent){

                // this.setState({
                //     first:i.name,
                //     firstPath:i.action
                // });
                this.state.first = i.name;
                this.state.firstPath = i.action;
                for(let n of i.children){

                    if(n.action == RouterChild){

                        this.state.sencend = n.name;
                        this.state.RouterPath = i.children[0].action;
                  
                    }
              
                }
            
            }
            const children = i.children;
            if(children.length > 0){

                const sub = this.getSubMenus(i.action,children);
                items.push(<SubMenu key={i.action}  title={<span>{i.name}</span>} >{sub}</SubMenu>);
        
            }else{

                items.push(<Menu.Item  key={i.action}  ><span>{i.name}</span></Menu.Item>);
        
            }
        
        }
        return <Menu theme='dark' defaultSelectedKeys={['1']} mode='inline' onClick={this.checkRouter}>{items}</Menu>;

      
    }

    getSubMenus(parentKey,children){

        const items = [];
        for(let i of children){

            items.push(<Menu.Item  key={parentKey+'/'+i.action}  ><span>{i.name}</span></Menu.Item>);
      
        }
        return items;
    
    }
    //切换一个导航
    changeRouter(){

        RouterUtils.go( this.state.firstPath +'/'+this.state.RouterPath);
        console.log(this.state.RouterPath);
    
    }
    //退出登陆
    handleLogout=() => {

        window.sessionStorage.setItem('username','');
        this.props.logout();
    
    }

    headfn=()=>{

        if(this.props.children.props.children){

            var heade=<Breadcrumb style={{'marginRight': 30,'marginLeft': 30, 'background': '#fff','height':'74px','borderBottom': 'solid 1px rgb(74,163,148)','lineHeight':'74px'}}>
              <Breadcrumb.Item style={{ 'fontsize': 20}}><a  onClick={this.changeRouter.bind(this)}>{this.state.first}</a></Breadcrumb.Item>
              <Breadcrumb.Item>{this.state.sencend}</Breadcrumb.Item>
            </Breadcrumb>;
        
        }else{

            var heade='';
        
        }
        return heade;

    }


    render(){

        //console.log(this.props.routes[2].path);
        if(!this.props.routes[2]){

            this.handleLogout();
            return null ;
        
        }

        

        return(
        <Layout className='lefts' style={{overflow:'visible',width:'100%',minHeight: '100%'}}>
          <Sider 
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
            style={{}}
          >
            <div className='logo' style={{height:90}} >
              <FUserCard />
            </div>
            {this.getMenus()}
          </Sider>
        <Layout style={{overflow:'visible',minWidth:'880px'}}>
          <Header style={{ background: '#fff', padding: 0,height:'70px', textAlign: 'right',paddingRight:50 }} >
            <Icon type='user' />&nbsp;<span>{this.state.nickName}</span>&nbsp;&nbsp;&nbsp;&nbsp;
            <span onClick={this.handleLogout}><Icon type='poweroff' />&nbsp;<span>退出</span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
          </Header>
          <Content style={{ 'margin': '20px 20px 0px 20px','background': '#fff' }}>
            
            {this.headfn()}
            <div style={{ paddingLeft: 30,paddingRight:30, background: '#fff', minHeight: 536 }}>
              {this.props.children}
            </div>
          </Content>
          <Footer style={{ margin:'0px 20px',textAlign: 'center',height:'70px',background: '#fff' }}>
            2017 ©兆原数通(北京)数据科技有限公司
          </Footer>
        </Layout>
      </Layout>
        );
    
    }
}
//export default Index;

const dispatch2props =(dispatch) => {

    // 获取方法
    return bindActionCreators({logout}, dispatch);

};



export default connect (null,dispatch2props)(Index);