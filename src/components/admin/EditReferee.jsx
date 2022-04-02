import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import refereeService from "./services/refereeService";

const EditReferee = () => {
  const [refereeName, setRefereeName] = useState("");
  const [noOfMatches, setNoOfMatches] = useState("");
  const [refereeLocation, setRefereeLocation] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  const UpdateReferee = (e) => {
    e.preventDefault();
    const referee = { refereeName, noOfMatches, refereeLocation };

    refereeService
      .updateReferee(id, referee)
      .then((response) => {
        navigate("/admin/addReferee");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    refereeService
      .getRefereeById(id)
      .then((response) => {
        setRefereeName(response.data.refereeName);
        setNoOfMatches(response.data.noOfMatches);
        setRefereeLocation(response.data.refereeLocation);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <form className="mt-5 pt-5">
        <div className="container mt-3 text-center">
          <div className="col-4">
            <div htmlFor="formName" className="form-group mb-4">
              <input
                className="form-control"
                type="text"
                placeholder="Enter referee Name"
                name="refereeName"
                value={refereeName}
                onChange={(e) => setRefereeName(e.target.value)}
              />
            </div>

            <div htmlFor="formName" className="form-group mb-4">
              <input
                className="form-control"
                type="text"
                placeholder="Enter match experience in numbers"
                name="noOfMatches"
                value={noOfMatches}
                onChange={(e) => setNoOfMatches(e.target.value)}
              />
            </div>

            <div htmlFor="formName" className="form-group mb-4">
              <input
                className="form-control"
                type="text"
                placeholder="Enter match Referee Location"
                name="refereeLocation"
                value={refereeLocation}
                onChange={(e) => setRefereeLocation(e.target.value)}
              />
            </div>

            <button
              className="btn btn-primary"
              type="submit"
              onClick={(e) => UpdateReferee(e)}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default EditReferee;
