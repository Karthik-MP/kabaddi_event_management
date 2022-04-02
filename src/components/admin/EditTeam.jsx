import React, { useState,useEffect } from 'react'
import { FaPlusCircle } from 'react-icons/fa';
import TeamServices from './services/TeamServices';
import { useNavigate,useParams } from "react-router-dom"; 
export default function EditTeam() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [addTeam, setAddTeam] = useState({
    teamName: "",
    teamImageUrl: "",
    count: "",
    teamLocation: "",
    playerDetails: []
  });

  useEffect(() => {
    TeamServices
      .getTeamById(id)
      .then((response) => {
        setAddTeam(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setAddTeam({ ...addTeam, [name]: value });
    // console.log(addTeam)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = { ...addTeam }
    setData([...data, newData]);
    setAddTeam({
      teamName: "", teamImageUrl: "", teamLocation: "", count: ""
    });
    // alert(JSON.stringify(addTeam))
    TeamServices
    .updateTeam(id, addTeam)
      .then((response) => {
        // console.log(response.data);
        alert("Edited Team Sucessfully")
        navigate("/admin/getTeam");
      })
      .catch((error) => {
        console.log(error);
      });
    
  }
  const [addPlayer, setAddPlayer] = useState({
    firstName: "",
    secondName: "",
    age: "",
    gender: "",
  });
  const [data, setData] = useState([]);
  const handlePlayerInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setAddPlayer({ ...addPlayer, [name]: value });
  }
  const handlePlayerSubmit = (e) => {
    e.preventDefault();
    const newData = { ...addPlayer }
    setData([...data, newData]);
    setAddPlayer({
      firstName: "", secondName: "", age: "", gender: ""
    });
    // console.log(addPlayer)
    // const lst = addTeam.playerSet.concat([addPlayer])
    // console.log(lst)
    addTeam.playerDetails.push(addPlayer)
    // setAddTeam({ addTeam.playerSet()})
    console.log(addTeam)
  }
  const [count, setCount] = useState(0);
  const [playerCount, setplayerCount] = useState(1);
  const counSetter = (e) => {
    // console.log("onChange", count)
    setCount(e.target.value)
  }
  const increaseCount = () => {
    // console.log("Count",count)
    // console.log("playerCount",playerCount)
    if (playerCount <= count) {
      setplayerCount(playerCount + 1)
      // console.log("playerCount",playerCount)
    }
  }
  return (
    <div className='container col-md-8 my-5'>
      <div className="row justify-content-center">
        <form onSubmit={handleSubmit} className='col-md-6'>
          <h3 className='text-center'>Edit Team</h3>
          <div className='form-group my-3'>
            <input type="text" id='teamName' name="teamName" className="form-control" placeholder='Enter the team name' value={addTeam.teamName} onChange={handleInput} />
          </div>
          <div className="mb-3">
            <input type="text" name="teamImageUrl" id='teamImageUrl' className='form-control' placeholder='Add Team Image Url' value={addTeam.teamImageUrl} onChange={handleInput} />
          </div>
          <div className='form-group my-3' >
            <input type="number" name='addNoOfPlayers' className='form-control' id='addNoOfPlayers' placeholder='Add No Of Players' onChange={counSetter} value={count} />
          </div>
          <div className='form-group my-3' >
            <input type="teamLocation" name="teamLocation" id='addteamLocation' className='form-control' placeholder='Add Team Location' value={addTeam.teamLocation} onChange={handleInput} />
          </div>
          <div className='form-group text-center' hidden={playerCount <= count} >
            <button className='btn btn-primary' id='addTeam' type='submit' onClick={increaseCount}><FaPlusCircle /> Submit Team</button>
          </div>
        </form>
        <form onSubmit={handlePlayerSubmit} hidden={playerCount > count} className='col-md-6'>
          <h3>Sport Person {playerCount}</h3>
          <div className='form-group my-3' >
            <input type="text" name="firstName" id='firstName' className='form-control' placeholder='First Name' value={addPlayer.firstName} onChange={handlePlayerInput} />
          </div>
          <div className='form-group my-3' >
            <input type="text" name="secondName" id='secondName' className='form-control' placeholder='Last Name' value={addPlayer.secondName} onChange={handlePlayerInput} />
          </div>
          <div className='form-group my-3' >
            <input type="number" name="age" id='age' className='form-control' placeholder='Age' value={addPlayer.age} onChange={handlePlayerInput} />
          </div>
          <div className='form-group my-3' >
            <input type="text" name="gender" id='gender' className='form-control' placeholder='Gender' value={addPlayer.gender} onChange={handlePlayerInput} />
          </div>
          <div className='form-group my-3 text-center' >
            <button className='btn btn-primary' id='addPlayers' type='submit' onClick={increaseCount}><FaPlusCircle />Add Player</button>
          </div>
        </form>
      </div>
    </div>
  )
}
