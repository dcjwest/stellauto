import React from 'react';
import { IconContext } from 'react-icons';
import { MdLocalPhone, MdEmail, MdLocationOn } from 'react-icons/md';
const Contact = ({ underline }) => {
    return (
        <section id='contact'>
            <div className='title-wrapper container'>
                <h2>Contact Us</h2>
                {underline}
            </div>
            <div className='contact-body container'>
                <div className='info container'>
                    <p>Please feel free to reach out if we can be of any help to you.</p>
                    <ul className='container'>
                        <li>
                            <a className='contact-link' href='tel:0218833661'>
                                <IconContext.Provider value={{className: 'contact-icon'}}>
                                    <MdLocalPhone />
                                </IconContext.Provider>
                                <span>021 883 3661</span>
                            </a>
                        </li>
                        <li>
                            <a className='contact-link' href='mailto:office@stellauto.co.za'>
                                <IconContext.Provider value={{className: 'contact-icon'}}>
                                    <MdEmail />
                                </IconContext.Provider>
                                <span>office@stellauto.co.za</span>
                            </a>
                        </li>
                        <li>
                            <a className='contact-link' href='https://maps.google.com/maps?ll=-33.929836,18.851723&amp;z=16&amp;t=m&amp;hl=en&amp;gl=ZA&amp;mapclient=embed&amp;cid=17531660066978041273' rel='noopener noreferrer'  target='_blank'>
                                <IconContext.Provider value={{className: 'contact-icon'}}>
                                    <MdLocationOn />
                                </IconContext.Provider>
                                <span>19 George Blake St, Plankenbrug</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='map container'>
                <iframe title='Stellenbosch Auto Clinic location' src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.439134796948!2d18.849534014924647!3d-33.92983192965992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcdb28bd0ae34db%3A0xf34cf7f1b7208db9!2sStellenbosch%20Auto%20Clinic!5e0!3m2!1sen!2sza!4v1593162297996!5m2!1sen!2sza' width='400' height='300' frameBorder='0' allowFullScreen='' aria-hidden='false' tabIndex='0'></iframe>
                </div>
            </div>
        </section>
    );
}

export default Contact;
