import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Oscar from './oscar.jpg'

const OneSmall = () => {
    return(
        <div className="OneSmall">
        
            <div className="container-fluid text-center">
                <h2>About me</h2>
            </div>
            <div className="hola">
                <img src={Oscar} className="rounded-circle img-fluid oscarpic" alt="Cinque Terre" />
                <p className="text-left">Experienced Programmer and Operations Engineer with a demonstrated history of working in the information technology and services industry. Skilled in Python, Angular, and Node.js among other technologies. Strong information technology professional with a Associate's degree focused in Computer and Information Systems Technologies from Kalamazoo Valley Community College. </p>
                <div className="container-fluid text-center">
                    <NavLink to="/about" className="nav-link">More about me...</NavLink>
                </div>
            </div> 
        </div>
    )
}

export default OneSmall; 