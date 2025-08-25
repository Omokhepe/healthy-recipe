import React from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import {logo} from '../assets/images';
import {navLinks} from "../constant";
import "./Nav.css";

const Nav = () => {

    const navigate = useNavigate();
    return (
        <header>
            <nav className="nav">
                <a href='/'>
                    <img
                        src={logo}
                        alt="logo"
                    />
                </a>
                <ul className="navLabel">
                    {navLinks.map((link, index) => {
                        return (
                            <li key={index}>
                                <NavLink to={link.href} className={`navLink textPreset5 ${({isActive}) => (isActive? 'active':"")}`}>{link.label}</NavLink>
                            </li>
                        )
                    })}
                </ul>
                <button className="btnPrimary textPreset5 nav-btn" onClick={()=>navigate("/recipe")}>Browse Recipes</button>
            </nav>
        </header>
    );
};

export default Nav;