import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.css";
import venueService from "./services/venueService";

const EditVenue = () => {
  const [venueName, setVenueName] = useState("");
  const [venueImageURL, setVenueImageURL] = useState("");
  const [venueLocation, setVenueLocation] = useState("");
  const [venueCapacity, setVenueCapacity] = useState("");
  const [venueDescription, setVenueDescription] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  const UpdateVenue = (e) => {
    e.preventDefault();
    const venue = {
      venueName,
      venueImageURL,
      venueLocation,
      venueCapacity,
      venueDescription,
    };

    venueService
      .updateVenue(id, venue)
      .then((response) => {
        navigate("/Venues");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    venueService
      .getVenueById(id)
      .then((response) => {
        setVenueName(response.data.venueName);
        setVenueImageURL(response.data.venueImageURL);
        setVenueLocation(response.data.venueLocation);
        setVenueCapacity(response.data.venueCapacity);
        setVenueDescription(response.data.venueDescription);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <form className="mt-5 pt-5">
        <div className="container mt-3">
          <div className="row d-flex flex-wrap ">
            <div className="col-lg-6">
              <div htmlFor="formName" className="form-group mb-4">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Enter Venue name"
                  name="venueName"
                  value={venueName}
                  onChange={(e) => setVenueName(e.target.value)}
                />
              </div>

              <div htmlFor="formName" className="form-group mb-4">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Enter the venue Image url"
                  name="venueImageURL"
                  value={venueImageURL}
                  onChange={(e) => setVenueImageURL(e.target.value)}
                />
              </div>

              <div htmlFor="formName" className="form-group mb-4">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Enter Venue Location"
                  name="venueLocation"
                  value={venueLocation}
                  onChange={(e) => setVenueLocation(e.target.value)}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div htmlFor="formName" className="form-group mb-4">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Enter the capacity of the venue"
                  name="venueCapacity"
                  value={venueCapacity}
                  onChange={(e) => setVenueCapacity(e.target.value)}
                />
              </div>
              <div htmlFor="formName" className="form-group mb-3">
                <textarea
                  className="form-control"
                  rows="4"
                  placeholder="Enter venue description"
                  name="venueDescription"
                  value={venueDescription}
                  onChange={(e) => setVenueDescription(e.target.value)}
                />
              </div>
              <button
                className="btn btn-primary"
                type="submit"
                onClick={(e) => UpdateVenue(e)}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
export default EditVenue;
