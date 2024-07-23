import Pet from "./Pet.jsx";
export default function Results({ pets }) {
  return (
    <div className="search">
      {pets.length === 0 ? (
        <h1>No Pets found</h1>
      ) : (
        pets.map((pet) => (
          <Pet
            name={pet.name}
            animal={pet.animal}
            breed={pet.breed}
            images={pet.images}
            location={`${pet.city}, ${pet.state}`}
            id={pet.id}
            key={pet.id}
          />
        ))
      )}
    </div>
  );
}
