import React, { Component } from 'react';
import ReactDom from 'react-dom';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col ,Input ,Modal,Form  ,Icon,Button,DatePicker,MonthPicker,RangePicker,TimePicker,PriceInput,Upload} from 'antd';
import { Tooltip, Cascader, Checkbox, AutoComplete ,Select ,TreeSelect} from 'antd';
import {addSetup,editSetup,seleccompanyId} from '../../action';
import '../../../public/style/style.css';
const FormItem = Form.Item;
const Option = Select.Option;
const SHOW_PARENT = TreeSelect.SHOW_PARENT;
const TreeNode = TreeSelect.TreeNode;


class FSetupSet extends Component{
   //初始化
    constructor (props, context)  {

        super(props, context);
        
        this.state = {


        };

    
    
    }

    //取消 清空 新增 | 编辑  
    handleCancel = () => {

        this.props.cancel();
    
    }


    render(){

        const props = {
            name: 'file',
            action: '//jsonplaceholder.typicode.com/posts/',
            headers: {
                authorization: 'authorization-text'
            },
            onChange(info) {

                console.log(info);
                if (info.file.status !== 'uploading') {

                    console.log(info.file, info.fileList);
    
                }
                if (info.file.status === 'done') {

                    message.success(`${info.file.name} file uploaded successfully`);
                    this.setState({ img:true});
    
                } else if (info.file.status === 'error') {

                    message.error(`${info.file.name} file upload failed.`);
    
                }
  
            }
        };

        return (




            <Modal title={this.props.title}
                  visible={this.props.visible}
                  width={500}
                  onCancel={this.handleCancel}
                  // key={this.props.editRecord.id}
                  footer={null}
                  maskClosable={false}

                >

                  <div className='formboxs'>
               <div className='formsa inputimg'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{'color':'red'}}>* </span>人脸：
                &nbsp;<Upload {...props}>
                    <Button>
                      选择图标
                    </Button>
                    <span>（建议尺寸：200*200）</span>
                </Upload><span className='formspan' ref='imgspan'></span></div>
                <div className='formsa'><button onClick={this.handleCancel}>取消</button>
                   <button onClick={this.submitfn}>保存</button>
                </div>
                </div>

             </Modal>);
  
    }
}
FSetupSet = Form.create({})(FSetupSet);
const state2props = (state = {},ownProps)  =>{

    // 获取数据
    return Object.assign({},{},ownProps) ;

};

const dispatch2props =(dispatch) => {

    // 获取方法
    return bindActionCreators({}, dispatch);

};
export default connect (state2props,dispatch2props)(FSetupSet);