import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Two = () => {
    return(
        <div className="container-fluid">
            <h2 className="text-center">Professional path</h2>
            <p>Experienced Programmer and Operations Engineer with a demonstrated history of working in the information technology and services industry. Skilled in Python, Angular, and Node.js among other technologies. Strong information technology professional with a Associate's degree focused in Computer and Information Systems Technologies from Kalamazoo Valley Community College. </p>
            <div className="container-fluid text-center">
                <NavLink to="/pro" className="nav-link">Read more...</NavLink>
            </div>
        </div>
    )
}

export default Two; 