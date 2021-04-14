import React from 'react';
import quote from './../../../images/quote.png'
import './Testimonial.css';
import img1 from './../../../images/Ellipse 1.png';
import img2 from './../../../images/Ellipse 2.png';
import img3 from './../../../images/Ellipse 3.png';
import Tcard from '../Tcard/Tcard';
const Testimonial = () => {
   const card =[
       {
        description:' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis porro voluptas expedita placeat quis quibusdam error odio quia magni doloremque! Sed ipsam itaque dignissimos?',
        Image:img1,
        name:'Winson Herry',
        place:'California'
        },
       {
        description:' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis porro voluptas expedita placeat quis quibusdam error odio quia magni doloremque! Sed ipsam itaque dignissimos?',
        Image:img2,
        name:'Winson Herry',
        place:'California'
        },
        {
        description:' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis porro voluptas expedita placeat quis quibusdam error odio quia magni doloremque! Sed ipsam itaque dignissimos?',
        Image:img3,
        name:'Winson Herry',
        place:'California'
         }
   ]

   

    return (
        <div>
        <div className='d-flex justify-content-between main-box  align-items-center '>
                    <div className='ms-5'>
                        <h4>TESTIMONIAL</h4>
                        <h1>Whats Our Patient's <br/> Says</h1>
                    </div>
                <div>
                  <img src={quote}  alt="" />
                </div>
        </div>
        <div className='d-flex container'>
            {
                card.map(card=> <Tcard card={card}></Tcard> )
            }
        </div>

        </div>
    );
};

export default Testimonial;