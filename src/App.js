import React from "react";
import './App.css';
import NavBar from './Components/NavBar';
import Header from './Components/Header';
import AboutMe from './Components/AboutMe';
import Projects from './Components/Projects';
import Media from './Components/Media';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App(){
    return (
        <div className="App">
            <NavBar/>
                                       
        </div>
    );
}

export default App;