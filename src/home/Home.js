import React, { Component} from 'react';
import { Link } from 'react-router-dom';

import MainAdd from './MainAdd'
import One from './One';
import Two from './Two';
import Three from './Three';
import Four from './Four';
import Five from './Five';


class Home extends Component {    
    render(){
        // console.log(this.props);
        return(
            <div className="Home">                
                <div className="container-fulid">                    
                    <MainAdd />                    
                </div>
                
                <div className="container-fluid">
                    <div className="row">

                        <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 news border-top">
                            <One />
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 news border-top">
                            <Two />
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 news border-top">
                            <Three />
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 news border-top">
                            <Four />
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 news border-top">
                            <Five />
                        </div>

                    </div>
                </div>



            </div>
        )
    }
}


export default Home;