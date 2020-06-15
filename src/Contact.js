import React from 'react';
import { IconContext } from 'react-icons';
import { MdLocalPhone, MdEmail, MdLocationOn } from 'react-icons/md';
const Contact = ({ underline }) => {
    return (
        <section id='contact' className='container'>
            <div className='title-wrapper container'>
                <h2>Contact Us</h2>
                {underline}
            </div>
            <p>Please feel free to reach out if we can be of any help to you.</p>
            <ul className='container'>
                <li>
                    <IconContext.Provider value={{className: 'contact-icon'}}>
                        <MdLocalPhone />
                    </IconContext.Provider>
                    <span className='contact-field'>021 883 3661</span>
                </li>
                <li>
                    <IconContext.Provider value={{className: 'contact-icon'}}>
                        <MdEmail />
                    </IconContext.Provider>
                    <span className='contact-field'>office@stellauto.co.za</span>
                </li>
                <li>
                    <IconContext.Provider value={{className: 'contact-icon'}}>
                        <MdLocationOn />
                    </IconContext.Provider>
                    <span className='contact-field'>19 George Blake St, Plankenbrug</span>
                </li>
            </ul>
        </section>
    );
}

export default Contact;
