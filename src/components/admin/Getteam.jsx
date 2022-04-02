import React, { useState, useEffect } from 'react'
import { FaPlusCircle,FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import TeamServices from './services/TeamServices';
export default function Getteam() {

  const [filter, setFilter] = useState('');
  const [dataSearch,setdataSearch]=useState([]);
  const searchText = (event) => {
    setFilter(event.target.value);
  }
  
  useEffect(() => {
    getAllTeams();
  }, []);
  const getAllTeams = () => {
    TeamServices
      .getAllTeams()
      .then((response) => {
        setdataSearch(response.data);
        // console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const deleteVenue = (id) => {
    TeamServices
      .deleteTeam(id)
      .then((response) => {
        getAllTeams();
      })
      .catch((error) => {
        console.log(error);
      });
  };
 
  
  const handleSearch = () => {
    console.log(filter)
    let newdataSearch = dataSearch.filter(item => {
      return Object.keys(item).some(key =>
        item[key].toString().toLowerCase().includes(filter.toString().toLowerCase()))
    });
    console.log(newdataSearch)
    setdataSearch(newdataSearch)
  }
  return (
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
        {dataSearch.map((item, index) => {
          return (
            <div className="col-md-3 mx-2 my-2 mb-5" key={item.id}>
                <div className="card p-2 overflow-hidden h-100 shadow">
                  <img src={item.teamImageUrl} alt={item.teamName} className="card-img-top" />
                  <div className="card-body">
                    <p className="card-text">{item.teamName}&emsp;&emsp;&emsp;
                      {/* <FaStar color='black' /><FaStar color='black' /><FaStar color='black' />
                      <FaStar color='black' /> */}
                    </p>
                    <p className="card-text">Location: {item.teamLocation}&emsp;&emsp;&emsp;
                      <Link id='editTeam' className='mx-2' to={`/admin/editTeam/${item.id}`} style={{ color: 'black' }}><FaEdit /></Link>
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
        <Link to="/admin/addTeam"><button className="btn btn-primary"><FaPlusCircle /> Add Team</button></Link>
      </div>
    </section>
  )
}
