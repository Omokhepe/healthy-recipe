// import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom'
import {AnimatePresence} from "framer-motion";
import {Nav, Home, About, Recipe, RecipeDetail, ScrollToTop} from './component'
import './App.css';

function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/recipe" element={<Recipe/>} />
                <Route path="/recipedetail/:slug" element={<RecipeDetail/>} />
            </Routes>
        </AnimatePresence>
    );
}

function App() {
  return (
      <Router>
          <Nav/>
          <ScrollToTop/>
          <AnimatedRoutes />
      </Router>
  )
}

export default App
