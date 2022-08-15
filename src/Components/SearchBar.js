import React from 'react';

function SearchBar(props) {
    return (
        <div className="search-bar">
            <div className="search-bar-main">
                <input type="text" onChange={(e) => {
                    props.setText(e.target.value)
                }}/>
                <button type="button" onClick={()=>{props.setQuery(props.text)}}>Search</button>
            </div>
        </div>
    );
}

export default SearchBar;
