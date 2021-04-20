import React from 'react';
import yahoo from '../../../images/logos/yahoo.png';
import google from '../../../images/logos/google.png';
import linkedIn from '../../../images/logos/linkedIn.png';
import fiverr from '../../../images/logos/fiverr.png';
import microsoft from '../../../images/logos/microsoft.png';


const ClientCompany = () => {
    return (
        <div className="container my-5 py-5">
            <div className="row">
                <div className="col-md-2 mx-5">
                    <img style={{ width: '50px' }} className=" img-fluid" src={yahoo} alt="" />
                </div>

                <div className="col-md-2">
                    <img style={{ width: '80px' }} className=" img-fluid" src={google} alt="" />
                </div>

                <div className="col-md-2">
                    <img style={{ width: '90px' }} className="img-fluid" src={linkedIn} alt="" />
                </div>

                <div className="col-md-2">
                    <img style={{ width: '90px' }} className=" img-fluid" src={fiverr} alt="" />
                </div>

                <div className="col-md-2">
                    <img style={{ width: '100px' }} className=" img-fluid" src={microsoft} alt="" />
                </div>
            </div>
        </div>
    );
};

export default ClientCompany;