import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css'

import Navbar from './navbar/Navbar'
import Footer from './footer/Footer'
import Home from './home/Home'
import About from './about/About';
import Contact from './contact/Contact';
import Pro from './pro/Pro';

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
            <div className="App">
                <Navbar />                
                <div className={mobile}>
                    <Route exact path='/' component={Home} />
                    <Route path='/about' component={About} />
                    <Route path='/contact' component={Contact} />    
                    <Route path='/pro' component={Pro} />
                </div>                    
                <Footer />                    
            </div>
        )
    }
}


export default App;