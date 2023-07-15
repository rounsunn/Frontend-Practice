import React, { useState } from "react";
import LoginForm from "./component/LoginForm";
import JobListing from "./component/JobListing";
import "./App.css";

const App: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [userId, setUserId] = useState<string>("");

  const handleLogin = (userId: string) => {
    setIsSubmitted(true);
    setUserId(userId);
  };

  return (
    <div className="container">
      {isSubmitted ? (
        <JobListing userId={userId} />
      ) : (
        <LoginForm handleLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
