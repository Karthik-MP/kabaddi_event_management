import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import refereeService from "./services/refereeService";
import { Link } from 'react-router-dom'
import { FaEdit, FaTrash } from 'react-icons/fa';
export default function Addreferee() {
  var data = []
  const [referees, setreferees] = useState(data);
  useEffect(() => {
    getAllReferees();
  }, []);
  const getAllReferees = () => {
    refereeService
      .getAllReferees()
      .then((response) => {
        setreferees(response.data);
        // console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  const [refereeName, setRefereeName] = useState("");
  const [noOfMatches, setNoOfMatches] = useState("");
  const [refereeLocation, setRefereeLocation] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  const [filter, setFilter] = useState('');
  const searchText = (event) => {
    setFilter(event.target.value);
  }
  const handleSearch = () => {
    let newreferees = referees.filter(item => {
      return Object.keys(item).some(key =>
        item[key].toString().toLowerCase().includes(filter.toString().toLowerCase()))
    });
    // console.log(newreferees)
    setreferees(newreferees)
  }
  const addReferee = (e) => {
    e.preventDefault();
    const referee = { refereeName, noOfMatches, refereeLocation };
    refereeService
      .createReferee(referee)
      .then((response) => {
        // console.log(response.data);
        alert("Sucessfully added referee")
        window.location.reload();
        navigate("/AddReferee");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const deleteReferees = (id) => {
    // console.log('hey')
    refereeService
      .deleteReferee(id)
      .then((response) => {
        getAllReferees();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <section className="container mt-5">
      <div>
        <div className="my-3">
          <div className='row justify-content-center'>
            <div className="col-3">
              <input className="form-control" type="search" placeholder="Search" aria-label="Search" value={filter} onChange={searchText} />
            </div>
            <div className="col-1">
              <button className="btn btn-primary" onClick={handleSearch}>Search</button>
            </div>
          </div>
        </div>
        <div className="mt-5 pt-3">
          <div className="container mt-5">
            <div className="row d-flex">
              <div className="col-md-8">
                <div className="row d-flex justify-content-center">
                  {referees.map((item, index) => {
                    return (
                      <div className="col-md-5 mx-1 my-2"  key={item.id}>
                        <div className="card p-2 overflow-hidden h-100 shadow">
                          {/* <img src={item.imageUrl} alt={item.title} className="card-img-top" /> */}
                          <div className="card-body">
                            <div className="text-center">
                              <h5 className="card-title">{item.refereeName}</h5>
                            </div>
                            <h6 className="card-title">{item.refereeLocation}</h6>
                            <p className="card-text">Experience: {item.noOfMatches}&emsp;&emsp;&emsp;
                              <Link id='editTeam' className='mx-2' to={`/admin/editReferee/${item.id}`} style={{ color: 'black' }}><FaEdit /></Link>
                              <button style={{"backgroundColor": "Transparent","backgroundRepeat":"noRepeat","border": "none"}} onClick={() => deleteReferees(item.id)}><FaTrash /></button>
                            </p>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
              <div className="col-lg-4">
                <form>
                  <h6 style={{ textAlign: "center" }}>Add Referee details</h6>
                  <div htmlFor="formName" className="form-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter referee Name"
                      name="refereeName"
                      value={refereeName}
                      onChange={(e) => setRefereeName(e.target.value)}
                    />
                  </div>
                  <div htmlFor="formName" className="form-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter match experience in numbers"
                      name="noOfMatches"
                      value={noOfMatches}
                      onChange={(e) => setNoOfMatches(e.target.value)}
                    />
                  </div>
                  <div className="form-group mb-3" htmlFor="formName">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter match Referee Location"
                      name="refereeLocation"
                      value={refereeLocation}
                      onChange={(e) => setRefereeLocation(e.target.value)}
                    />
                  </div>
                  <button
                    className="btn btn-primary"
                    type="submit"
                    onClick={(e) => addReferee(e)}
                  >
                    Add Referee
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
