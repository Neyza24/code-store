import React from 'react';
import { setSearchTerm, clearSearchTerm } from './searchTermSlice';


const searchIcon = './images/search.svg';
const clearIcon = './images/clear.svg';


const SearchTerm = ({searchTerm, dispatch}) => {
    const onSearchTermChangeHandler = (e) => {
        const userInputValue = e.target.value;
        dispatch(setSearchTerm(userInputValue));
    }

    const onClearSearchTermHandler = () => {
        dispatch(clearSearchTerm());
    }
 
    return (
        <div id='search-container'>
            <img id='search-icon' src={searchIcon} alt='search-icon'/>
            <input 
                id='search'
                type='text'
                value={searchTerm}
                onChange={onSearchTermChangeHandler}
                placeholder='Search products'
            />
            {
                searchTerm.length > 0 && (
                    <button
                        onClick={onClearSearchTermHandler}
                        type='button'
                        id='search-clear-button'
                    >
                        <img
                            src={clearIcon}
                            alt='clear-input'
                        />
                    </button>
                )
            }
        </div>
    )
}

export default SearchTerm;