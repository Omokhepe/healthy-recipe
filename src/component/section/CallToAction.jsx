import React from 'react';
import {useNavigate} from "react-router-dom";

const CallToAction = () => {
    const navigate = useNavigate();
    return (
        <div className="call-to-action">
            <div className="call-to-action__container">
                <h1 className='textPreset2'>Ready to cook smarter?</h1>
                <h6 className='textPreset6 text-margin'>Hit the button, pick a recipe, and get dinner on the table—fast.</h6>
                <button className='btnPrimary textPreset5 text-margin' onClick={()=> {
                    navigate('/recipe');
                    window.scrollTo(0, 0);
                }}>Browse recipes</button>
            </div>
        </div>
    );
};

export default CallToAction;