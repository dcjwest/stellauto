import React from 'react';
import ServiceCard from './ServiceCard';
import elecMech from '../images/services/electrical_mechanical.jpg';
import aircon from '../images/services/aircon.jpg';
import fuelInject from '../images/services/fuel_injection.jpg';
import engineManage from '../images/services/engine_management.jpg';
import majorService from '../images/services/major_service.jpg';
import diagnostic from '../images/services/diagnostics.jpg';

const Services = ({ underline }) => {
    return (
        <section id='services' className='container'>
            <div className='title-wrapper container'>
                <h2>Services</h2>
                {underline}
            </div>
            <div className='services-list'>
                <ServiceCard title='Auto Electrical & Mechanical' imgSrc={elecMech} />
                <ServiceCard title='Air Conditioning' imgSrc={aircon} />
                <ServiceCard title='Fuel Injection' imgSrc={fuelInject} />
                <ServiceCard title='Engine Management' imgSrc={engineManage} />
                <ServiceCard title='Major Services' imgSrc={majorService} />
                <ServiceCard title='Automotive Diagnostics' imgSrc={diagnostic} />
            </div>
        </section>
    );
}

export default Services
