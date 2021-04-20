import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <section className="contact footer-bg my-5 py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <h2>24/7 Online Support</h2>
                        <p style={{ fontWeight: '100', fontSize: '14px', marginTop: '20px' }}>
                        We always listen to our students. Any time they are in a problem, our team is always online for providing support to them. Even at night, we are online for your projects ongoing.
                        </p>
                    </div>
                    <div className="col-md-7">
                        <div className="col-md-9 mx-auto">
                            <form action="">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="  Your Email Address " required />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="  Your Name " />
                                </div>
                                <div className="form-group">
                                    <textarea name="" className="form-control" id="" cols="" rows="7" placeholder="Message "></textarea>
                                </div>
                                <div className="form-group">
                                    <button style={{ width: '170px', backgroundColor: '#f2b400', color: 'white' }} type="button" className="btn"> Send </button>
                                </div>
                            </form>
                        </div>

                    </div>

                </div>
                <small className='d-block text-center mt-5'>@Learn With Me,{new Date().getFullYear()} All Rights Reserved.</small>
            </div>
        </section>
    );
};

export default Footer;