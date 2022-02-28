import React from 'react'
import { Link } from 'react-router-dom';
// import Alert from './Alert';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
export default function Register() {
  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters'),
    confirmPassword: Yup.string()
      .required('Confirm Password is required')
      .oneOf([Yup.ref('password')], 'Passwords must match')

  });

  const formOptions = { resolver: yupResolver(validationSchema) };
  const { register, formState: { errors }, handleSubmit } = useForm(formOptions);
  function onSubmit(data) {
    // display form data on success
    console.log(JSON.stringify(data))
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 4));
    fetch("http://localhost:8080/Kabaddi/Register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      }).then(() => {
        console.log("Sucessful")
      })
    return false;
  }

  // const onSubmit = (data) => console.log(data);



  return (
    <div className='container col-4 my-4' style={{ backgroundColor: "#f8f9fa" }}>
      <h3 className='text-center pt-3'>Register</h3>
      <form className='my-3 mx-2 px-5' onSubmit={e => e.preventDefault()}>

        <div className="mb-3">
        <input  {...register("emailAddress", { required: true })} className="form-control" name="emailAddress" type="email" placeholder="Enter Email Address" aria />
        </div>
        <div className="mb-3">
          <input autoComplete="username" {...register("userName", { required: true })} className="form-control" name="userName" placeholder="User Name" />
        </div>
        <div className="mb-3">
          <input {...register("phoneNumber", { required: true })} className="form-control" type="number" pattern="[0-9]*" length="10" name='phoneNumber' placeholder="Enter Number" />
        </div>

        <div className="mb-3">
          <input name="password" type="password" placeholder="Password" {...register('password')} className={`form-control ${errors.password ? 'is-invalid' : ''}`} />
          <div className="invalid-feedback">{errors.password?.message}</div>
        </div>
        <div className="mb-3">

          <input name="confirmPassword" type="password" {...register('confirmPassword')} placeholder="Confirm Password" className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`} />
          <div className="invalid-feedback">{errors.confirmPassword?.message}</div>
        </div>

        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" />
          <label className="form-check-label" >Check if Admin</label>
        </div>
        <div className='text-center'>
          {/* <button className="btn btn-primary my-2 mx-2" onClick={handleSubmit} >Submit</button>
          <button className="btn btn-primary my-2 mx-2" disabled={user.email.length === 0 && user.password.length === 0 && user.phNumber.length === 0 && user.userName.length === 0} onClick={handleReset}>Reset</button> */}
          <button className="btn btn-primary my-2 mx-2" type="submit" onClick={handleSubmit(onSubmit)}>Submit</button>
          <button className="btn btn-primary my-2 mx-2" >Reset</button>
        </div>
        <div className="mb-3 text-center">
          <Link className='nav-link' to='/'>Already a Member?</Link>
        </div>
      </form>

    </div>
  )
}
