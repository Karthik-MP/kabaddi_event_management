import React, { useState } from 'react'
import { FaPlusCircle } from 'react-icons/fa';
export default function Addteam() {
  const [addTeam, setAddTeam] = useState({
    addTeamName: "",
    addTeamImageUrl: "",
    address: "",
    location: "",
  });

  // const [data, setData] = useState([]);

  // const handleInput = (e) => {
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   console.log(name, value);
  //   setAddTeam({ ...addTeam, [name]: value });
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    // const newData = { ...addTeam, id: new Date().getTime().toString() }
    // console.log(data);
    // setData([...data, newData]);
    // console.log(data);
    // setAddTeam({
    //   addTeamName: "", addTeamImageUrl: "", address: "", location: "",
    //   email: "", location: "", dte: "", time: "", noofmembers: ""
    // });
  }
  const [count, setCount] = useState(0);
  const [personNumber, setpersonNumber] = useState(count);
  const counSetter = (e) => {
    console.log("onChange", count)
    setCount(e.target.value)
  }
  const increaseCount = () => {
    if (personNumber < count) {
      setpersonNumber(personNumber + 1)
    }
  }

  return (
    <div className='container col-md-8 my-5'>
      <div className="row justify-content-center">
        <form onSubmit={handleSubmit} className='col-md-6'>
          <h3 className='text-center'>Add Team</h3>
          <div className='form-group my-3'>
            <input type="text" id='addTeamName' name="addTeamName" className="form-control" placeholder='Enter the team name' value={addTeam.addTeamName} />
          </div>
          <div className="mb-3">
            <input type="text" name="addTeamImageUrl" id='addTeamImageUrl' className='form-control' placeholder='Add Team Image Url' value={addTeam.addTeamImageUrl} />
          </div>
          <div className='form-group my-3' >
            <input type="number" name='addNoOfPlayers' className='form-control' id='addNoOfPlayers' placeholder='Add No Of Players' onChange={counSetter} value={count} />
          </div>
          <div className='form-group my-3' >
            <input type="location" name="location" id='addTeamLocation' className='form-control' placeholder='Add Team Location' value={addTeam.location} />
          </div>
        </form>
        <form onSubmit={handleSubmit} className='col-md-6'>
          <h3>Sport Person {personNumber}</h3>
          <div className='form-group my-3' >
            <input type="text" name="firstName" id='firstName' className='form-control' placeholder='First Name' value={addTeam.firstName} />
          </div>
          <div className='form-group my-3' >
            <input type="text" name="lastName" id='lastName' className='form-control' placeholder='Last Name' value={addTeam.lastName} />
          </div>
          <div className='form-group my-3' >
            <input type="number" name="age" id='age' className='form-control' placeholder='Age' value={addTeam.age} />
          </div>
          <div className='form-group my-3' >
            <input type="text" name="gender" id='gender' className='form-control' placeholder='Gender' value={addTeam.gender} />
          </div>


          <div className='form-group my-3 text-center' >
            <button className='btn btn-primary' id='addteam' type='submit' onClick={increaseCount}><FaPlusCircle />  Add Player</button>
          </div>

        </form>
      </div>
    </div>
  )
}
