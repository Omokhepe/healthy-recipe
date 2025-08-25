import React from 'react';
import {FoodIcon, TimerIcon, userIcon} from "../../assets/icons/index.js";
import {Link} from "react-router-dom";

const RecipeItem = ({filterItems}) => {
    return (
        <>
            {
                filterItems.map((item, index) => {
                    return (
                        <div key={index} className="filterItem">
                            <img src={item.image.large} alt="img" className='mealImg'/>
                            <div className='filterEach'>
                                <h5 className='textPreset5 filter-text'>{item.title}</h5>
                                <h6 className='textPreset9' style={{maxWidth: "340px", margin: 0}}>{item.overview}</h6>
                                <div className='timerRange'>
                                    <h6 className='textPreset9'><img src={userIcon} alt='user-icon'/>Servings: {item.servings}</h6>
                                    <h6 className='textPreset9'><img src={TimerIcon} alt='timer-icon'/>Prep: {item.prepMinutes}</h6>
                                    <h6 className='textPreset9'><img src={FoodIcon} alt='plate-icon'/>Cook: {item.cookMinutes}</h6>
                                </div>
                            </div>
                            <button className='btnSecondary textPreset8'>
                                <Link
                                    key={item.id}
                                    to={`/recipedetail/:${item.id}`}
                                    state={{item: item, title: item.title, filterItems:filterItems}}
                                    className="btnSecondary"
                                >
                                    View Recipes
                                </Link>
                            </button>
                        </div>
                    )
                })
            }
        </>
    );
};

export default RecipeItem;