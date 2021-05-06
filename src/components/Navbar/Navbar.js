import React from 'react';

const Navbar = () => {
    return (
        <nav class="navbar container navbar-expand-lg navbar-light ">
            <div class="container-fluid">
                <a class="navbar-brand text-white fs-4" href="#about" >Mahmudur Rahman</a>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul class="navbar-nav ">
                        <li class="nav-item">
                            <a class="nav-link active text-white fs-4" aria-current="page" href="#about" >About
                                Me</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active text-white fs-4" aria-current="page" href="#skills"
                            >Skills</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active text-white fs-4" aria-current="page" href="#projects"
                            >Projects</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active text-white fs-4" aria-current="page" href="#blogs" >Blogs</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active text-white fs-4" aria-current="page" href="#contact" >Contact
                                Me</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        // <nav class="navbar navbar-expand-lg navbar-light">
        //     <div class="container-fluid">
        //         <div class="collapse navbar-collapse" id="navbarSupportedContent">
        //             <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        //                 <li class="nav-item">
        //                     <a class="nav-link ms-5 text-#FFFFFF" aria-current="page" href="#">Home</a>
        //                 </li>
        //                 <li class="nav-item">
        //                     <a class="nav-link ms-5 text-#FFFFFF" href="#">About</a>
        //                 </li> 
        //                 <li class="nav-item">
        //                     <a class="nav-link ms-5 text-#FFFFFF" href="#">Dental Services</a>
        //                 </li>
        //                 <li class="nav-item">
        //                     <a class="nav-link ms-5 text-#FFFFFF" href="#">Reviews</a>
        //                 </li>
        //                 <li class="nav-item">
        //                     <a class="nav-link ms-5 text-#FFFFFF" href="#">Blog</a>
        //                 </li>
        //                 <li class="nav-item">
        //                     <a class="nav-link ms-5 me-5 text-#FFFFFF" href="#">Contact Us</a>
        //                 </li>
        //             </ul>
        //         </div>
        //     </div>
        // </nav>
    );
};

export default Navbar;