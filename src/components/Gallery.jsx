import getPhotoUrl from "get-photo-url";
import { useLiveQuery } from "dexie-react-hooks";
import { FaPlusSquare } from "react-icons/fa";
import { db } from "../dexie";
import Loader from "./Loader";

const Gallery = () => {
  const allPhotos = useLiveQuery(() => db.gallery.toArray(), []);

  const addPhoto = async () => {
    db.gallery.add({
      url: await getPhotoUrl("#addPhotoInput"),
    });
  };

  const removePhoto = async (id) => {
    await db.gallery.delete(id);
  };

  return (
    <div>
      <input type={"file"} name="photo" id="addPhotoInput" />
      <label htmlFor="addPhotoInput" onClick={addPhoto}>
        <FaPlusSquare className="add-photo-button" />
      </label>

      {/* <Loader /> */}
      {!allPhotos && <Loader />}
      <section className="gallery">
        {allPhotos?.map((photo) => (
          <div className="item" key={photo.id}>
            <img src={photo.url} alt="post" className="item-image" />
            <button
              className="delete-button"
              onClick={() => removePhoto(photo.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Gallery;
