import React from 'react';
import { NavLink } from 'react-router-dom'
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCompass} from '@fortawesome/free-solid-svg-icons';
import logo from "../port3.png";
import Header from './Header';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Media from './Media';
import Typed from 'react-typed';




export const NavBar = () => {    
  return (
    <div>
    <nav class="navbar sticky-top navbar-expand-lg navbar-primary bg-primary ">
        <div class="container-fluid">
            <Typed
            className='typed-text'
            strings={["Jakub", "Grela","HTML", "CSS", "JAVA", "SPRING", "SQL", "Maven", "MongoDB"]}
            typeSpeed={60}
            backSpeed={80}
            loop
            />
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                <FontAwesomeIcon icon={faCompass} style={{color: "gray"}}/>
            </button>
            <div class='colapse navbar-collapse ' id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item active">
                        <Link class="nav-link "  activeClass="active" className="nav-link" to="header">Home</Link>
                        {/*<a class="nav-link " aria-current="page" href="#">Home</a>*/}
                    </li>
                    <li class="nav-item ">
                        <Link class="nav-link " activeClass="active" className="nav-link" to="AboutMe">About me</Link>
                        {/*<a class="nav-link" href="#">About Me</a>*/}
                    </li>
                    <li class="nav-item ">
                        <Link class="nav-link " activeClass="active" className="nav-link" to="Projects">PROJECTS</Link>
                        {/*<a class="nav-link" href="#">Projects</a>*/}
                    </li>
                    <li class="nav-item ">
                        <Link class="nav-link " activeClass="active" className="nav-link" to="Media">MEDIA</Link>
                        {/*<a class="nav-link" href="#">Media</a>*/}
                    </li>                 
                </ul>
            </div>
        </div>
    </nav>
        <Element name="header" className="element" >
            <Header/>
        </Element>
        <Element name="AboutMe" className="element" >
            <AboutMe/>
        </Element>
        <Element name="Projects" className="element" >
            <Projects/>
        </Element>
        <Element name="Media" className="element" >
            <Media/>
        </Element>
    </div>
    
  )
}

export default NavBar;