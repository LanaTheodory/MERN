import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confirmPassword, setConfirmPassword] = useState("");  
    const [firstNameError, setFirstNameError]  = useState("");  
    const [lastNameError, setLastNameError]  = useState("");  
    const [emailError, setEmailError]  = useState("");  
    const [passwordError, setPasswordError]  = useState("");  
    const [passwordMessage, setPasswordMessage]  = useState("");  
    
    const passwordConfirmation =  (e) => {
    setConfirmPassword(e.target.value) 
    if(e.target.value !== password){
        setPasswordMessage("Passwords must match");
    }else{
        setPasswordMessage("");
    }

    }
    const firstNameValidation  = (e) =>{
     if(e.target.value.length< 2){
         setFirstNameError(" field must be at least 2 characters.")
     } else {
        setFirstNameError("");
     }
     setFirstName(e.target.value);
    }
    const lastNameValidation  = (e) =>{
    if(e.target.value.length< 2){
        setLastNameError(" field must be at least 2 characters.")
    } else {
       setLastNameError("");
    }
    setLastName(e.target.value);
    }

    const emailValidation  = (e) =>{
    if(e.target.value.length< 5){
        setEmailError(" field must be at least 5 characters.")
    } else {
       setEmailError("");
    }
    setEmail(e.target.value);
    }
    const passwordValidation  = (e) =>{
    if(e.target.value.length< 5){
        setPasswordError(" field must be at least 5 characters.")
    } else {
       setPasswordError("");
    }
    setPassword(e.target.value);
    }



    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName ,email, password };
        console.log("Welcome", newUser);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    };
    
    return(
    <div>
        <form onSubmit={ createUser } >
            <div class="col">
                <label class="form-label">First Name: </label> 
                <input class="form-control" type="text" onChange={firstNameValidation  } value={ firstName } />
                <p>{firstNameError}</p>
            </div>
             <div class="col">
                <label class="form-label">Last Name: </label> 
                <input class="form-control" type="text" onChange={ lastNameValidation  } value={lastName}  />
                <p>{lastNameError}</p>
            </div>
            <div class="col">
                <label class="form-label">Email Address: </label> 
                <input class="form-control" type="email" onChange={ emailValidation  } value={email}/>
                <p>{emailError}</p>
            </div>
            <div class="col">
                <label class="form-label">Password: </label>
                <input class="form-control" type="password" onChange={ passwordValidation  } value={password} />
                <p>{passwordError}</p>
            </div>
              <div class="col">
                <label class="form-label">Confirm Password: </label>
                <input class="form-control" type="password" onChange={ passwordConfirmation } value={confirmPassword}/>
            <p>{passwordMessage }</p>
            </div >
            <input  class="btn btn-primary" type="submit" value="Create User" />
        </form>
        <table class="table">
            <tr class="table-primary">
                <td>First Name</td>
                <td>{firstName}</td>
            </tr>
            <tr class="table-primary col">
                <td>Last Name</td>
                <td>{lastName}</td>
            </tr>
            <tr class="table-primary">
                <td>Email</td>
                <td>{email}</td>
            </tr>
            <tr class="table-primary">
                <td>Password</td>
                {password ? <td>******</td> : <td></td>}
             
            </tr>
        </table> 
</div>

    );
};
    

export default UserForm;

