import React from 'react';
import {home_real_life} from '/src/assets/images';
import './section.css'

const RealLifeSection = () => {
    return (
        <div className="realLife-section">
            <div >
                <h1 className='textPreset2'>Built for real life</h1>
                <h6 className='textPreset6 text-margin'>Cooking shouldn't be complicated. These recipes come in <br/>under 30 minutes of active time, fit busy schedules, and <br/>taste good enough to repeat.</h6>
                <h6 className='textPreset6'>Whether you're new to the kitchen or just need fresh <br/>ideas, we've got you covered.</h6>
            </div>
            <img className="realLife-img" src={home_real_life} />
        </div>
    );
};

export default RealLifeSection;