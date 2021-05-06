import React from 'react';
import image10 from '../../images/10.png'
import image11 from '../../images/11.png'
import image9 from '../../images/9.png'
import image3 from '../../images/3.png'
import image4 from '../../images/4.png'
import image8 from '../../images/8.png'
import './Project.css'
const Projects = () => {

    return (
        <section id="projects">
            <h3 class="text-center pt-5 mt-5 mb-5 project-area-heading">Projects</h3>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 d-flex align-items-stretch">
                        <div className="card">
                            <img src={image10} class="card-img-top" alt="" />
                            <div className="card-body">
                                <h5 class="card-title text-center project-name-area">BD Bazar</h5>
                                <p class="card-text project-area">Technologies: JavaScript(ES6), React JS, Node JS, Mongo DB, Firebase
                                Authentication, React Bootstrap</p>
                                <a href="https://github.com/Uchchash346/BD-Bazar" class="btn button-area"
                                    target="_blank">Github Link</a>
                                <a href="https://bd-bazar-50ce8.web.app/" class="btn button-area" target="_blank">Live
                                Site</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 d-flex align-items-stretch">
                        <div className="card">
                            <img src={image11} class="card-img-top" alt="" />
                            <div class="card-body">
                                <h5 class="card-title text-center project-name-area">Team Tracker</h5>
                                <p class="card-text project-area">Technologies: JavaScript(ES6) , React JS, Firebase Authentication,
                                React Bootstrap</p>
                                <a href="https://github.com/Uchchash346/Team-Tracker" class="btn button-area"
                                    target="_blank">Github Link</a>
                                <a href="https://sad-shannon-1b110c.netlify.app/" class="btn button-area"
                                    target="_blank">Live Site</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 d-flex align-items-stretch">
                        <div className="card">
                            <img src={image9} class="card-img-top" alt="" />
                            <div class="card-body">
                                <h5 class="card-title text-center project-name-area">Slide Maker Pro</h5>
                                <p class="card-text project-area">Technologies: HTML5, CSS3, Bootstrap 4, Javascript(ES6)</p>
                                <a href="https://github.com/Uchchash346/Slide-Maker-Pro" class="btn button-area"
                                    target="_blank">Github Link</a>
                                <a href="https://uchchash346.github.io/Slide-Maker-Pro/" class="btn button-area"
                                    target="_blank">Live Site</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 pt-5 d-flex align-items-stretch">
                        <div className="card">
                            <img src={image3} class="card-img-top" alt="" />
                            <div class="card-body">
                                <h5 class="card-title text-center project-name-area">Panda-Ecommerce-Bootstrap</h5>
                                <p class="card-text project-area">Technologies: HTML5, CSS3, Bootstrap 4, Javascript(ES6)</p>
                                <a href="https://github.com/Uchchash346/Panda-Ecommerce-Bootstrap" class="btn button-area"
                                    target="_blank">Github Link</a>
                                <a href="https://uchchash346.github.io/Panda-Ecommerce-Bootstrap/" class="btn button-area"
                                    target="_blank">Live Site</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 pt-5 d-flex align-items-stretch">
                        <div className="card">
                            <img src={image4} class="card-img-top" alt="" />
                            <div class="card-body">
                                <h5 class="card-title text-center project-name-area">Penguin Fashion</h5>
                                <p class="card-text project-area">Technologies: HTML5, CSS3, Bootstrap 4, Javascript(ES6)</p>
                                <a href="https://github.com/Uchchash346/my-Assignment-2" class="btn button-area"
                                    target="_blank">Github Link</a>
                                <a href="https://uchchash346.github.io/my-Assignment-2/" class="btn button-area"
                                    target="_blank">Live Site</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 pt-5 d-flex align-items-stretch">
                        <div className="card">
                            <img src={image8} class="card-img-top" alt="" />
                            <div class="card-body">
                                <h5 class="card-title text-center project-name-area">Hard-Rock-Lyric-Search</h5>
                                <p class="card-text project-area">Technologies: HTML5, CSS3, Bootstrap 4, Javascript(ES6)</p>
                                <a href="https://github.com/Uchchash346/Hard-Rock-Lyric-Search" class="btn button-area"
                                    target="_blank">Github Link</a>
                                <a href="https://uchchash346.github.io/Hard-Rock-Lyric-Search/" class="btn button-area"
                                    target="_blank">Live Site</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;