  import axios from "axios";
  const Signup_BASE_REST_API_URL = "http://localhost:8080/admin/signup";
  class SignupServices {
 
      createUser(user) {
          return axios.post(Signup_BASE_REST_API_URL, user);
        }
  
  }
  export default new SignupServices();
