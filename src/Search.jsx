import React, {  useEffect, useState } from "react";
import Results from "./Results.jsx";
import useBreedList from "./useBreedList.js";
import { useQuery } from "@tanstack/react-query";
import fetchSearch from "./fetchSearch.js";
import { useSelector } from "react-redux";
// import setAdoptedPetContext from "./adoptedPetContext.jsx";
const Animals = ["bird", "cat", "dog", "rabbit", "reptile"];
const Search = () => {
  const [animal, setAnimal] = useState("");
  const [breeds] = useBreedList(animal);
  const [formstate, setFormState] = useState({
    location: "",
    animal: "",
    breed: "",
  });

  const adoptedPet= useSelector(state=>state.adoptedPet.value)

  // const [adoptedPet] = useContext(setAdoptedPetContext)
  const results = useQuery(["search", formstate], fetchSearch);
  const pets = results?.data?.pets ?? [];
  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          setFormState({
            location: formData.get("location"),
            breed: formData.get("breed"),
            animal: formData.get("animal"),
          });
        }}
      >
       
          { adoptedPet ?(<div className="pet image-container">
            <img src={adoptedPet.images[0]} alt={adoptedPet.name}/>
          </div> ) : null }
   
        <label htmlFor="location">Location</label>
        <input id="location" name="location" placeholder="Location"></input>
        <label htmlFor="animal">Animal</label>
        <select
          id="animal"
          value={animal}
          name="animal"
          onChange={(e) => {
            setAnimal(e.target.value);
          }}
        >
          <option></option>
          {Animals.map((animal) => (
            <option value={animal} key={animal}>
              {animal}
            </option>
          ))}
        </select>
        <label htmlFor="breed">Breed</label>
        <select id="breed" name="breed">
          {breeds.map((breed) => (
            <option value={breed} key={breed}>
              {breed}
            </option>
          ))}
        </select>
        <button>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default Search;
