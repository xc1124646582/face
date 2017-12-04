import React, { Component } from 'react';


class Fpeople extends Component{
    render(){

        // console.log(' face init ')
        return (
            <div className='FHead'> {this.props.children} </div> 
        );
    
    }
}

export default Fpeople;