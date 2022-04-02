import axios from "axios";
const LOGIN_BASE_REST_API_URL = "http://localhost:8080/admin/login";
class AuthServices {
  getLogin(user) {
    return axios.post(LOGIN_BASE_REST_API_URL,user);
  }
 
}
export default new AuthServices();