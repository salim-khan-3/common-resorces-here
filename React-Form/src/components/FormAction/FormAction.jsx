import React from 'react';

const FormAction = () => {
    const handleFormSubmit = (dsjfkd) =>{
        console.log(dsjfkd.get("name"));
        console.log(dsjfkd.get("email"));
    }
    return (
        <div>
            <form action={handleFormSubmit}>
                <input type="text" name='name' id='name' placeholder='Name' />
                <br />
                <input type="email" name='email' id='email' placeholder='Email' />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default FormAction;