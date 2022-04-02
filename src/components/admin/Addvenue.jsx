import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import venueService from "./services/venueService";
export default function Addvenue() {

  const [venueName, setVenueName] = useState("");
  const [venueImageURL, setVenueImageURL] = useState("");
  const [venueLocation, setVenueLocation] = useState("");
  const [venueCapacity, setVenueCapacity] = useState("");
  const [venueDescription, setVenueDescription] = useState("");
  const navigate = useNavigate();
  const addVenue = (e) => {
    e.preventDefault();
    console.log('Submitted')
    const venue = {
      venueName,
      venueImageURL,
      venueLocation,
      venueCapacity,
      venueDescription,
    };
    venueService
      .createVenue(venue)
      .then((response) => {
        console.log(response.data);
        alert("Add Sucessfully")
        navigate("/admin/getVenue");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <form className="mt-5 pt-5">
        <div className="container mt-3">
          <div className="row d-flex justify-content-center">
            <h3 className='text-center my-2'>Add Venue</h3>
            <div className="col-4">
              <div className="form-group mb-4">
                <input className="form-control" type="text" placeholder="Enter Venue name" name="venueName" value={venueName} onChange={(e) => setVenueName(e.target.value)} />
              </div>
              <div className="form-group mb-4">
                <input className="form-control" type="text" placeholder="Enter the venue Image url" name="venueImageURL" value={venueImageURL} onChange={(e) => setVenueImageURL(e.target.value)} />
              </div>

              <div className="form-group mb-4">
                <input className="form-control" type="text" placeholder="Enter Venue Location" name="venueLocation" value={venueLocation} onChange={(e) => setVenueLocation(e.target.value)} />
              </div>
            </div>
            <div className="col-4">
              <div className="form-group mb-4">
                <input className="form-control" type="text" placeholder="Enter the capacity of the venue" name="venueCapacity" value={venueCapacity} onChange={(e) => setVenueCapacity(e.target.value)} />
              </div>
              <div className="form-group mb-3">
                <textarea className="form-control" rows="4" placeholder="Enter venue description" name="venueDescription" value={venueDescription} onChange={(e) => setVenueDescription(e.target.value)} />
              </div>
              <button
                className="btn btn-primary" type="submit" onClick={(e) => addVenue(e)}> Submit </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
