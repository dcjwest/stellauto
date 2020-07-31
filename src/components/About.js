import React from 'react';
import carDoc from '../images/car-doc.jpg';

const About = ({ underline }) => {
    return (
        <section id='about'>
            <div className="title-wrapper container">
                <h2>Why Choose Us?</h2>
                {underline}
            </div>
            <div className='more-info container'>
                <img src={carDoc} alt='Doctor inspecting car with stethoscope.'/>
                <p>Stellenbosch Auto Clinic has been servicing and repairing vehicles in the Stellenbosch area since 2002.<br /><br />
                Our highly specialised and experienced experts are devoted to treating all kinds of car problems and conditions.</p>
            </div>
        </section>
    );
}

export default About;
