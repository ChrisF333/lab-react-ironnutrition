//Search.js

import {useState} from 'react';
import {Input} from 'antd';

function Search(props) {
    const [searchTerm, setSearch] = useState('');

    const handleSearch = (e) => {
        setSearch(e.target.value);
        
        props.filterFoods(e.target.value);
    };

    return (
        <div className="SearchFoods">
            <p>Search: </p>
            <Input value={searchTerm} type="text" onChange={handleSearch}/>
        </div>
    );
}

export default Search;