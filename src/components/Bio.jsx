import { useState, useEffect } from "react";
import { useLiveQuery } from "dexie-react-hooks";
import profileIcon from "../assets/profileIcon.svg";
import getPhotoUrl from "get-photo-url";
import { db } from "../dexie";

const Bio = () => {
  const bioDetails = useLiveQuery(
    () => db.bio.toArray(),
    [
      db.bio.add({
        name: "John Doe",
        about: "I am a software engineer",
      }),
    ]
  );

  const [userDetails, setUserDetails] = useState({
    name: "Abdulbasit Quadri",
    bio: "I am a software engineer with a passion for building web applications. I am currently working as a software engineer at Amazon Web Services.",
  });

  const [userDetailsOpen, setUserDetailsOpen] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState(profileIcon);

  useEffect(() => {
    const setDataFromDb = async () => {
      const userDetailsFromDb = await db.bio.get("info");
      const profilePhotoFromDb = await db.bio.get("profilePhoto");
      userDetailsFromDb && setUserDetails(userDetailsFromDb);
      profilePhotoFromDb && setProfilePhoto(profilePhotoFromDb);
    };
    setDataFromDb();
  }, []);

  const updateUserDetails = async (event) => {
    event.preventDefault();

    const objectData = {
      name: event.target.name.value,
      bio: event.target.bio.value,
    };

    setUserDetails(objectData);
    await db.bio.put(objectData, "info");
    setUserDetailsOpen(false);
  };

  const updateProfilePhoto = async () => {
    const newProfilePhoto = await getPhotoUrl("#profilePhotoInput");
    setProfilePhoto(newProfilePhoto);
    await db.bio.put(newProfilePhoto, "profilePhoto");
  };

  const editForm = (
    <form className="edit-bio-form" onSubmit={(e) => updateUserDetails(e)}>
      <input
        type="text"
        id=""
        name="name"
        defaultValue={userDetails?.name}
        placeholder="Your name"
      />
      <input
        type="text"
        id=""
        name="bio"
        defaultValue={userDetails?.bio}
        placeholder="About you"
      />
      <br />
      <button
        type="button"
        className="cancel-button"
        onClick={() => setUserDetailsOpen(false)}
      >
        Cancel
      </button>
      <button type="submit">Save</button>
    </form>
  );

  const editButton = (
    <button onClick={() => setUserDetailsOpen(true)}>Edit</button>
  );

  return (
    <section className="bio">
      <input type="file" accept="image/*" name="photo" id="profilePhotoInput" />
      <label htmlFor="profilePhotoInput">
        <div
          className="profile-photo"
          role="button"
          title="Click to edit photo"
          onClick={updateProfilePhoto}
        >
          <img src={profilePhoto} alt="profile" />
        </div>
      </label>

      <div className="profile-info">
        <p className="name">{userDetails.name}</p>
        <p className="username">{userDetails.bio}</p>

        {userDetailsOpen ? editForm : editButton}
      </div>
    </section>
  );
};

export default Bio;
