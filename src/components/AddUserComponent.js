import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faUserPlus } from '@fortawesome/free-solid-svg-icons';


const AddUserComponent = ({ addUser, setAddUser, phoneList, setPhoneList }) => {

    const addHandleChange = (e) => {

        if (e.target.name === "phone_number") {
            const text = e.target.value.replace(/[^0-9+" "]/g, '');
            document.querySelector(".phone-number").value = text;
        }


        setAddUser({ ...addUser, [e.target.name]: e.target.value });

        if (e.key === "Enter") {
            addUserClick();
        }

    }



    const addUserClick = () => {


        if (addUser.name !== "" && addUser.phone_number !== "") {

            setPhoneList([...phoneList, { id: Date.now(), ...addUser }]);
        }
        setAddUser({ name: "", phone_number: "" });
    }




    return (
        <div className='add-user-container'>
            <div className='add-user-header'>
                <h2 className='add-user-title'>Add User</h2>
                <hr className='line' />
                <FontAwesomeIcon className='fa-icon-h' icon={faUserPlus} />
            </div>

            <div className='add-user-inputs'>
                <div className='add-user-inputs-wrapper'>
                    <div className='add-user-name-container'>
                        <h4>User Name</h4>
                        <input placeholder='enter the name' value={addUser.name} name='name' onChange={addHandleChange} autoComplete='off' />
                    </div>

                    <div className='add-user-phone-container'>
                        <h4>User Phone</h4>
                        <input placeholder='enter the phone' name='phone_number' value={addUser.phone_number} onChange={addHandleChange} className='phone-number' maxLength={15} autoComplete='off' />
                    </div>
                </div>


                <div className='add-user-controller'>
                    <FontAwesomeIcon className='fa-icon plusBtn' icon={faPlus} onClick={addUserClick} />
                </div>
            </div>
        </div>
    );
};

export default AddUserComponent;