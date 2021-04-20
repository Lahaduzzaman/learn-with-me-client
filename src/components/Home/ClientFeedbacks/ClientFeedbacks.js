import React, { useEffect } from 'react';
import customer1 from '../../../images/customer-1.png';
import customer2 from '../../../images/customer-2.png';
import customer3 from '../../../images/customer-3.png';
import ClientFeedbackDetails from './ClientFeedbackDetails';
import './ClientFeedback.css';
import { useState } from 'react';


const ClientFeedbacks = () => {
    const [feedBack, setFeedBack] = useState([]);
    useEffect(() => {
        fetch('https://frozen-headland-36750.herokuapp.com/seeReview')
            .then(res => res.json())
            .then(data => setFeedBack(data))
    }, [])
    return (
        <div className="container feedback mt-5">
            <h3 style={{ color: ' #171B4E' }} className='font-weight-bold text-center'>
                <span className="text-success">REVIEWS</span>
            </h3>
            <div className="row mt-5">
                {
                    feedBack.map(feedback =>
                        <ClientFeedbackDetails feedback={feedback}
                            key={feedback._id}></ClientFeedbackDetails>)
                }
            </div>
        </div>
    );
};

export default ClientFeedbacks;