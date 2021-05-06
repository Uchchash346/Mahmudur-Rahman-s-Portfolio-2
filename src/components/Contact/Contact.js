import React from 'react';
import './Contact.css'
const Contact = () => {
    return (
        <section id="contact">
            <div className="container">
                <div className="row">
                    <div class="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4">
                        <h3 class="text-center pt-5 mt-5 " style={{ 'color': "#ff4a57" }}>Contact With Me 😉</h3>
                        <div className="px-2">
                            <form action="" class="justify-content-center">
                                <div class="form-group">
                                    <label class="sr-only" htmlFor="">Name</label>
                                    <input type="text" class="form-control" placeholder="Jane Doe"></input>
                                </div>
                                <div className="form-group mb-2">
                                    <label class="sr-only" htmlFor="">Email</label>
                                    <input type="text" class="form-control" placeholder="jane.doe@example.com"></input>
                                </div>
                                <button type="submit" class="btn  btn-lg  submit-button-area">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;