import React from 'react';

const SimpleForm = () => {
      const handleFormSubmit = (e) =>{
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(e.target.email.value);
  }
    return (
        <div>
            <div>
      <form onSubmit={handleFormSubmit}>
        <input type="text" name='name' id='name' />
        <br />
        <input type="email" name="email" id="email" />
        <br />
        <input type="submit" value="submit" />
      </form>
    </div>
        </div>
    );
};

export default SimpleForm;