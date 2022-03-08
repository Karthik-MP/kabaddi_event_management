import React, { useState,useEffect } from 'react'
import data from "./Data";
import Events from './Events';

export default function Homepage() {
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
            <Events  title={item.stadiumname} imageUrl={item.image} place={item.venue} id={item.id} key={item.id}></Events>
          )
        })}
      </div>
    </section>
  )
}
