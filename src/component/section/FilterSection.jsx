import React, { useState } from "react";
import {recipes, prepTime} from "../../constant";
import "./FilterSection.css"
import SearchFilter from "./DropdownFilter.jsx";
import {RecipeItem} from "./index.js";

const FilterDropdown = () => {
    const options = recipes;
    const [isPrepOpen, setIsPrepOpen] = useState(false);
    const [isCookOpen, setIsCookOpen] = useState(false);
    const [selectedPrepFilter, setSelectedPrepFilter] = useState("");
    const [selectedCookFilter, setSelectedCookFilter] = useState("");
    const [filterItems, setFilterItems] = useState(options);

    const handleRadioChange = (event) => {

        if(isPrepOpen && isCookOpen) {
            setSelectedPrepFilter(event.target.value);
            setSelectedCookFilter(event.target.value);
        }
        isPrepOpen? setSelectedPrepFilter(event.target.value): setSelectedCookFilter(event.target.value);
    };

    // Filtered options
    const filteredItem = options.filter((item) =>{
        if(selectedPrepFilter && selectedCookFilter){
            return item.prepMinutes === Number(selectedPrepFilter) || item.cookMinutes === Number(selectedCookFilter)
        }if(selectedPrepFilter){
            return item.prepMinutes === Number(selectedPrepFilter)
        }if(selectedCookFilter){
            return item.cookMinutes === Number(selectedCookFilter)
        }
        return true;
    });

    const dropdownRad = ()=>{
        return (
           <>
               {
                   prepTime.map((item, index) => {
                       return (
                           <div>
                               <label key={index} className="dropdown-item">
                                   <input
                                       type="radio"
                                       name="Prep Time"
                                       value={item.time}
                                       checked={selectedPrepFilter === item.time}
                                       onChange={handleRadioChange}
                                   /> {item.text}
                               </label>
                           </div>

                       )
                   })
               }
               <div >Clear</div>
           </>
        )
    }

    return (
        <>
            <div className="filter-tab">
                <div className='filter-droodown'>
                    <div className='dropdown'>
                        <button className='dropbtn textPreset7' onClick={()=>setIsPrepOpen(!isPrepOpen)}>
                            Max Prep time
                            <span className="arrow">{isPrepOpen ? "▲" : "▼"}</span>
                        </button>
                        {
                            isPrepOpen && (
                                <div className="dropdown-options">
                                    {dropdownRad()}
                                </div>
                            )
                        }
                    </div>
                    <div className='dropdown'>
                        <button className='dropbtn textPreset7' onClick={()=> setIsCookOpen(!isCookOpen)}>
                            Max Cook time
                            <span className="arrow">{isCookOpen ? "▲" : "▼"}</span>
                        </button>
                        {
                            isCookOpen && (
                                <div className="dropdown-options">
                                    {dropdownRad()}
                                </div>
                            )
                        }
                    </div>
                </div>

                <div>
                    <SearchFilter data={filteredItem} onSearch={setFilterItems}/>
                </div>
            </div>
            <div className="filter-meal">
                <RecipeItem filterItems={filteredItem}/>
            </div>

        </>

    );
};

export default FilterDropdown;
