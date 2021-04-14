import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className='footer container-fluid'>
        <div className='d-flex justify-content-evenly '>
        <div className='mx-4 mt-5 pt-3'>
        <p>Lorem ipsum dolor, sit amet consectet elit.</p>
        <p>Lorem ipsum dolor, sit at.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <p>Lorem ipsum dolor, sit amet cons.</p>
        <p>Lorem ipsum dolor</p>
        </div>
        <div className='mx-4'>
        <h3>Services</h3>
        <p>Lorem ipsum dolor, sit amet consectet elit.</p>
        <p>Lorem ipsum dolor, sit at.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <p>Lorem ipsum dolor, sit amet cons.</p>
        <p>Lorem ipsum dolor</p>
        <p>Lorem ipsum dolor, sit at.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>
        <div className='mx-4'>
        <h3>Oral Health</h3>
        <p>Lorem ipsum dolor, sit amet consectet elit.</p>
        <p>Lorem ipsum dolor, sit at.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <p>Lorem ipsum dolor, sit amet cons.</p>
        <p>Lorem ipsum dolor</p>
        <p>Lorem ipsum dolor, sit at.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>    
        <div className='mx-4'>
        <h3>Our Address</h3>
        <p>Lorem ipsum dolor, sit amet consectet elit.</p>
        <p>Lorem ipsum dolor, sit at.</p>
        <div>
        
        </div>
        Call Now<br/>
        <button style={{background:'aqua'}}>1234567891</button>
        </div>
        </div>

        <p style={{marginLeft:'42%',marginTop:'4%'}}>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
        </div>
    );
};

export default Footer;