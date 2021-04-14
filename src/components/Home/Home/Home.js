import React from 'react';
import Blog from '../Blog/Blog';
import Doctors from '../Doctors/Doctors';
import FeaturedService from '../FeaturedService/FeaturedService';
import Header from '../Header/Header';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';
import Contact from './../Contact/Contact';
import Footer from './../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Header/>
            <Services/>
            <FeaturedService/>
            <MakeAppointment/>
            <Testimonial/>
            <Blog/>
            <Doctors/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;

//  <MakeAppointment/>
// 
//