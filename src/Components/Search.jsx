import React from 'react';

const Search = props => {
    return (
        <div className="search">
            <input
                type="text"
                placeholder={"looking for trouble?"}
                onChange={(e) => props.handleSearch(e.target.value)}
            />
        </div>
    );
}

export default Search;

