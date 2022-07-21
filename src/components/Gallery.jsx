import React from "react";
import { FaPlusSquare } from "react-icons/fa";
import pexels1 from "../assets/pexels1.jpeg";
import pexels2 from "../assets/pexels2.jpeg";
import pexels3 from "../assets/pexels3.jpeg";
import pexels4 from "../assets/pexels4.jpeg";
import pexels5 from "../assets/pexels5.jpeg";

const Gallery = () => {
  return (
    <div>
      <input type={"file"} name="photo" id="addPhotoInput" />
      <label htmlFor="addPhotoInput">
        <FaPlusSquare className="add-photo-button" />
      </label>

      <section className="gallery">
        <div className="item">
          <img src={pexels1} alt="post" className="item-image" />
          <button className="delete-button">Delete</button>
        </div>
        <div className="item">
          <img src={pexels2} alt="post" className="item-image" />
        </div>
        <div className="item">
          <img src={pexels3} alt="post" className="item-image" />
        </div>
        <div className="item">
          <img src={pexels4} alt="post" className="item-image" />
        </div>
        <div className="item">
          <img src={pexels5} alt="post" className="item-image" />
        </div>
      </section>
    </div>
  );
};

export default Gallery;
