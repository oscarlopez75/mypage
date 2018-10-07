import React from 'react';

import './About.css'

/*This just returns jsx, does not need a state so we don't need to import and extend component*/

const About = () => {
    return(
        <div className="container">
            <h1 className="text-center">About</h1>
            <p className="two">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quasi sint quos! Magnam sapiente illo ad et ipsum eius quisquam unde fuga harum voluptatum! Alias in minus nulla error ratione?</p>

        </div>
    )
}

export default About;