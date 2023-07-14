import React from "react";

const LoginForm: React.FC = () => {
  return (
    <>
      <h1>SignIn</h1>
      <input type="text" placeholder="Type userName" />
      <input type="text" placeholder="password" />
      <button className="btn btn-primary">Submit</button>
    </>
  );
};

export default LoginForm;
