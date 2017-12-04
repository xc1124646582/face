import React, { Component } from 'react';


class FSystem extends Component{
    render(){

        return (
            <div >
                {this.props.children}
            </div> 
        );
    
    }
}

export default FSystem;