import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {  faLinkedin, faTwitterSquare, faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import './Footer.css'
const Footer = () => {
    return (
        <div className="container">
            <div className="row">
                <div class="col-12 text-center">
                <p class="font-bitter footer-text-area">copyright &copy; Mahmudur Rahman</p>
                <div class="social-link mt-2">
                    <div class="row">
                        <div>
                        <a class="fa-color fa-2x" target="_blank" href="https://www.linkedin.com/in/mahmudur-rahman-47310016b/"><FontAwesomeIcon icon={faLinkedin} style={{ 'color': "#ff4a57" }} /></a>
                            <a class="fa-color fa-2x" target="_blank" href="https://twitter.com/Mahmudu27467433"><FontAwesomeIcon icon={faTwitterSquare} style={{ 'color': "#ff4a57" }} /></a>
                            <a class="fa-color fa-2x" target="_blank" href="https://github.com/Uchchash346"><FontAwesomeIcon icon={faGithubSquare} style={{ 'color': "#ff4a57" }} /></a>
                            <a class="fa-color fa-2x" target="_blank" href="#"><FontAwesomeIcon icon={faEnvelope} style={{ 'color': "#ff4a57" }} /></a>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;