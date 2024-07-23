import { useParams,useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchPetDetails from "./fetchPetDetails";
import { useDispatch } from "react-redux";
import { adopt } from "./adoptedPetSlice";
import Carousel from "./Carousel";
import Modal from "./Modal";
// import { useContext } from "react";
import ErrorBoudary from "./ErrorBoundary";
import { useState } from "react";
// import setAdoptedPetContext from "./adoptedPetContext";
const Details = () => {
  const { id } = useParams();
  const results = useQuery(["details", id], fetchPetDetails);
  // const [, setAdoptedPet]= useContext(setAdoptedPetContext)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [showModal, setShowModal]=useState(false)

  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">💿</h2>
      </div>
    );
  }
  const pet = results.data.pets[0];
  // throw new Error();
  return (
    <div className="details">
      <div>
        <Carousel images={pet.images} />
        <h1>{pet.name}</h1>
        <h2>
          {pet.animal} - {pet.breed} - {pet.city} - {pet.state}
        </h2>
        <button
          onClick={() => {
            // setAdoptedPet(pet)
            
            setShowModal(true);
          }}
        >
          Adopt {pet.name}
        </button>
        <p>{pet.description}</p>
        {showModal ? (
          <Modal>
            <div>
              <h1>would you like to adop {pet.name}?</h1>
              <div className="buttons">
                <button onClick={()=>{dispatch(adopt(pet));
                   navigate("/");
                }}>Yes</button>

                <button onClick={()=>{
                  setShowModal(false)
                }}>No</button>
              </div>
            </div>
          </Modal>
        ) : null}
      </div>
    </div>
  );
};
const DetailsErrorBoundary = () => (
  <ErrorBoudary>
    <Details />
  </ErrorBoudary>
);
export default DetailsErrorBoundary;
