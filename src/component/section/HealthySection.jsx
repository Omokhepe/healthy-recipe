import React from 'react';
import {homeHero} from '/src/assets/images'
import './section.css'
import {useNavigate} from "react-router-dom";

const HealthySection = () => {
    const navigate = useNavigate()
    return (
        <div className='hero-section'>
            <h1 className="textPreset1 text-margin">Healthy meals, zero fuss</h1>
            <h5 className="textPreset6 text-margin"> Discover eight quick, whole-food recipes that you can cook tonight<br/>—no processed junk, no guesswork.</h5>
            <div className='heroContainer'>
                <button className="btnPrimary textPreset5" onClick={()=> navigate("/recipe")}>Start exploring</button>
                <img src={homeHero} alt="" className="home-image" />
            </div>
        </div>
    );
};

export default HealthySection;