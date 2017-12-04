import React, { Component } from 'react';


class FDevice extends Component{
    render(){

        return (
            <div> 
				{this.props.children}
            </div> 
        );
    
    }
}

export default FDevice;