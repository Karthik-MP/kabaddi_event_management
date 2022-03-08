import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";

import Signup from './components/Signup';
import Navbar from './components/Navbar';
import Homepage from './components/user/Homepage';
import Auth from './components/Auth';
import PrivateRoute from './utils/PrivateRoute';
import ViewBooking from './components/user/ViewBooking';
import Booking from "./components/user/Booking";
import EditEvent from "./components/user/EditEvent";
import Addvenue from "./components/admin/Addvenue";
import Addteam from "./components/admin/Addteam";
import Addreferee from "./components/admin/Addreferee";
import Getteam from "./components/admin/Getteam";




function App() {
  return (
    <>
    
    <Router>
    <Navbar/>
          <Routes>
            <Route exact path="/user/login" element={<Auth />} />
            <Route exact path="/user/signup" element={<Signup/>} />
  
            <Route exact path="/user/homepage" element={<Homepage/>} />
            <Route exact path='/user/getSchedule' element={<ViewBooking/>}/>
            <Route exact path='/user/bookEvent' element={<Booking/>}/>
            <Route exact path='/user/editEvent/:id' element={<EditEvent/>}/>
            
            <Route exact path='/admin/addVenue/' element={<Addvenue/>}/>
            <Route exact path='/admin/getTeam/' element={<Getteam/>}/>
            <Route exact path='/admin/addTeam/' element={<Addteam/>}/>
            <Route exact path='/admin/addReferee/' element={<Addreferee/>}/>
          
            
            <Route exact path='/' element={<PrivateRoute/>}>
              {/* <Route exact path='/' element={<Homepage/>}/>
              <Route exact path='/user/getSchedule' element={<Booking/>}/> */}
            </Route>
          </Routes>
    </Router>
    </>
  );
}

export default App;
