import React, { useEffect, useState } from 'react'
import "./form.css";

function InputComponent() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("user", user, "password", password);
  }
  const handleUsernameChange = (e) => {
    setUser(e.target.value);
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }
  return (
    <div className="form-holder">
    <form onSubmit={handleSubmit}>
      <label htmlFor="name" className="username">Username:</label>
      <input onChange={handleUsernameChange}
placeholder="User Name"
id="name" name="name" type="text" value={user} required/>
      <label htmlFor="password" className="password">Password:</label>
      <input onChange={handlePasswordChange} placeholder="Password"
id="password" name="password" type="text" value={password} required/>
      <input className="submit" type="submit" value="Submit"/>
    </form>
    </div>
  )
}

export default InputComponent;
