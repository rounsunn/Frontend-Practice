import React, { useState } from "react";

interface FormProps {
  setIsSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
}

const Form: React.FC<FormProps> = ({ setIsSubmitted }) => {
  const [userName, setUserName] = useState("");
  const [passwowrd, setPassword] = useState("");

  const [errorMessages, setErrorMessages] = useState({
    name: "",
    message: "",
  });

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1",
    },
    {
      username: "user2",
      password: "pass2",
    },
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };

  const renderErrorMessage = () => {
    return <p>{errorMessages.message}</p>;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Find user login info
    const userData = database.find((user) => user.username === userName);

    // Compare user info
    if (userData) {
      if (userData.password !== passwowrd) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          className="form-control"
          placeholder="username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        {renderErrorMessage()}
      </div>
      <div>
        <label htmlFor="password">Passowwrd:</label>
        <input
          type="password"
          className="form-control"
          placeholder="password"
          value={passwowrd}
          onChange={(e) => setPassword(e.target.value)}
        />
        {renderErrorMessage()}
      </div>
      <button type="submit" className="btn btn-primary mt-3">
        Submit
      </button>
    </form>
  );
};

export default Form;
