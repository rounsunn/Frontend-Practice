import React, { useState } from "react";
import axios from "axios";

interface FormProps {
  setIsSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
  setUserId: React.Dispatch<React.SetStateAction<string>>;
}

interface ApiResponse {
  status: string;
  dataset: { Id: string };
  message: string;
}

const LoginForm: React.FC<FormProps> = ({ setIsSubmitted, setUserId }) => {
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
    return name === errorMessages.name && <p>{errorMessages.message}</p>;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    axios
      .post(
        "https://dev123.gigin.ai/abc/index.php/Api_controller/login_email",
        {
          email: email,
          password: password,
        }
      )
      .then((response) => {
        console.log("response: ", response);
        const responseData = response.data as ApiResponse;

        if (responseData.status !== "fail") {
          setIsSubmitted(true);
          setUserId(responseData.dataset.Id);
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
    <form onSubmit={handleSubmit} className="d-flex flex-column">
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          className="form-control"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {renderErrorMessage("email")}
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {renderErrorMessage("pass")}
      </div>
      <button type="submit" className="btn btn-primary mt-3">
        Submit
      </button>
    </form>
  );
};

export default LoginForm;
