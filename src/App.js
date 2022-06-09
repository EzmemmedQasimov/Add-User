import './App.css';
import AddUser from './components/User/AddUser';
import UsersList from "./components/User/UsersList";
import {Fragment, useState} from "react";

function App() {
    const [userList, setUserList] = useState([]);
    const addUserHandler = (uName,uAge) => {
        setUserList((prevUserList)=>{
            return [...prevUserList,{name:uName, age: uAge}]
        })
    }
    return (
        <Fragment>
            <AddUser onUserAdd={addUserHandler}/>
            <UsersList users={userList}/>
        </Fragment>
    );
}

export default App;
