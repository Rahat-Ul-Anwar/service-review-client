import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../Services/ServiceCard';
 

const AllService = () => {

    const services = useLoaderData();

    return (
        <div className="grid m-5 py-5 gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {

                services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
            }
           
        </div>
    );
};

export default AllService;