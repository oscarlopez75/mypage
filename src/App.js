import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css'

import Navbar from './navbar/Navbar'
import Footer from './footer/Footer'
import Home from './home/Home'
import About from './about/About';
import Contact from './contact/Contact';

class App extends Component {

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
        const mobile = this.state.isMobile ? 'App container' : 'App';
        
        return(            
            <div className={mobile}>
                <Navbar />                
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
                <Route path='/contact' component={Contact} />        
                <Footer />                    
            </div>
        )
    }
}


export default App;