import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

import OneBig from './OneBig'
import OneSmall from './OneSmall'

class One extends Component {
    
    state = {
        isMobile: false
    }

    componentDidMount() {
        window.addEventListener('resize', () => {
            this.setState({
                isMobile: window.innerWidth > 992
            });                  
        }, false);     
        this.setState({
            isMobile: window.innerWidth > 992
        });
        
    }


    render(){
        const mobile = !this.state.isMobile;
        
        let whichDiv = '';
        
        if (mobile) {
            return(
                <div className="container-fluid">
                    <div className="row">
                       <OneSmall /> 
                    </div>                                
                </div>
            )
        }else{
            return(
                <div className="container-fluid">
                    <div className="row">
                        <OneBig />
                    </div>                                
                </div>
            )
        }       

        
    }
    
}

export default One; 