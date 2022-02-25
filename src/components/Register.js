import React from 'react'
import { Link } from 'react-router-dom';
// import Alert from './Alert';
import { useForm } from "react-hook-form";
export default function Register() {
  // const initialState = {
  //   email: "",
  //   userName: "",
  //   phNumber: "",
  //   password: "",

  // };
  const { register, formState: { errors }, handleSubmit, getValues } = useForm({});
  const vPassword = getValues("password");
  // password.current = watch("password", "");
  // const [confPassword, setconfPassword] = useState("")
  // const [user, setUser] = useState(initialState);
  // const credentialChange = (event) => {
  //   const { name, value } = event.target;
  //   setUser({ ...user, [name]: value });
  // };

  // const handleReset = () => {
  //   setUser(initialState);
  // };
  // const handleConfPassword=(e)=>{
  //   setconfPassword(e.target.value)
  // }

  // const handleSubmit = () => {
  //   console.log(user.email);
  //   console.log(user.userName);
  //   console.log(user.password);
  //   console.log(user.phNumber);
  //   sessionStorage.setItem("auth", true);
  //   if (user.password === confPassword) {
  //     <Alert message="Password does not match"/>
  //     // fetch("http://localhost:8080/Kabaddi/Register", {
  //     //   method: "POST",
  //     //   headers: { "Content-Type": "application/json" },
  //     //   body: JSON.stringify(user)
  //     // }).then(() => {
  //     //   console.log("Sucessful")
  //     // })
  //   }
  //   else {
  //     <Alert message="Password does not match"/>
  //   }

  // }

  const onSubmit = async data => {
    alert(JSON.stringify(data));
  };
  return (
    <div className='container col-4 my-4' style={{ backgroundColor: "#f8f9fa" }}>
      <h3 className='text-center pt-3'>Register</h3>
      <form className='my-3 mx-2 px-5' onSubmit={e => e.preventDefault()}>

        <div className="mb-3">
          <input autoComplete="email" type="email" {...register("emailAddress", { required: true })} {...register("emailAddress", { required: true })} className="form-control" name="email" placeholder="Enter Email" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <input autoComplete="username" {...register("userName", { required: true })} className="form-control" name="userName" placeholder="User Name" />
        </div>
        <div className="mb-3">
          <input {...register("phoneNumber", { required: true })} className="form-control" type="number" pattern="[0-9]*" length="10" name='phoneNumber' placeholder="Enter Number" />
        </div>
        <div className="mb-3">
          <input name="password" type="password" className="form-control" placeholder='New Password' {...register("password",{required: "You must specify a password",
           minLength: {value: 8, message: "Password must have at least 8 characters"},
              validate: (value) =>
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=[^!"#$%&'()*+,-.:;<=>?@[]^_`{|}~]*[!"#$%&'()*+,-.:;<=>?@[]^_`{|}~])(?=D*d)/.test(value) ||
                "Password Should contain at least one Number, one upperCase and one lowercase letter and a special character"
            })}
          /> {errors.password && <p>{errors.password.message}</p>}
        </div>
        <div className="mb-3">
          <input type="password" autoComplete="new-password" {...register("confirmPassword", {
            validate: value =>
              value === vPassword || "The passwords do not match"
          })} className="form-control" placeholder="Confirm Password" name="confirmPassword" />
          {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
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
