import React, { useState,useEffect } from 'react'
import Events from './Events';
import HomepageServices from './services/HomepageServices';
export default function Homepage() {
  useEffect(() => {
    getAllHomepage();
  }, []);
  var data=[]
  const [dataSearch,setdataSearch]=useState(data);
  const getAllHomepage = () => {
    HomepageServices
      .getAllHomepage("/getSchedule")
      .then((response) => {
        data=response.data
        // console.log(response.data)
        setdataSearch(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // console.log("dataSearch",dataSearch)
  const [filter, setFilter] = useState('');
  
  const searchText = (event) => {
    setFilter(event.target.value);
  }
  
  const handleSearch = () => {
    let newdataSearch = dataSearch.filter(item => {
      return Object.keys(item).some(key =>
        item[key].toString().toLowerCase().includes(filter.toString().toLowerCase()))
    });
    // console.log(newdataSearch)
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
            <Events title={item.venueName} imageUrl={item.venueImageURL} place={item.venueLocation} id={item.id} key={item.id}></Events>
          )
        })}
      </div>
    </section>
  )
}
