import React, { useState } from 'react'
import data from "./Data";
import Cards from './Cards';
import { FaPlusCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
export default function Getteam() {
  const [filter, setFilter] = useState('');
  const [dataSearch,setdataSearch]=useState(data.cardData);
  const searchText = (event) => {
    setFilter(event.target.value);
  }
  
  const handleSearch = () => {
    console.log("as")
    let newdataSearch = data.cardData.filter(item => {
      return Object.keys(item).some(key =>
        item[key].toString().toLowerCase().includes(filter.toString().toLowerCase()))
    });
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
            <Cards id={item.id} title={item.clubname} imageUrl={item.image} place={item.venue} key={item.id}></Cards>
          )
        })}
      </div>
      <div className='mb-5 text-end'>
        <Link to="/admin/addTeam"><button className="btn btn-primary"><FaPlusCircle /> Add Team</button></Link>
      </div>
    </section>
  )
}
