import './App.css';
import AddUser from './components/User/AddUser';
import UsersList from "./components/User/UsersList";
import {useState} from "react";

function App() {
    const [userList, setUserList] = useState([]);
    const addUserHandler = (uName,uAge) => {
        setUserList((prevUserList)=>{
            return [...prevUserList,{name:uName, age: uAge}]
        })
    }
    return (
        <div>
            <AddUser onUserAdd={addUserHandler}/>
            <UsersList users={userList}/>
        </div>
    );
}

export default App;
