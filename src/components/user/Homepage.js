import React, { useState } from 'react'
import data from "./Data";
import Events from './Events';

export default function Homepage() {
  const [filter, setFilter] = useState('');
  const searchText = (event) => {
    setFilter(event.target.value);
  }
  let dataSearch=data.cardData
  const handleSearch = () => {
    console.log("as")
    dataSearch = data.cardData.filter(item => {
      return Object.keys(item).some(key =>
        item[key].toString().toLowerCase().includes(filter.toString().toLowerCase()))
    });
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
            <Events stadiumName={item.stadiumname} imageUrl={item.image} place={item.venue} key={item.id}></Events>
          )
        })}
      </div>
    </section>
  )
}
