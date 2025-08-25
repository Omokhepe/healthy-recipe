import {motion} from 'framer-motion';
import {CallToAction, FeatureSection, HealthySection, RealLifeSection} from './section';
import './Home.css';

import React from 'react';

const Home = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}   // starting state
            animate={{ opacity: 1, x: 0 }}    // animate in
            exit={{ opacity: 0, x: 50 }}      // animate out
            transition={{ duration: 0.5 }}
            className="home">
            <section id="health-section">
                <HealthySection />
            </section>
            <section id="feature-section">
                <FeatureSection />
            </section>
            <section id="realLife-section">
                <RealLifeSection />
            </section>
            <section id="action-section">
                <CallToAction />
            </section>

        </motion.div>
    );
};

export default Home;