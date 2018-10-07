import React from 'react';

import './Contact.css'

/*This just returns jsx, does not need a state so we don't need to import and extend component*/

/*props will have information received from the router here*/
const Contact = (props) => {
    // console.log(props)
    // setTimeout(() => {
    //     props.history.push('/about')
    // }, 2000);

    return(
        <div className="container">
            <h1 className="text-center">Contact</h1>
            <p className="three">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quasi sint quos! Magnam sapiente illo ad et ipsum eius quisquam unde fuga harum voluptatum! Alias in minus nulla error ratione?</p>

        </div>
    )
}

export default Contact;
