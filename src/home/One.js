import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Oscar from './oscar.jpg'


const One = () => {
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="container-fluid text-center">
                    <h2>About me</h2>
                </div>
                <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                    <p className="text-left">Hola Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum aut hic quibusdam eum dolor blanditiis dignissimos fuga laudantium. Dolores libero assumenda laborum numquam! Incidunt sed nesciunt, assumenda ducimus ipsa velit.</p>
                    <div className="container-fluid text-center">
                        <NavLink to="/about" className="nav-link">More about me...</NavLink>
                    </div>
                </div>
                <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                    <img src={Oscar} className="rounded-circle img-fluid oscarpic" alt="Cinque Terre" />
                </div>                
            </div>                       
        </div>
    )
}

export default One; 