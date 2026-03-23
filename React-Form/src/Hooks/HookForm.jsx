import React from "react";
import useInputField from "./UseInputField";

const HookForm = () => {
    const [name,nameOnchange] = useInputField('');
    const [email,emailOnchange] = useInputField('')
    const [password,passwordOnchange] = useInputField('')
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit",name,email,password);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" defaultValue={name} onChange={nameOnchange} />
        <br />
        <input type="email" defaultValue={email} onChange={emailOnchange} />
        <br />
        <input type="password" defaultValue={password} onChange={passwordOnchange} />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default HookForm;
