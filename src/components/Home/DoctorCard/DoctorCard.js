import React from 'react';

const DoctorCard = (props) => {
    const {name,phone,image} = props.doctor;
    return (
        
            <div className='col-md-4 text-center'>
            <div>
            <img src={image} style={{height:'400px'}} alt="" />
            </div>  
            <h5>{name}</h5>
            <small>{phone}</small>
            
            </div>
            
      
    );
};

export default DoctorCard;