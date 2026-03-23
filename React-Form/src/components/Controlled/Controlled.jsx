import React, { useState } from 'react';

const Controlled = () => {

    const [password,setPassword] = useState();
    const [error,setError] = useState("");

    const handlesubmitForm = (e) =>{
        e.preventDefault();
    }
    const handlePassword = (e) =>{
        console.log(e.target.value);
        setPassword(e.target.value)

        if(password.length < 6) {
            setError("password must be 6 character or longer");
        }else{
            setError("")
        }
    }
    return (
        <div>
            <form onSubmit={handlesubmitForm}>
                <input type="text" name='name' id='name' placeholder='name' />
                <br />
                <input type="password" name='password' onChange={handlePassword} defaultValue={password}  placeholder='password' />
                <p style={{color:"red"}}>
                    <small>{error}</small>
                </p>
                <br />
                <input type="submit" />
            </form>
        </div>
    );
};

export default Controlled;