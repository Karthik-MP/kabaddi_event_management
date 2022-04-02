import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import venueService from "./services/venueService";
import { FaEdit, FaTrash, FaStar,FaPlusCircle } from 'react-icons/fa';
const GetVenues = () => {
  const [venues, setVenues] = useState([]);
  useEffect(() => {
    getAllVenues();
  }, []);
  const getAllVenues = () => {
    venueService
      .getAllVenues()
      .then((response) => {
        setVenues(response.data);
        // console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const deleteVenue = (id) => {
    venueService
      .deleteVenue(id)
      .then((response) => {
        getAllVenues();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const [filter, setFilter] = useState('');
  const searchText = (event) => {
    setFilter(event.target.value);
  }

  const handleSearch = () => {
    console.log("as")
    let newvenues = venues.filter(item => {
      return Object.keys(item).some(key =>
        item[key].toString().toLowerCase().includes(filter.toString().toLowerCase()))
    });
    setVenues(newvenues)
  }
  return (
    <>
      <section className="container mt-5">
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
        <div className="row justify-content-center">
          {venues.map((item, index) => {
            return (
              <div className="col-md-3 mx-2 my-2 mb-5" key={item.id}>
                <div className="card p-2 overflow-hidden h-100 shadow">
                  <img src={item.venueImageURL} alt={item.venueName} className="card-img-top" />
                  <div className="card-body">
                    <p className="card-text">{item.venueName}&emsp;&emsp;&emsp;
                      <FaStar color='black' /><FaStar color='black' /><FaStar color='black' />
                      <FaStar color='black' />
                    </p>
                    <p className="card-text">Venue: {item.venueLocation}&emsp;&emsp;&emsp;
                      <Link id='editTeam' className='mx-2' to={`/admin/editVenue/${item.id}`} style={{ color: 'black' }}><FaEdit /></Link>
                      <button style={{"backgroundColor": "Transparent","backgroundRepeat":"noRepeat","border": "none"}} onClick={() => deleteVenue(item.id)}><FaTrash /></button>
                      {/* <Link id='deleteTeam' className='mx-2' onClick={() => deleteVenue(item.id)} style={{ color: 'black' }}></Link> */}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <div className='mb-5 text-end'>
          <Link to="/admin/addVenue"><button className="btn btn-primary"><FaPlusCircle /> Add Venue</button></Link>
        </div>
      </section>
    </>
  );
};

export default GetVenues;
