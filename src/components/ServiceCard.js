import React from 'react';

const ServiceCard = ({ title, imgSrc }) => {
    return (
        <div className='service-card container' title={title}>
            <img src={imgSrc} alt={title} />
            <h3 className='container'>{title}</h3>
        </div>
    )
}

export default ServiceCard;
