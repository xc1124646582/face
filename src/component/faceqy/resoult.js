import React, { Component } from 'react';
import ReactDom from 'react-dom';
import {connect} from 'react-redux';
// import moment from 'moment';
// import 'moment/locale/zh-cn';
import { bindActionCreators } from 'redux';
import { Row, Col ,Input ,Modal,Form  ,Icon,Button,DatePicker,MonthPicker,RangePicker,TimePicker,PriceInput,Select,TreeSelect,message,Upload } from 'antd';
import {addPhotodb,editPhotodb} from '../../action';
import '../../../public/style/style.css';

const FormItem = Form.Item;
const Option = Select.Option;
const SHOW_PARENT = TreeSelect.SHOW_PARENT;

class resoult extends Component{
	constructor (props,context){
		super(props,context)
		this.state = {
			value=""
		}
	}
	render(){
		return
			
	}
}