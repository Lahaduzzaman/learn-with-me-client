import React from 'react';
import frame from '../../../images/logos/Frame.png';
const HeaderMain = () => {
    return (
        <main style={{ height: '546px' }} className=" row d-flex align-items-center py-5">
            <div className="col-md-4 offset-md-1 mt-5">
                <h1 style={{ color: '#1d13df' }}>Welcome to<br />Learn With Me</h1>
                <p className="mt-5 mb-5">Learn With Me one of the leading IT training institutes in Bangladesh offers the best training opportunities. It has been playing a vital role to eradicate the unemployment problem since 2018. Enriched with quality training this institute has never failed to help the individuals to reveal their talents making harmony between creativity and IT.We dedicatedly provide flexible training options such as online training, 24/7 support, lifetime post-training support, job placement and so on. We always maintain the standards of excellence which are visible on Google Reviews.</p>
                <button style={{ width: '170px', backgroundColor: '#ff007c', color: 'white' }} className="btn">Hire Us</button>
            </div>
            <div className="col-md-6">
                <img style={{ width: '624px' }} className="img-fluid" src={frame} alt="" />
            </div>
        </main>
    );
};

export default HeaderMain;