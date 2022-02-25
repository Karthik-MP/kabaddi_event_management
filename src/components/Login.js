import React, { useEffect, useState } from 'react'


export default function Login() {
    const initialState = {
        email: "",
        password: "",
    };
    const [user, setUser] = useState(initialState);
    const credentialChange = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };

    const handleReset = () => {
        setUser(initialState);
    };
    const handleLogins=()=>{
        sessionStorage.setItem("auth",true)
    }
    useEffect(()=>{
        sessionStorage.clear();
        sessionStorage.setItem("auth",false)
    })
    return (
        <div className='container col-4' style={{ backgroundColor: "#f8f9fa" }}>
            <h3 className='text-center my-3 mx-2'>Login</h3>
            <form className='my-3 mx-2'>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input  autoComplete="username" type="email" className="form-control" value={user.email} name="email" onChange={credentialChange} id="exampleInputEmail1" placeholder="Enter Email" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" autoComplete="current-password" className="form-control" placeholder="Enter Password" name="password" onChange={credentialChange} value={user.password} id="exampleInputPassword1" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" >Check me out</label>
                </div>
                <div className='text-center'>
                    <button className="btn btn-primary my-2 mx-2" disabled={user.email.length === 0 || user.password.length === 0}  onClick={handleLogins} >Login</button>
                    <button className="btn btn-primary my-2 mx-2" onClick={handleReset}>Reset</button>
                </div>
            </form>
        </div>
    )
}
