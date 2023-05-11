import React, { useEffect, useState } from 'react';
import HeaderComponent from './HeaderComponent';
import AddUserComponent from './AddUserComponent';
import UserListComponent from './UserListComponent';


const PhoneList = () => {

    const initial_State = [
        { id: 1, name: "Jessica addurahman iblayoviç", phone_number: "+915 521 55 778" },
        { id: 2, name: "Ben", phone_number: "05346305454" },
        { id: 3, name: "Albert", phone_number: "+55 448 21 589" }
    ]

    const [phoneList, setPhoneList] = useState([]);
    const [filterText, setFilterText] = useState("");
    const [addUser, setAddUser] = useState({ name: "", phone_number: "" });

    useEffect(() => {
        const list = JSON.parse(localStorage.getItem("list"));
        if (list) {
            setPhoneList(list);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("list", JSON.stringify(phoneList));


    }, [phoneList]);

    return (
        <div className='phone-list'>
            <HeaderComponent filterText={filterText} setFilterText={setFilterText} />
            <AddUserComponent addUser={addUser} setAddUser={setAddUser} phoneList={phoneList} setPhoneList={setPhoneList} />
            <UserListComponent phoneList={phoneList} filterText={filterText} setPhoneList={setPhoneList} />
        </div>
    );
};

export default PhoneList;