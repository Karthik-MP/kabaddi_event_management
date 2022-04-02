
import {Navigate, Outlet} from 'react-router-dom'
const isLogin=()=>{
  const value=sessionStorage.getItem("auth");
  //  console.log(value==="false"? false: true)
  return value==="false"? false: true;
}
// export default function PrivateRoute() {
  export default function PrivateRoute({component:Component,...rest}) {
  return (isLogin() === true) ? <Outlet/> : <Navigate to="/user/login" exact />;
  
}
  
