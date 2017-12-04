import React, { Component } from 'react';
import ReactDom from 'react-dom';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col } from 'antd';
import { Table,Input ,Button ,Modal,Popconfirm,Select } from 'antd';
import {} from '../../action';
import '../../../public/style/app.css';
import ckplayerConfig from '../../ckplayer.js';
class FaceVideo extends Component{
    //初始化
    constructor (props, context)  {

        super(props, context);
        
        this.state = {
            
        };
 
    }
    componentDidMount(){

        var videoObject = {
            container: '.video',//“#”代表容器的ID，“.”或“”代表容器的class
            variable: 'player',//该属性必需设置，值等于下面的new chplayer()的对象
            autoplay:false,
            flashplayer:false,
            mobileCkControls:true,
            poster:'../../../public/images/usercard/user1.jpg',//封面图片
            video:'http://www.w3school.com.cn/example/html5/mov_bbb.mp4'//视频地址
        };
        var player=new ckplayer(videoObject);


    }
    render(){ 
       
        return (

            <div className='video_main' style={{'width':'100%','height':'100%','background':'rgba(0,0,0,0.8)'}}>
            <a style={{'position':'absolute','left':'20px','top':'20px','fontSize':'23px','color':'white','zIndex':'999'}} href='http://www.w3school.com.cn/example/html5/mov_bbb.mp4' download='video'>点击下载</a>
            <div className='video' style={{'width': '100%','height': '100%','position':'relative'}}>
            
            </div>


            {/*<video id='video1' width='680' height='480' controls autoPlay loop>  
    <source src='http://www.w3school.com.cn/example/html5/mov_bbb.mp4' type='video/mp4' />  
    <source src='http://www.w3school.com.cn/example/html5/mov_bbb.mp4' type='video/ogg' />  
  </video>*/}



            {/*<div className='vd' style={{'width':'980px','height':'680px','position':'absolute','top':0,'left':0,'right':0,'bottom':0,'margin':'auto'}}>  
    <object classID='clsid:d27cdb6e-ae6d-11cf-96b8-444553540000' codebase='http://www.w3school.com.cn/example/html5/mov_bbb.mp4' width='980' height='680'>  
        <param name='movie' value='http://www.w3school.com.cn/example/html5/mov_bbb.mp4' />  
        <param name='quality' value='high' />  
        <param name='bgcolor' value='#ffffff' />  
        <param name='play' value='true' />  
        <param name='loop' value='true' />  
        <param name='wmode' value='transparent' />  
        <param name='scale' value='showall' />  
        <param name='menu' value='true' />  
        <param value='true' name='allowfullscreen' />  
        <param name='devicefont' value='false' />  
        <param name='salign' value='' />  
        <param name='allowScriptAccess' value='sameDomain' />  
        <param name='flashvars' value='isShowRelatedVideo=false&showAd=0&show_pre=1&show_next=1&isAutoPlay=false&isDebug=false&UserID=&winType=interior&playMovie=true&MMControl=false&MMout=false&RecordCode=1001,1002,1003,1004,1005,1006,2001,3001,3002,3003,3004,3005,3007,3008,9999'/>              
        <embed height='680' align='middle' width='980' pluginspage='http://www.w3school.com.cn/example/html5/mov_bbb.mp4' type='application/x-shockwave-flash' name='aprilfools' flashvars='isShowRelatedVideo=false&showAd=0&show_pre=1&show_next=1&isAutoPlay=false&isDebug=false&UserID=&winType=interior&playMovie=true&MMControl=false&MMout=false&RecordCode=1001,1002,1003,1004,1005,1006,2001,3001,3002,3003,3004,3005,3007,3008,9999' src='http://static.youku.com/v/swf/qplayer.swf?winType=adshow&VideoIDS=XMzg2NzQ2OTU2&isAutoPlay=false&isShowRelatedVideo=true'  menu='true' play='true' allowFullScreen='true' allowscriptaccess='sameDomain' quality='high' wmode='transparent' bgcolor='#fff' ver='10.0.0'/>  
    </object>       
</div>*/}


  {/*<span style={{'fontFamily':'Microsoft YaHei'}}><div style={{'marginTop':'-30px','marginLeft':'-120px'}}>     
    <object id='myId' classID='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' width='490' height='390'>  
        <param name='movie' value='http://www.w3school.com.cn/example/html5/mov_bbb.mp4' />  
        
        <object type='application/x-shockwave-flash' data='http://www.w3school.com.cn/example/html5/mov_bbb.mp4' width='490' height='390'>  
        
            <div>  
                <h1>Alternative content</h1>  
                <p><a href='http://www.adobe.com/go/getflashplayer'><img src='http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif' alt='Get Adobe Flash player' /></a></p>  
            </div>  
        
        </object>  
     
    </object>  
</div></span>  */} 
            </div>
           
        );
    
    }
}

const state2props = (state = {},ownProps)  =>{

    const facevideo = state.face.facevideo;
    // 获取数据
    return Object.assign({},{facevideo},ownProps) ;

};

const dispatch2props =(dispatch) => {

    // 获取方法
    return bindActionCreators({}, dispatch);

};
export default connect (state2props,dispatch2props)(FaceVideo);


