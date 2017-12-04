import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { Form, Icon, Input, Button } from 'antd';
import {login,sendMessage,gotoPage,gotoIndex} from '../../action';
import RouterUtils from '../../util/RouterUtils';
import './Login.css';

const FormItem = Form.Item;

class Login extends Component{
    handleSubmit = (e) => {

        e.preventDefault();
        this.props.form.validateFields((err, values) => {

            if(!err){

                this.props.login(values.userName,values.password);

            }else{
            //TODO 
            }
      
        });
    
    }

        // e.preventDefault();
        // this.props.form.validateFields((err, values) => {

        //     if (!err) {
              
        //         login(values.userName,values.password);
            //     const result = 

            //     result.then((data)=>{

            //         if(data.code == 0 ){

            //           //跳转到主页，记录页面
            //             const lastIndex = RouterUtils.getLastPage();
            //             if(lastIndex){

            //                 this.props.gotoPage(lastIndex);
                          
            //             }else{

            //                 this.props.gotoIndex();

            //             }
             
            //         }else{
                      
            //             const type = data.code;
            //             const message = data.message;
            //             this.props.sendMessage({type,message});
          
            //         }
                
            //     });
                
            // }
    
        // });
        //  });
//     }
// }
    render() {

        const { getFieldDecorator } = this.props.form;
        return (
      <div  className='Login' >
        <div className='stars'>
          <img src='/public/images/14.png'/>
          <img src='/public/images/15.png'/>
          <img src='/public/images/16.png'/>
          <img src='/public/images/17.png'/>
          <img src='/public/images/18.png'/>
          <img src='/public/images/19.png'/>
        </div>

        <div  className='login-body-center' >
          <h1>人脸识别应用平台</h1>     
          <div className='go-pro'>
            <img src='/public/images/gopro1.jpg' alt=''/>
            <img src='/public/images/gopro2.jpg' alt=''/>
            <img src='/public/images/gopro3.jpg' alt=''/>
            <img src='/public/images/gopro4.jpg' alt=''/>
            
          </div>
          <div className='login-body-center-login'>
            
             <p>人脸识别应用平台</p>  
             <Form onSubmit={this.handleSubmit} className='login-form'>
                  <FormItem>
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: 'Please input your username!' }]
                    })(
                      <Input prefix={<Icon type='user' style={{ fontSize: 13 }} />} placeholder='用户名：' />
                    )}
                  </FormItem>
                  <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }]
                    })(
                      <Input autoComplete='new-password' prefix={<Icon type='lock' style={{ fontSize: 13 }} />} type='password' placeholder='密码：' />
                    )}
                  </FormItem>
                  <FormItem>
          
                    <Button type='primary' htmlType='submit' className='login-form-button'>
                     登录
                    </Button>
        
                  </FormItem>
                </Form>
          </div>
       
        </div> 
        <div className='login-foot'>2017&copy;兆原数通（北京）数据科技有限公司</div>
      </div>
        );
  
    }
}

const dispatch2props =(dispatch) => {

    // 获取方法
    return bindActionCreators({sendMessage,gotoPage,gotoIndex,login}, dispatch);

};
export default connect (null,dispatch2props)(Form.create()(Login));