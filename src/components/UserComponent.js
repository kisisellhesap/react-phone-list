import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
const UserComponent = ({ user, deleteUser, id }) => {


    return (
        <div className='user-container'>
            <div className='user-name-phone-wrapper'>
                <div className='user-name-container'>
                    <h4 className='user-name-title'>NAME</h4>
                    <span className='user-name'>{user.name}</span>
                </div>
                <div className='user-phone-container'>
                    <h4 className='user-phone-title'>PHONE NUMBER</h4>
                    <span className='user-phone-number'>{user.phone_number}</span>
                </div>
            </div>
            <div className='user-controller' onClick={(e) => deleteUser(id, e)}>
                <FontAwesomeIcon className='fa-icon' icon={faTrashCan} />
            </div>
        </div>
    );
};

export default UserComponent;