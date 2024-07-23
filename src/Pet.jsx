import React from "react";
import { Link } from "react-router-dom";
const Pet = ({ name, animal, breed, images, location, id }) => {
  let animalImage = "http://pets-images.dev-apis.com/pets/none.jpg";
  if (images.length) {
    animalImage = images[0];
  }
  return (
    <Link to={`/details/${id}`} className="pet">
      <div className="image-container">
        <img src={animalImage} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>
          {animal} - {breed} - {location}
        </h2>
      </div>
    </Link>
  );
};
export default Pet;
