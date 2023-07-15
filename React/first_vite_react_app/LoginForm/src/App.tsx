import React, { useState } from "react";
import LoginForm from "./component/LoginForm";
import JobListing from "./component/JobListing";
import "./App.css";

const App: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  // const [employeeId, setEmployeeid] = useState("");

  return (
    <div className="form-container">
      <h1>SignIn</h1>
      {isSubmitted ? (
        <JobListing />
      ) : (
        <LoginForm setIsSubmitted={setIsSubmitted} />
      )}
    </div>
  );
};

export default App;
