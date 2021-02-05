import React from 'react';
import './SearchBox.css';

function SearchBox(props) {
    const {handleFocus, handleInput, searchContactName, isActive} = props;
    return (
        <div>
            {isActive && <label className="label_transition" htmlFor="id_select"> Contacts </label>}
            <input 
                id="id_select"
                className="input_searchBox"
                onFocus={handleFocus} 
                onChange={handleInput} 
                type='text' 
                value={searchContactName} 
                placeholder={isActive ? 'Type or search...': 'Contacts'
                }/>   
        </div>
    )
}

export default SearchBox;