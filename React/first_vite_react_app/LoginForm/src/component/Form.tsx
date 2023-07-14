import React, { useState } from "react";

interface FormProps {
  setIsSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
}

const Form: React.FC<FormProps> = ({ setIsSubmitted }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessages, setErrorMessages] = useState<{
    name: string;
    message: string;
  }>({
    name: "",
    message: "",
  });

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
    uname: "Invalid username",
    pass: "Invalid password",
  };

  const renderErrorMessage = (name: string) => {
    return name === errorMessages.name && <p>{errorMessages.message}</p>;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const userData = database.find((user) => user.username === userName);

    if (userData) {
      if (userData.password !== password) {
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
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
          placeholder="Username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        {renderErrorMessage("uname")}
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

export default Form;
