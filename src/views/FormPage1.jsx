import { useState } from "react";

const FormPage1 = (props) => {
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPassword, setConfirmPassword] =useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 2){
            setFirstNameError("First name must be 2 or more characters.");
        } else {
            setFirstNameError("");
        }
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 2){
            setLastNameError("Last name must be 2 or more characters.");
        } else{ 
            setLastNameError("");
        }
        
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 5){
            setEmailError("Email must be 5 or more characters.");
        } else {
            setEmailError("");
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 8){
            setPasswordError("Password must be 8 or more characters.");
        } else {
            setPasswordError("");
        }
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        // if(e.target.value.length < 8){
        //     setConfirmPasswordError("Password must be 8 or more characters.");
        if (e.target.value !== password){
            setConfirmPasswordError("Passwords do not match.")
        } else {
            setConfirmPasswordError("");
        }

        
    }

    return(
        <>
            <fieldset>
                <legend>FormPage1.jsx</legend>
                <form>
                    <div>
                        <label>First Name: </label>
                        <input name="firstName" type="text" value={ firstName } onChange={ handleFirstName }/>
                        {
                            firstNameError ? 
                            <p>{ firstNameError }</p> :
                            ''
                        }

                    </div>
                    <div>
                        <label>Last Name: </label>
                        <input name="lastName" type="text" value={ lastName } onChange= { handleLastName } />
                        {
                            lastNameError ?
                            <p> { lastNameError } </p>:
                            ''
                        }

                    </div>
                    <div>
                        <label>Email: </label>
                        <input name="email" type="text" value={ email } onChange= {handleEmail}/>
                        {
                            emailError ?
                            <p> { emailError } </p>:
                            ''
                        }

                    </div>
                    <div>
                        <label>Password: </label>
                        <input name="password" type="password" value={ password } onChange= { handlePassword }/>
                        {
                            passwordError ?
                            <p> { passwordError } </p>:
                            ''
                        }

                    </div>
                    <div>
                        <label>Confirm Password: </label>
                        <input name="confirmPassword" type="password" value={ confirmPassword } onChange= { handleConfirmPassword } />
                        {
                            confirmPasswordError ?
                            <p> { confirmPasswordError } </p>:
                            ''
                        }

                    </div>

                </form>

                <div>
                    <h3>Your Form Data:</h3>
                    <p>First Name: {firstName} </p>
                    <p>Last Name: {lastName} </p>
                    <p>Email: {email} </p>
                    <p>Password: {password} </p>
                    <p>Confirm Password: {confirmPassword} </p>
                </div>


            </fieldset>
        </>
    );
}


export default FormPage1;