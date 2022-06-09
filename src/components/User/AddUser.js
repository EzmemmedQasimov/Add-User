import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from './AddUser.module.css';
import { useState } from "react";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {

    const [enteredUserName,setEnteredUserName] = useState('');
    const [enteredAge,setEnteredAge] = useState('');
    const [error, setError] = useState();
    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title:"Invalid input.",
                message:"Please enter a valid name and age"
            });
            return;
        }
        if (+enteredAge < 1) {
            setError({
                title:"Invalid age.",
                message:"Please enter a valid age"
            })
            return;
        }
        props.onUserAdd(enteredUserName, enteredAge);
        setEnteredAge('');
        setEnteredUserName('');
    }

    const userNameInputHandler = (event) => {
        setEnteredUserName(event.target.value)
    }
    const ageInputHandler = (event) => {
        setEnteredAge(event.target.value)
    }
    const errorHandler = () => {
        setError(null);
    }

    return (
       <div>
           {error && <ErrorModal onConfirm={errorHandler} title={error.title} message={error.message}/>}
           <Card className={classes.input}>
               <form onSubmit={addUserHandler}>
                   <label>User Name</label>
                   <input type="text" id="username" value={enteredUserName} onChange={userNameInputHandler}/>
                   <label>Age</label>
                   <input type="number" id="age" value={enteredAge} onChange={ageInputHandler}/>
                   <Button type="submit">Add user</Button>
               </form>
           </Card>
       </div>
    );

}
export default AddUser