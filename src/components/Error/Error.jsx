import React from "react";
import error from "../../assets/error-404.png";
const Error = () => {
  return (
    <div>
      <img src={error} alt="error" className="max-w-5xl mx-auto" />
    </div>
  );
};

export default Error;
