import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import React from 'react'
import Signup from './components/user/Signup';
import Navbar from './components/Navbar';
import Homepage from './components/user/Homepage';
import Auth from './components/user/Auth';
import AuthAdmin from './components/admin/Auth';
import SignupAdmin from './components/admin/Signup';
import PrivateRoute from './utils/PrivateRoute';
import ViewBooking from './components/user/ViewBooking';
import Booking from "./components/user/Booking";
import EditEvent from "./components/user/EditEvent";
import Addvenue from "./components/admin/Addvenue";
import Addteam from "./components/admin/Addteam";
import Addreferee from "./components/admin/Addreferee";
import Getteam from "./components/admin/Getteam";
import GetVenues from "./components/admin/GetVenues";
import EditVenue from "./components/admin/EditVenue";
import EditReferee from "./components/admin/EditReferee";
import EditTeam from "./components/admin/EditTeam";
function App() {
  if(sessionStorage.getItem("auth")===null){
    sessionStorage.setItem("auth",false)
  }
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/user/login" element={<Auth />} />
          <Route exact path="/admin/login" element={<AuthAdmin />} />
          <Route exact path="/admin/signup" element={<SignupAdmin />} />
          <Route exact path="/user/signup" element={<Signup />} />


          {/* <Route exact path="/user/homepage" element={<Homepage />} /> */}

          <Route exact path='/' element={<PrivateRoute />}>
            <Route exact path="/user/homepage" element={<Homepage />} />
            <Route exact path='/user/getSchedule' element={<ViewBooking />} />
            <Route exact path='/user/bookEvent' element={<Booking />} />
            <Route exact path='/admin/editEvent/:id' element={<EditEvent />} />
            <Route exact path='/admin/editVenue/:id' element={<EditVenue />} />
            <Route exact path='/admin/addVenue/' element={<Addvenue />} />
            <Route exact path='/admin/getTeam/' element={<Getteam />} />
            <Route exact path='/admin/addTeam/' element={<Addteam />} />
            <Route exact path='/admin/editTeam/:id' element={<EditTeam />} />
            <Route exact path='/admin/addReferee/' element={<Addreferee />} />
            <Route exact path="/admin/getVenue" element={<GetVenues />} />
            {/* <Route exact path="/Teams" element={<Team />} /> */}
            <Route exact path="/AddVenue" element={<Addvenue />} />
            <Route exact path="/AddReferee" element={<Addreferee />} />
            <Route exact path="/EditVenue/:id" element={<EditVenue />} />
            <Route exact path="/admin/editReferee/:id" element={<EditReferee />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}
export default App;
