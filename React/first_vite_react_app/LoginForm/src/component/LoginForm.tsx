import React from "react";

const LoginForm: React.FC = () => {
  return (
    <div className="container">
      <div className="row ">
        <div className="col-md-6 offset-md-3">
          <h1>SignIn</h1>
          <input type="text" className="form-control" placeholder="username" />
          <input
            type="password"
            className="form-control"
            placeholder="Password"
          />
          <button type="submit" className="btn btn-primary mt-3">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
