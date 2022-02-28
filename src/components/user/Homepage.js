import React,{useState} from 'react'
import data from "./Data";
import Events from './Events';

export default function Homepage() {
  const[filter,setFilter]=useState('');
    
    const searchText=(event)=>{
        setFilter(event.target.value);
    }
    let dataSearch=data.cardData.filter(item=>{
        return Object.keys(item).some(key=>
          item[key].toString().toLowerCase().includes(filter.toString().toLowerCase()))
    });
  return (
    <section className="container mt-5">
      <div className="text-center my-3">
        <div className="search">
          <input className="searchbar"
            type="text"
            placeholder="Search"
            value={filter}
            onChange={searchText.bind(this)} />
           
        </div>
      </div>
      <div className="row justify-content-center">
        {dataSearch.map((item, index) => {
          return (
            <Events stadiumName={item.stadiumname} imageUrl={item.image} place={item.place}></Events>
          )
        })}
      </div>
    </section>
  )
}
