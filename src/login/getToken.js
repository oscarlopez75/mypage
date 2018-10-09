import axios from 'axios';

var GetToken = (props) => {
    return new Promise((resolve, reject) => {
        
        let axiosConfig = {
            headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Accept": "application/json"
            }
        }

        let body = {
            username: props.username,
            password: props.password
        }
        
        axios.post('https://www.oscarcomputerguy.com/login', body, axiosConfig)
            .then(result => {                
                props.auth = true; 
                sessionStorage.setItem('username', result.data.username);
                sessionStorage.setItem('role', result.data.role);
                sessionStorage.setItem('token', result.data.jwt);                          
                resolve(props);
            })
            .catch(err => {
                console.log(err);
                reject(props);
            })
    });
    
}


export default GetToken;