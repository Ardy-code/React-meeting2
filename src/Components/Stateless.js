import React from "react";

const Stateless = ({ title }) => {
  return (
    <header className="welcome-section">
      <h1>{title}</h1>
      <p>It is the best time to manage your finances</p>
    </header>
  );
};

export default Stateless;
