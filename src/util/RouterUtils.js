import React, { Component } from 'react';
import { browserHistory } from 'react-router';


export default{
    gotoIndex:()=>{

        browserHistory.push('/face');
    
    },
    getLastPage:()=>{

        //TODO
        return null ;
    
    },
    go:(page) =>{

        browserHistory.push('/'+page);
    
    }
};