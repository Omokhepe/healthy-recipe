import React, { useState } from "react";
import './DropdownFilter.css'
import {SearchIcon} from "../../assets/icons/index.js";

const SearchFilter = ({ data, onSearch }) => {
    const [query, setQuery] = useState("");

    const handleSearch = (e) => {
        const value = e.target.value;
        setQuery(value);

        // filter data
        const filtered = data.filter((item) =>
            item.title.toLowerCase().includes(value.toLowerCase())
        );

        onSearch(filtered); // send results to parent
    };

    return (
        <>
            <span ><img src={SearchIcon} alt='searchIcon'className="arrow-icon"/></span>
            <input
                id="search"
                type="text"
                placeholder="Search by name or ingredient..."
                value={query}
                onChange={handleSearch}
                className="search-input textPreset7"
            />
        </>

    );
};

export default SearchFilter;



