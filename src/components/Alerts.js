import React from "react";

const Alerts = (props) => {
  const {message}=props
  return (
    <div>
      <div className="alert alert-primary" role="alert">
        {message}
      </div>
    </div>
  );
};

export default Alerts;
