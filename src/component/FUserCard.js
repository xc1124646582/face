import React, { Component } from 'react';
import './FUserCard.css'

class FUserCard extends Component{
    render(){

        return (
            <div className='FUserCard'>
                <div style={{marginLeft:30,marginTop:10 }}>
                    <img  src='http://localhost:3300/public/images/usercard/user1.jpg' />
                </div>
                <div style={{marginLeft:-30,marginTop:-30 }}>
                    <p>肖佳男</p>
                </div>
            </div> 
        );
    
    }
}

export default FUserCard;