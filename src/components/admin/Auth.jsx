import React, { useState } from 'react'
import { Link, useNavigate,Navigate } from 'react-router-dom'
import AuthServices from './services/AuthServices';

export default function Auth() {
    const initialState = {
        email: "",
        password: "",
    };
    const [user, setUser] = useState(initialState);
    const credentialChange = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };
    const navigate = useNavigate();
    const handleReset = () => {
        setUser(initialState);
    };
    const [err, setErr] = useState('');
    
    const handleLogins=(e)=>{ 
        console.log(user)
        e.preventDefault();
        try{
            AuthServices.getLogin(user).then((Response)=>{
                console.log(Response)
                sessionStorage.setItem("auth",true);
                sessionStorage.setItem("userRole",true);
                navigate("/admin/getVenue");
                window.location.reload(false);
            })
        }catch(e){
            setErr(e)
            console.log(e);
            sessionStorage.setItem("auth",false);
        }
        
    }
    const isLogin = () => {
        if(sessionStorage.getItem('auth')===true){
            // console.log('asds',sessionStorage.getItem('auth'))
            navigate("/user/homepage");
        }
        else{
            return  false;
        }
      }
    return (
        <>
        
        {isLogin() === false ?
        <div className='container mt-5 col-4' style={{ backgroundColor: "#f8f9fa" }}>
            <h3 className='text-center my-3 mx-2 pt-4'>Login</h3>
            <form className='my-3 mx-2'>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input  autoComplete="username" type="email" className="form-control" value={user.email} name="email" onChange={credentialChange} id="email" placeholder="Enter Email" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password"  className="form-control" placeholder="Enter Password" name="password" onChange={credentialChange} value={user.password} id="password" />
                </div>
                <div className='text-center'>
                    <button className="btn btn-primary my-2 mx-2" disabled={user.email.length === 0 || user.password.length === 0}  onClick={handleLogins} id='loginButton'>Login</button>
                    <button className="btn btn-primary my-2 mx-2" onClick={handleReset}>Reset</button>
                </div>
                <div className="my-3 mb-2 text-center">
                    <Link className='nav-link' id='signinLink' to='/admin/signup'>New User/admin? Sign Up</Link>
                </div>
            </form>
        </div>:<Navigate to='/user/homepage'/>
        }
        </>
    )
}
