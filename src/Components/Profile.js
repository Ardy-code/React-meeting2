import React from "react";

const Profile = (props) => {
  return (
    <div className="user-name">
      <h1>{props.name}</h1>
      <p>{props.email}</p>
    </div>
  );
};

export default Profile;
