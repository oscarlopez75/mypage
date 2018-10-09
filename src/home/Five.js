import React, { Component} from 'react';
import GetToken from '../login/getToken';

class Five extends Component {
    state = {
        username: null,
        password: null,
        auth: false
    }

    

    handleChange = (e) =>{
        this.setState({
            [e.target.id]: e.target.value
        })        
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        GetToken(this.state)
            .then((newState) => {
                this.setState((state) => (newState))
            })
            .catch()            
    }

    logout = () =>{
        this.setState({
            username: null,
            password: null,
            auth: false
        })

        sessionStorage.removeItem('token');
        sessionStorage.removeItem('username');
        sessionStorage.removeItem('role');
    }

    render(){
        let gotToken = this.state.auth;
        let logged;

        if(this.state.auth){
            logged = <div className="container-fluid text-center">
                        <p>{sessionStorage.getItem('username')} logged in</p>
                        <button type="button" className="btn btn-primary" onClick={this.logout}>Logout</button>
                    </div>
        }else{
            logged = <div className="container-fluid">
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="username">User name:</label>
                                <input type="text" className="form-control" id="username" aria-describedby="emailHelp" placeholder="Enter user name" onChange={this.handleChange} />
                                <small id="emailHelp" className="form-text text-muted">We'll never share your information with anyone else.</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password:</label>
                                <input type="password" className="form-control" id="password" placeholder="Password" onChange={this.handleChange} />
                            </div>
                            <div className="text-center">
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>                   
                        </form>
                    </div>
        }

        return(
            <div className="container">
                <h2 className="text-center">Login</h2>                
                {logged}
            </div>
        )
    }    
}

export default Five; 