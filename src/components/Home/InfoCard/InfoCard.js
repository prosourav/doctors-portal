import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './InfoCard.css';

const InfoCard = ({data}) => {
 
    return (
        <div className='col-md-4 text-white info-card'>
        <div className={`d-flex info-container info-${data.background}`}>
        <div className='ms-5'>
         <FontAwesomeIcon  className='info-icon' icon={data.icon}></FontAwesomeIcon>
        </div>
            <div className='ms-3'>
            <h6>{data.title}</h6>
            <small>{data.description}</small>
            </div>
            </div>
        </div>
    );
};

export default InfoCard;

