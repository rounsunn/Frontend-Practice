import React, { useState } from "react";
import axios from "axios";

interface FormProps {
  setIsSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
}

const Form: React.FC<FormProps> = ({ setIsSubmitted }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [errorMessages, setErrorMessages] = useState<{
  //   name: string;
  //   message: string;
  // }>({
  //   name: "",
  //   message: "",
  // });

  // const database = [
  //   {
  //     email: "email",
  //     password: "pass1",
  //   },
  //   {
  //     email: "email",
  //     password: "pass2",
  //   },
  // ];

  // const errors = {
  //   email: "Invalid email",
  //   pass: "Invalid password",
  // };

  // const renderErrorMessage = (name: string) => {
  //   return name === errorMessages.name && <p>{errorMessages.message}</p>;
  // };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "https://dev123.gigin.ai/abc/index.php/Api_controller/login_email",
        {
          email: email,
          password: password,
        }
      );
      console.log("resposne: ", response);
      if (response.status === 200) {
        setIsSubmitted(true);
      } else {
        console.log("Invalid username or passowrd");
      }
    } catch (err) {
      console.log("Error: ", err);
    }

    // const userData = database.find((user) => user.username === userName);

    // if (userData) {
    //   if (userData.password !== password) {
    //     setErrorMessages({ name: "pass", message: errors.pass });
    //   } else {
    //     setIsSubmitted(true);
    //   }
    // } else {
    //   setErrorMessages({ name: "uname", message: errors.uname });
    // }
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex flex-column">
      <div>
        <label htmlFor="email">Username:</label>
        <input
          type="text"
          className="form-control"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {/* {renderErrorMessage("email")} */}
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
        {/* {renderErrorMessage("pass")} */}
      </div>
      <button type="submit" className="btn btn-primary mt-3">
        Submit
      </button>
    </form>
  );
};

export default Form;
