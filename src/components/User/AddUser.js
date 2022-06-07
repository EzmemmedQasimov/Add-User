const AddUser = (props) => {

    const addUserHandler = (event) => {
        event.preventDefault();        
    }

   return (
    <form onSubmit={addUserHandler}>
        <label>User Name</label>
        <input type="text" id="username" />
        <label>Age</label>
        <input type="number" id="age" />
    </form>  
   );

}
export default AddUser