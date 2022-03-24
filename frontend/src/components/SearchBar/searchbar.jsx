import React, { useState } from "react";
import './SearchBar.css'



const SearchBar = (props) => {

    const [searchRequest, setSearchRequest] = useState('')

    const handleSubmit = (event) => {
    event.preventDefault();
    console.log(searchRequest)
    props.getSearchResults(searchRequest);
    setSearchRequest('');
    } 

    return ( 
        <form>
            <div>
                <input className="search-bar" type="text" placeholder="Search YouTube" value={searchRequest} onChange={(event) => setSearchRequest(event.target.value)} />
            </div>
            <button className="search-bar" onClick={handleSubmit} type="submit">Search</button>
        </form>
    );
}
 
export default SearchBar;