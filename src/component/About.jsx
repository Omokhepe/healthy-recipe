import React from 'react';
import {motion} from 'framer-motion';
import {about_mission, beyond_plate} from "../assets/images";
import {CallToAction} from "./section";
import './About.css'


const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}   // starting state
            animate={{ opacity: 1, x: 0 }}    // animate in
            exit={{ opacity: 0, x: 50 }}      // animate out
            transition={{ duration: 0.5 }}
            className="about">
            <section className="aboutMissionContainer">
                <div className="about-content">
                    <button className='aboutBtn textPreset5'>Our mission</button>
                    <h1 className='textPreset2'>Help more people cook <br/>nourishing meals, <br/>more often.</h1>
                    <h6 className='textPreset6 text-margin'>Healthy Recipe Finder was created to prove that
                        healthy <br/>eating can be convenient, affordable, and genuinely delicious.</h6>
                    <h6 className='textPreset6'>We showcase quick, whole-food dishes that anyone can <br/>master—no
                        fancy equipment, no ultra-processed shortcuts<br/>—just honest ingredients and straightforward
                        steps.</h6>
                </div>
                <div>
                    <img src={about_mission} alt="about mission" className='missionImg'/>
                </div>
            </section>
            <section className="aboutExistContainer">
                <div className='existHdr'>
                   <h2 className='textPreset2'>Why we exist</h2>
                </div>
                <div className='existSideDet'>
                    <div className='exist-item'>
                        <span className="icon">➜</span>
                        <div>
                            <h4 className='textPreset4'>Cut through the noise.</h4>
                            <p className='textPreset6'>The internet is bursting with recipes, yet most busy cooks still default to take-away or packaged foods. We curate a tight collection of fool-proof dishes so you can skip the scrolling and start cooking.</p>
                        </div>
                    </div>
                    <div className='exist-item'>
                        <span className="icon">➜</span>
                        <div>
                            <h4 className='textPreset4'>Empower home kitchens.</h4>
                            <p className='textPreset6'>When you control what goes into your meals, you control how you feel. Every recipe is built around unrefined ingredients and ready in about half an hour of active prep.</p>
                        </div>
                    </div>
                    <div className='exist-item'>
                        <span className="icon">➜</span>
                        <div>
                            <h4 className='textPreset4'>Make healthy look good.</h4>
                            <p className='textPreset6'>High-resolution imagery shows you exactly what success looks like—because we eat with our eyes first, and confidence matters.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="aboutExistContainer">
                <div className='existHdr'>
                    <h2 className='textPreset2'>Our food philosophy</h2>
                </div>
                <div className='existSideDet'>
                    <div className='exist-item'>
                        <span className="icon">➜</span>
                        <div>
                            <h4 className='textPreset4'>Whole ingredients first.</h4>
                            <p className='textPreset6'>Fresh produce, grains, legumes, herbs, and quality fats form the backbone of every recipe.</p>
                        </div>
                    </div>
                    <div className='exist-item'>
                        <span className="icon">➜</span>
                        <div>
                            <h4 className='textPreset4'>Flavor without compromise.</h4>
                            <p className='textPreset6'>Spices, citrus, and natural sweetness replace excess salt, sugar, and additives.</p>
                        </div>
                    </div>
                    <div className='exist-item'>
                        <span className="icon">➜</span>
                        <div>
                            <h4 className='textPreset4'>Respect for time.</h4>
                            <p className='textPreset6'>Weeknight meals should slot into real schedules; weekend cooking can be leisurely but never wasteful.</p>
                        </div>
                    </div>
                    <div className='exist-item'>
                        <span className="icon">➜</span>
                        <div>
                            <h4 className='textPreset4'>Sustainable choices.</h4>
                            <p className='textPreset6'>Short ingredient lists cut down on food waste and carbon footprint, while plant-forward dishes keep things planet-friendly.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="aboutExistContainer">
                <div className="existSideDet">
                    <h1 className='textPreset2'>Beyond the plate</h1>
                    <p className='textPreset6 text-margin'>We believe food is a catalyst for community and well-being.
                        By sharing approachable recipes, we hope to:</p>
                    <ul>
                        <li>Encourage family dinners and social cooking.</li>
                        <li>Reduce reliance on single-use packaging and delivery waste.</li>
                        <li>Spark curiosity about seasonal produce and local agriculture.</li>
                    </ul>
                </div>
                <div >
                    <img src={beyond_plate} alt="about mission" className='plateImg'/>
                </div>
            </section>
            <section ><CallToAction/></section>

        </motion.div>
    );
};

export default About;