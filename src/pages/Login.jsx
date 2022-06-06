import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
 const [loginCreds, setLoginCreds] = useState({});
  const { login } = useContext(AuthContext);

  const hanldeChange = (e) => {
    const { name, value } = e.target;
    setLoginCreds({
      ...loginCreds,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login();
  };
  return (
    <div>
    
        <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "auto",
          maxWidth: "200px",
          gap: "10px",
        }}
      >
      <input data-cy="login-email"  name="email"
          type="email"
          placeholder="Enter Email"
          onChange={hanldeChange}/>
          
      <input data-cy="login-password"
          name="password"
          type="password"
          placeholder="Enter Password..."
          onChange={hanldeChange} />
        <button data-cy="login-submit" className="login">Login</button>
       </form>
    </div>
  );
};

export default Login;
