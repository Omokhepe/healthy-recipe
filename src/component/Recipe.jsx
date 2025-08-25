import React from 'react';
import { motion } from 'framer-motion';
import {FilterSection} from './section';

import './Recipe.css'

const Recipe = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}   // starting state
            animate={{ opacity: 1, x: 0 }}    // animate in
            exit={{ opacity: 0, x: 50 }}      // animate out
            transition={{ duration: 0.5 }}
            className="recipe">
            <section>
                <div className="recipe-content">
                    <h2 className='textPreset2'>Explore our simple, healthy recipes</h2>
                    <h5 className='textPreset6'>Discover eight quick, whole-food dishes that fit real-life schedules and taste <br/>amazing. Use the search bar to find a recipe by name or ingredient, or simply scroll <br/> list and let something delicious catch your eye.</h5>
                </div>
                <FilterSection/>
            </section>
        </motion.div>
    );
};

export default Recipe;