import React, { useState } from "react";
import api from "../api/api";

interface FormProps {
  handleLogin: (userId: string) => void;
}

interface ApiResponse {
  status: string;
  dataset: { Id: string };
  message: string;
}

const LoginForm: React.FC<FormProps> = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessages, setErrorMessages] = useState<{
    name: string;
    message: string;
  }>({
    name: "",
    message: "",
  });

  const renderErrorMessage = (name: string) => {
    return (
      name === errorMessages.name && (
        <p className="mt-3">{errorMessages.message}</p>
      )
    );
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    api
      .post("/Api_controller/login_email", {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log("response: ", response);
        const responseData = response.data as ApiResponse;

        if (responseData.status !== "fail") {
          handleLogin(responseData.dataset.Id);
        } else {
          console.log(responseData);
          setErrorMessages({
            name: "pass",
            message: responseData.dataset || responseData.message,
          });
        }
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="container form-container p-3">
      <h1>Sign In</h1>
      <div>
        <label htmlFor="email">
          Email:
          <input
            type="text"
            className="form-control"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        {renderErrorMessage("email")}
      </div>
      <div>
        <label htmlFor="password">
          Password:
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        {renderErrorMessage("pass")}
      </div>
      <button type="submit" className="btn btn-primary mt-3">
        Submit
      </button>
    </form>
  );
};

export default LoginForm;
