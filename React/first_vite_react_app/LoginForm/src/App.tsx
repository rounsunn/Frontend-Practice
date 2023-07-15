import React, { useState } from "react";
import LoginForm from "./component/LoginForm";
import JobListing from "./component/JobListing";
import "./App.css";

const App: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [userId, setUserId] = useState("");

  return (
    <div className="form-container">
      <h1>SignIn</h1>
      {isSubmitted ? (
        <JobListing userId={userId} />
      ) : (
        <LoginForm setIsSubmitted={setIsSubmitted} setUserId={setUserId} />
      )}
    </div>
  );
};

export default App;
