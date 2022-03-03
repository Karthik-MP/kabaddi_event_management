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
import Bookingform from "./components/Bookingform";



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
            <Route exact path='/user/bookingform' element={<Bookingform/>}/>
          
            
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
