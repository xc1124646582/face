import React, { Component } from 'react';


class FFace extends Component{
    render(){

        // console.log(' face init ')
        const children = this.props.children ;
        if(children){

        	return (
            <div className='FHead'> {children} </div> 
        	);
        
        }else{

        	return(
        	<div className='FHead'> dgdfg </div>
        	 );
        
        }
        
    
    }
}

export default FFace;