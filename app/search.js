import React from "react";
const Search = () => {
    return (
        <div>
            <form className="search-form">
                <input className="search-bar" type="search" placeholder="Search" aria-label="Search" />
                <button className="search-button" type="submit">search</button>
            </form>
        </div>
        
    );
};
  
export default Search;
