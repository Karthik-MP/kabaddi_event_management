import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import bcrypt from 'bcryptjs'
export default function Signup() {
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors }
  } = useForm({
    defaultValues: {
      adminUser: "",
      emailAddress: "",
      userName: "",
      Mobile: "",
      password: "",
      confirmPassword: "",
    },
    criteriaMode: "all"
  });

  console.log(errors)
  const onSubmit =(data) => {
    const salt = bcrypt.genSaltSync(10)
    const hashed = bcrypt.hashSync(getValues("password"), salt)
    setValue('password', hashed)
    console.log("pass", getValues("password"));   
    // compare the password user entered with hashed pass.
    // async function compareIt(password) {
    //   const validPassword = await bcrypt.compare(password, hashedPassword);
    // }
    // compareIt(password);
    alert('Sucessful!! :-)\n\n' + JSON.stringify(data, null, 4));
    fetch("http://localhost:8080/Kabaddi/Register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    }).then(() => {
      console.log("Sucessful")
    })
    return false;
  };
  const handleAdminUser = (event) => {
    setValue('adminUser', event.target.value)
    console.log(getValues('adminUser'))
  }
  return (
    <div className='container col-md-4'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="border rounded mx-3 my-3 px-3">
          <h4 className="mt-4 text-center mb-4">Register to Kabaddi Leguage Management</h4>
          <select className="form-select" id='admin/user' defaultValue={'DEFAULT'} onChange={handleAdminUser}>
            <option value="" disabled hidden value='DEFAULT'>Choose User...</option>
            <option value="Admin">Admin</option>
            <option value="User">User</option>
          </select>
          <div className="form-group">
            <label className="form-label">User Name</label>
            <input id='username' type="text" {...register("userName", { required: "This is required." })} className="form-control" />
            {errors.userName && <p style={{ color: "red" }}>{errors.userName.message}</p>}
          </div>
          <div className="form-group">
            <label className="form-label">Email Id</label>
            <input id='email' type="email" {...register("emailAddress", { required: "This is required." })} className="form-control" />
            {errors.emailAddress && <p style={{ color: "red" }}>{errors.emailAddress.message}</p>}
          </div>
          <div className="form-group">
            <div className="col">
              <label >Phone number</label>
              <input id='mobileNumber' type="number"{...register("Mobile", { required: "This is required.", minLength: { value: 10, message: "Enter the correct Mobile" }, maxLength: { value: 10, message: "Enter the correct Mobile" } })} className="form-control" required />
            </div>
            <div className='text-center'>{errors.Mobile && <p style={{ color: "red" }}>{errors.Mobile.message}</p>}</div>
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
            <Link className='nav-link' id='signinLink' to='/'>Already a Member?</Link>
          </div>
        </div>
      </form>
    </div>
  )
}
