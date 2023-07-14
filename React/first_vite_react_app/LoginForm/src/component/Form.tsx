import React from "react";

interface FormProps {
  setIsSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
}

const Form: React.FC<FormProps> = ({ setIsSubmitted }) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="row ">
        <div className="col-md-6 offset-md-3">
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
    </form>
  );
};

export default Form;
