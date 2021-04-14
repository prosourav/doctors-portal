import React from 'react';
import './Tcard.css'
const Tcard = (props) => {
    const {name,place,description,Image} = props.card;
    // console.log(props.card);
    return (
        <div className='text-center card'>
        <div>
        <p style={{fontSize:'19px'}}>{description}</p>
        </div>
        <div className='d-flex justify-content-center align-items-center' style={{paddingTop:'45px'}}>
            <div>
            <img src={Image}  alt="" srcSet=""/>
            </div>
            <div className='ms-3'>
            <h4 style={{color:'aqua'}}>{name}</h4>
            <small>{place}</small>
            </div>
        </div>
        </div>
    );
};

export default Tcard;


