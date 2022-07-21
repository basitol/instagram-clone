import React from "react";
import profileIcon from "../assets/profileIcon.svg";

const Bio = () => {
  const editForm = (
    <form className="edit-bio-form">
      <input type="text" placeholder="Name" />
      <input type="text" placeholder="Username" />
      <br />
      <button type="button" className="cancel-button">
        Cancel
      </button>
      <button type="submit">Save</button>
    </form>
  );

  return (
    <section className="bio">
      <div className="profile-photo" role="button" title="Click to edit photo">
        <img src={profileIcon} alt="profile" />
      </div>
      <div className="profile-info">
        <p className="name">Abdulbasit Ademola</p>
        <p className="username">
          Building solutions with tech skills I possess
        </p>
        <button>Edit</button>
        {editForm}
      </div>
    </section>
  );
};

export default Bio;
