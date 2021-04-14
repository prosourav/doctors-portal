import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faMapMarker, faMarker, faPhone } from '@fortawesome/free-solid-svg-icons'
const BusinessInfo = () => {

    const infodata = [{
        title:'Opening Hours',
        description:'We are open 7 days',
        icon:faClock,
        background:'primary'
    },
    {
        title:'Visit Our location',
        description:'Brooklin New-York USA',
        icon:faMapMarker,
        background:'dark'
    },
    {
        title:'Call Us Now',
        description:'+1174874327',
        icon:faPhone,
        background:'primary'
    },
]
    return (
        <section className='d-flex justify-content-center'>
        <div className='w-75 row'>
        {
            infodata.map(data=><InfoCard data={data}></InfoCard>)
        }
        </div>
        </section>
    );
};

export default BusinessInfo;