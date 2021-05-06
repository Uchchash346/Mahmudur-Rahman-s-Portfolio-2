import React from 'react';
import image12 from '../../images/12.jpg'
import image14 from '../../images/14.jpg'
import image13 from '../../images/13.jpg'
import './Blogs.css'
const Blogs = () => {
    return (
        <section id="blogs">
            <h3 class="text-center pt-5 mt-5 mb-3 project-heading-area">Blogs</h3>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 d-flex align-items-stretch">
                        <div className="card">
                            <img src={image12} class="card-img-top" alt="" />
                            <div className="card-body">
                                <h5 class="card-title text-center project-area">ওয়েব ডেভেলপম্যান্ট এর কমপ্লিট রোডম্যাপ — ওস্তাদ সামনে জ্যাম, গাড়ি
                                ঘুরায়া লন।</h5>
                                <a href="https://medium.com/@mru416/%E0%A6%93%E0%A7%9F%E0%A7%87%E0%A6%AC-%E0%A6%A1%E0%A7%87%E0%A6%AD%E0%A7%87%E0%A6%B2%E0%A6%AA%E0%A6%AE%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%A8%E0%A7%8D%E0%A6%9F-%E0%A6%8F%E0%A6%B0-%E0%A6%95%E0%A6%AE%E0%A6%AA%E0%A7%8D%E0%A6%B2%E0%A6%BF%E0%A6%9F-%E0%A6%B0%E0%A7%8B%E0%A6%A1%E0%A6%AE%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%AA-%E0%A6%93%E0%A6%B8%E0%A7%8D%E0%A6%A4%E0%A6%BE%E0%A6%A6-%E0%A6%B8%E0%A6%BE%E0%A6%AE%E0%A6%A8%E0%A7%87-%E0%A6%9C%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%AE-%E0%A6%97%E0%A6%BE%E0%A7%9C%E0%A6%BF-%E0%A6%98%E0%A7%81%E0%A6%B0%E0%A6%BE%E0%A7%9F%E0%A6%BE-%E0%A6%B2%E0%A6%A8-1ec695269260" class="btn button-area"
                                    target="_blank">Click Here</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 d-flex align-items-stretch">
                        <div className="card">
                            <img src={image13} class="card-img-top" alt="" />
                            <div class="card-body">
                                <h5 class="card-title text-center project-area">The Superpower of String — JavaScript</h5>
                                <a href="https://mru416.medium.com/the-superpower-of-string-javascript-a46c7008927" class="btn button-area"
                                    target="_blank">Click Here</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 d-flex align-items-stretch">
                        <div className="card">
                            <img src={image14} class="card-img-top" alt="" />
                            <div class="card-body">
                                <h5 class="card-title text-center project-area">Don’t catch Your Girlfriends error, catch your programs Error😂— JavaScript</h5>
                                <a href="https://mru416.medium.com/dont-catch-your-girlfriends-error-catch-your-programs-javascript-787a342783cb" class="btn button-area"
                                    target="_blank">Click Here</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blogs;