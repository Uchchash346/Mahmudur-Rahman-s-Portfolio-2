import React from 'react';
import './Banner.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faLinkedin, faTwitterSquare, faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import bannerImage from '../../images/banner-img.png'
import Typical from 'react-typical'
const Banner = () => {
    return (
        <div class="pt-5 mt-5 " id="about">
            <div class="container banner-area ">
                <div className="row pt-5 mt-5">
                    <div className="col-sm-8 pt-5 mt-5">
                        <h1 class="banner-text-area ">Hello I'M 👋</h1>
                        <h1 class="banner-text-area "><span id="developers-name">Mahmudur Rahman</span></h1>
                        <h2 class="banner-text-area">I'm a{' '}
                            <Typical
                                loop={Infinity}
                                wrapper="b"
                                steps={[
                                    'MERN stack Web Developer ', 1000,
                                    'Django Developer', 1000,
                                    'Wordpress Developer', 1000,
                                    'Programmer', 1000,
                                ]}
                            />
                        </h2>
                        <p class="banner-text-area ">A passionate web developer who always interested to make any web applications. My strength is <br /> I can learn new technology quickly.😃</p>
 
                        <div class="banner-social-icon">
                            <a class="fa-color fa-2x" target="_blank" href="https://www.linkedin.com/in/mahmudur-rahman-47310016b/"><FontAwesomeIcon icon={faLinkedin} style={{ 'color': "#ff4a57" }} /></a>
                            <a class="fa-color fa-2x" target="_blank" href="https://twitter.com/Mahmudu27467433"><FontAwesomeIcon icon={faTwitterSquare} style={{ 'color': "#ff4a57" }} /></a>
                            <a class="fa-color fa-2x" target="_blank" href="https://github.com/Uchchash346"><FontAwesomeIcon icon={faGithubSquare} style={{ 'color': "#ff4a57" }} /></a>
                            <a class="fa-color fa-2x" target="_blank" href="#"><FontAwesomeIcon icon={faEnvelope} style={{ 'color': "#ff4a57" }} /></a>
                        </div>
                        <button type="button" class="btn button-area ">Hire Me</button>
                        <a href="https://drive.google.com/file/d/1Lp-sz46gj4eSAO-QZaaofvcVWkHWKTV6/view?usp=sharing"
                            target="_blank"><button type="button" class="btn  button-area">Resume</button></a>
                    </div>
                    <div class="col-sm-4  pt-5">
                        <img src={bannerImage} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;