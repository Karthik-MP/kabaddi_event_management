
import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";


import Register from './components/Register';
import Dashboard from './components/Dashboard';
// import PrivateRoute from './utils/PrivateRoute';
function App() {
  return (
    <>
    <Router>
    <Navbar/>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/Register" element={<Register />} />
            <Route exact path="/Dashboard" element={<Dashboard />} />
            {/* <PrivateRoute component={<Dashboard/>} exact path="/Dashboard" /> */}
          </Routes>
    </Router>
    </>
  );
}

export default App;
