import React from 'react';
import "./section.css";
import {featureInfo} from "../../constant/index.js";

const FeatureSection = () => {
    return (
        <div className='hero-section'>
            <h1 className='textPreset2 text-margin'>What you'll get</h1>
            <div className='featureContent'>
                {
                    featureInfo.map((item, index) => {
                        return (
                            <div key={index} className='featureItem'>
                                <img src={item.icon} alt={item.icon}/>
                                <h5 className='textPreset3 text-margin'>{item.subtitle}</h5>
                                <h6 className='textPreset6'>{item.featText}</h6>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    );
};

export default FeatureSection;