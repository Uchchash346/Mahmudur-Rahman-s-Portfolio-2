import React from 'react';
// import ProgressBar from 'react-animated-progress-bar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './Skills.css'
const Skills = () => { 
    return (
        <section id="skills" class="mt-5 pt-5">
        <div class="container mt-5 pt-5">
            <div class="row mt-5 pt-5">
                <div class="col-12">
                    <div class="text-center skills-heading-area">
                        <h2 class="mb-5" id="skills-technical-heading-area">Skills & Technical knowledge 😎</h2>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-12 col-lg-6">
                    <div class="text-center">
                        <h3 class=" mb-4 skills-technical-subheading-area">Skills</h3>
                    </div>
                    <div class="text-left">
                        <h4><i class="fa-color"><FontAwesomeIcon  icon={faArrowRight} style={{ 'color': "#58FAAC" }} />Web Design</i></h4>
                        <h4><i class="fa-color"><FontAwesomeIcon icon={faArrowRight} style={{ 'color': "#58FAAC" }} />Web Development</i></h4>
                        <h4><i class="fa-color"><FontAwesomeIcon icon={faArrowRight} style={{ 'color': "#58FAAC" }} />Responsive Design</i></h4>
                        <h4><i class="fa-color"><FontAwesomeIcon icon={faArrowRight} style={{ 'color': "#58FAAC" }} />Debugging</i></h4>
                        <h4><i class="fa-color"><FontAwesomeIcon icon={faArrowRight} style={{ 'color': "#58FAAC" }} />Version Control(Git)</i></h4>
                        <h4><i class="fa-color"><FontAwesomeIcon icon={faArrowRight} style={{ 'color': "#58FAAC" }} />Programming</i></h4>
                    </div>
                </div>

                <div class="col-12 col-lg-6">
                    <div class="text-center mb-4 ">
                        <h3 class="skills-technical-subheading-area">Technical knowledge</h3>
                    </div>
                    <div class="row">
                        <div class="col-12 col-lg-6">
                            <div class="text-left">
                                <h4><i class="fa-color"><FontAwesomeIcon icon={faArrowRight} style={{ 'color': "#58FAAC" }} />HTML5</i></h4>
                                <h4><i class="fa-color"><FontAwesomeIcon icon={faArrowRight} style={{ 'color': "#58FAAC" }} />CSS3</i></h4>
                                <h4><i class="fa-color"><FontAwesomeIcon icon={faArrowRight} style={{ 'color': "#58FAAC" }} />Bootstrap4</i></h4>
                                <h4><i class="fa-color"><FontAwesomeIcon icon={faArrowRight} style={{ 'color': "#58FAAC" }} />JavaScript(ES6)</i></h4>
                                <h4><i class="fa-color"><FontAwesomeIcon icon={faArrowRight} style={{ 'color': "#58FAAC" }} />React JS</i></h4>
                                <h4><i class="fa-color"><FontAwesomeIcon icon={faArrowRight} style={{ 'color': "#58FAAC" }} />Material UI</i></h4>
                                <h4><i class="fa-color"><FontAwesomeIcon icon={faArrowRight} style={{ 'color': "#58FAAC" }} />Mongo DB</i></h4>
                                <h4><i class="fa-color"><FontAwesomeIcon icon={faArrowRight} style={{ 'color': "#58FAAC" }} />Node JS</i></h4>
                                <h4><i class="fa-color"><FontAwesomeIcon icon={faArrowRight} style={{ 'color': "#58FAAC" }} />Python</i></h4>
                            </div>
                        </div>
                        <div class="col-12 col-lg-6">
                            <div class="developement-tec text-left">
                                <h4><i class="fa-color"><FontAwesomeIcon icon={faArrowRight} style={{ 'color': "#58FAAC" }} />Django</i></h4>
                                <h4><i class="fa-color"><FontAwesomeIcon icon={faArrowRight} style={{ 'color': "#58FAAC" }} />PHP</i></h4>
                                <h4><i class="fa-color"><FontAwesomeIcon icon={faArrowRight} style={{ 'color': "#58FAAC" }} />MySQL</i></h4>
                                <h4><i class="fa-color"><FontAwesomeIcon icon={faArrowRight} style={{ 'color': "#58FAAC" }} />Wordpress</i></h4>
                                <h4><i class="fa-color"><FontAwesomeIcon icon={faArrowRight} style={{ 'color': "#58FAAC" }} />Laravel</i></h4>
                                <h4><i class="fa-color"><FontAwesomeIcon icon={faArrowRight} style={{ 'color': "#58FAAC" }} />React Native</i></h4>
                                <h4><i class="fa-color"><FontAwesomeIcon icon={faArrowRight} style={{ 'color': "#58FAAC" }} />Next JS</i></h4>
                                <h4><i class="fa-color"><FontAwesomeIcon icon={faArrowRight} style={{ 'color': "#58FAAC" }} />Latex</i></h4>
                                <h4><i class="fa-color"><FontAwesomeIcon icon={faArrowRight} style={{ 'color': "#58FAAC" }} />Express JS</i></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="text-center ">
                        <h2 class="skills-heading-area">Skills & Technical knowledge</h2>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-12 col-lg-6">
                    <div class="text-center">
                        <h3 class=" mb-4 skills-heading-area">Skills</h3>
                    </div>
                    <div class="text-left">
                        <h4 class="topic-area">Web Design</h4>
                        <h4 class="topic-area">Web Development</h4>
                        <h4 class="topic-area">Responsive Design</h4>
                        <h4 class="topic-area">Debugging</h4>
                        <h4 class="topic-area">Version Control(Git)</h4>
                        <h4 class="topic-area">Programming</h4>
                    </div>
                </div>

                <div class="col-12 col-lg-6">
                    <div class="text-center mb-4">
                        <h3 class="skills-heading-area">Technical knowledge</h3>
                    </div>
                    <div class="row">
                        <div class="col-12 col-lg-6">
                            <div class="text-left">
                                <h4 class="topic-area">HTML5</h4>
                                <h4 class="topic-area">CSS3</h4>
                                <h4 class="topic-area">Bootstrap4</h4>
                                <h4 class="topic-area">JavaScript(ES6)</h4>
                                <h4 class="topic-area">React JS</h4>
                                <h4 class="topic-area">Material UI</h4>
                                <h4 class="topic-area">Mongo DB</h4>
                                <h4 class="topic-area">Node JS</h4>
                                <h4 class="topic-area">Python</h4>
                            </div>
                        </div>
                        <div class="col-12 col-lg-6">
                            <div class="developement-tec text-left">
                                <h4 class="topic-area">Django</h4>
                                <h4 class="topic-area">PHP</h4>
                                <h4 class="topic-area">MySQL</h4>
                                <h4 class="topic-area">Wordpress</h4>
                                <h4 class="topic-area">Laravel</h4>
                                <h4 class="topic-area">React Native</h4>
                                <h4 class="topic-area">Next JS</h4>
                                <h4 class="topic-area">Latex</h4>
                                <h4 class="topic-area">Express JS</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
    </section>
    );
};

export default Skills;