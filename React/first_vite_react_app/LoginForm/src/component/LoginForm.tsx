import React, { useState } from "react";
import Form from "./Form";

const LoginForm: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div className="form-container">
      <h1>SignIn</h1>
      {isSubmitted ? (
        <h3>SignIn successful</h3>
      ) : (
        <Form setIsSubmitted={setIsSubmitted} />
      )}
    </div>
  );
};

export default LoginForm;
