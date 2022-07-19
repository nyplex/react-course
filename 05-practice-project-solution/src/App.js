import React, { useState, Fragment } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
    const [usersList, setUsersList] = useState([]);

    const addUserHandler = (uName, uAge) => {
        setUsersList((prevUsersList) => {
            return [
                { name: uName, age: uAge, id: Math.random().toString() },
                ...prevUsersList,
            ];
        });
    };

    return (
        <Fragment>
            <AddUser onAddUser={addUserHandler} />
            <UsersList users={usersList} />
        </Fragment>
    );
}

export default App;
