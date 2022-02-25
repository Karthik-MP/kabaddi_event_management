
import {Route, Navigate} from 'react-router-dom'
const isLogin=()=>{
    return sessionStorage.getItem("auth")
}
export default function PrivateRoute({component:Component,...rest}) {
  return (
    <Route {...rest} render={props => {
        return (isLogin() === "true") ? <Component/> : <Navigate to="/" exact />;
    }} />
  )
}
