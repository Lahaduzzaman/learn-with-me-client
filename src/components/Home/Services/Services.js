import React, { useEffect, useState } from 'react';
import ServiceDetails from '../ServiceDetails/ServiceDetails';
import './Services.css';


const Services = () => {
    const [service, setService] = useState([]);
    useEffect(() => {
        fetch("https://frozen-headland-36750.herokuapp.com/seeService")
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <section className="services my-5">
            <div className="container">
                <div className="secction-header text-center mt-5">
                    <h1><span className="text-success">Our Services</span></h1>
                </div>
                <div className="row mt-5">
                    {
                        service.map(service => <ServiceDetails
                            service={service}
                            key={service._id}
                        >

                        </ServiceDetails>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;