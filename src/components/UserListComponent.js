import React from 'react';
import UserComponent from './UserComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRectangleList } from '@fortawesome/free-solid-svg-icons';

const UserListComponent = ({ phoneList, filterText, setPhoneList }) => {

    const filtered = phoneList.filter((user) => {

        return Object.keys(user).some((key) =>
            user[key].toString().toLowerCase().includes(filterText.toLowerCase())
        )
    })

    const deleteEffect = (e) => {
        const userContainer = e.target.parentElement;

        if (!userContainer.classList.contains("delete-effect")) {
            userContainer.classList.add("delete-effect");
        }

    }

    const deleteUser = (id, e) => {
        deleteEffect(e);
        setTimeout(() => {
            setPhoneList(phoneList.filter(user => user.id !== id));
        }, 500);
    }


    return (
        <div className='user-list'>
            <div className='user-list-header'>
                <h2 className='user-list-title'>User List</h2>
                <hr className='line' />
                <FontAwesomeIcon className='fa-icon-h' icon={faRectangleList} />
            </div>

            <div className='user-list-container'>

                {
                    filtered.map((user) => {
                        return (
                            <UserComponent key={user.id} id={user.id} user={user} deleteUser={deleteUser} />
                        )
                    })
                }

            </div>
        </div>
    );
};

export default UserListComponent;