import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const HeaderComponent = ({ filterText, setFilterText }) => {

    const filterHandleChange = (e) => {
        setFilterText(e.target.value);
    }


    return (
        <div className='header'>
            <h1 className='app-title'>Phone List</h1>
            <div className='search-input'>
                <input placeholder='user search' value={filterText} onChange={filterHandleChange} />
                <FontAwesomeIcon className='fa-icon' icon={faMagnifyingGlass} />
            </div>

        </div>
    );
};

export default HeaderComponent;