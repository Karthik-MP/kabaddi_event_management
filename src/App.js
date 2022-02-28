
import './App.css';

import Signup from './components/Signup';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Auth from './components/Auth';
import PrivateRoute from './utils/PrivateRoute';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";



function App() {
  return (
    <>
    <Router>
    <Navbar/>
          <Routes>
            <Route exact path="/user/login" element={<Auth />} />
            <Route exact path="/user/signup" element={<Signup/>} />
            <Route exact path="/user/homepage" element={<Homepage/>} />
            {/* <Route exact path="/Register" element={<Register/>} /> */}
            
            <Route exact path='/' element={<PrivateRoute/>}>
              <Route exact path='/' element={<Homepage/>}/>
            </Route>
          </Routes>
    </Router>
    </>
  );
}

export default App;
