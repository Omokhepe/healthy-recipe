import React from 'react';
import {useLocation, useParams, useNavigate} from 'react-router-dom';
import {FoodIcon, TimerIcon, userIcon} from "../assets/icons/index.js";
import './RecipeDetail.css'
import {RecipeItem} from "./section/index.js";

const RecipeDetail = () => {
    const {id} = useParams();
    const location = useLocation();
    const item = location.state?.item;
    const title = location.state?.title;
    const filterItems = location.state?.filterItems;
    const navigate = useNavigate();
    const firstThree = filterItems.slice(0, 3);


    if (!item) {
        return <p className='textPreset5'>No item Found</p>
    }

    return (
        <>
            <h6 onClick={() => {
                navigate(-1);
                window.scrollTo(0, 0);
            }} className='textPreset7 subtext'>
                Recipe / <span>{title}</span>
            </h6>
            <div className="recipeDetail">
                <img src={item.image.large} alt={item.title} className="recipeDetailImg"/>
                <div>
                    <h2 className='textPreset2'>{item.title}</h2>
                    <p>{item.overview}</p>
                    <div className='timerRange'>
                        <h6 className='textPreset9'><img src={userIcon} alt='user-icon'/>Servings: {item.servings}</h6>
                        <h6 className='textPreset9'><img src={TimerIcon} alt='timer-icon'/>Prep: {item.prepMinutes}</h6>
                        <h6 className='textPreset9'><img src={FoodIcon} alt='plate-icon'/>Cook: {item.cookMinutes}</h6>
                    </div>
                    <div>
                        <h4 className='textPreset4'>Ingredients:</h4>
                        {
                            item.ingredients.map((ingredientItems, i) => {
                                return (
                                    <h6 className='textPreset9 text-margin' key={i}>
                                        {ingredientItems}
                                    </h6>
                                )
                            })
                        }
                    </div>
                    <div>
                        <h4 className='textPreset4'>Instructions:</h4>
                        {
                            item.instructions.map((instructionItems, i) => {
                                return (
                                    <h6 className='textPreset9 text-margin' key={i}>
                                        {instructionItems}
                                    </h6>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <>
                <h4 className='textPreset3 subtext'>More Recipes</h4>
                <div className="recipeDetail more-recipes">
                    <RecipeItem filterItems={firstThree}/>
                </div>
            </>

        </>
    );
};

export default RecipeDetail;