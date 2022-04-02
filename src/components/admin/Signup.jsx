import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import bcrypt from 'bcryptjs'
import SignupServices from './services/SignupServices';
export default function Signup() {
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors }
  } = useForm({
    defaultValues: {
      userRole: "",
      email: "",
      username: "",
      mobileNumber: "",
      password: "",
      confirmPassword: "",
    },
    criteriaMode: "all"
  });
  const navigate = useNavigate();
  const onSubmit = async(data) => {
    const salt = bcrypt.genSaltSync(10)
    const hashed = bcrypt.hashSync(getValues("password"), salt)
    setValue('password', hashed)
    console.log("pass", getValues("password"));   
        SignupServices
          .createUser(data)
          .then((response) => {
            console.log(response.data);
            sessionStorage.setItem("auth",true);
            alert("Sucessful");
            navigate("/admin/login");
          })
          .catch((error) => {
          console.log(error);
          });
  };
  const handleAdminUser = (event) => {
    setValue('userRole', event.target.value)
  }
  return (

    <div className='container col-md-4'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="border rounded mx-3 my-3 px-3">
          <h4 className="mt-4 text-center mb-4">Register to Kabaddi Leguage Management</h4>
          <select className="form-select" id='admin/user' defaultValue={'DEFAULT'} onChange={handleAdminUser}>
            <option disabled hidden value='DEFAULT'>Choose User...</option>
            <option value="ADMIN">Admin</option>
            <option value="USER">User</option>
          </select>
          <div className="form-group">
            <label className="form-label">User Name</label>
            <input id='username' type="text" {...register("userName", { required: "This is required." })} className="form-control" />
            {errors.userName && <p style={{ color: "red" }}>{errors.userName.message}</p>}
          </div>
          <div className="form-group">
            <label className="form-label">Email Id</label>
            <input id='email' type="email" {...register("email", { required: "This is required." })} className="form-control" />
            {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
          </div>
          <div className="form-group">
            <div className="col">
              <label >Phone number</label>
              <input id='mobileNumber' type="number"{...register("mobileNumber", { required: "This is required.", minLength: { value: 10, message: "Enter the correct mobileNumber" }, maxLength: { value: 10, message: "Enter the correct mobileNumber" } })} className="form-control" required />
            </div>
            <div className='text-center'>{errors.mobileNumber && <p style={{ color: "red" }}>{errors.mobileNumber.message}</p>}</div>
          </div>
          <div className="form-group">
            <label className="form-label">Create Password</label>
            <input id='password' type="Password" {...register("password", {
              required: "This is required.", minLength: { value: 8, message: "Password must have at least 8 characters" }, validate: (value) =>
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value) ||
                "Password Should contain at least one Number, one upperCase and one lowercase letter and a special character"
            })} className="form-control" />
            {errors.password && <p style={{ color: "red" }}>{errors.password.message}</p>}
          </div>
          <div className="form-group">
            <label className="form-label">Confirm Password</label>
            <input id='confirmPassword' type="Password"{...register("confirmPassword", {
              required: "This is required.",
              validate: value =>
                value === getValues("password") || "The passwords do not match"
            })} className="form-control" />
            {errors.confirmPassword && <p style={{ color: "red" }}>{errors.confirmPassword.message}</p>}
          </div>

          <div className="text-center mt-4 mb-1">
            <button type='submit' id='submitButton' className="btn btn-primary">Register</button>
          </div>
          <div className="my-3 mb-2 text-center">
            <Link className='nav-link' id='signinLink' to='/admin/login'>Already a Member?</Link>
          </div>
        </div>
      </form>
    </div>
  )
}
