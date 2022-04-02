import axios from "axios";
const REFEREE_BASE_REST_API_URL = "http://localhost:8080/admin";
class refereeService {
  getAllReferees() {
    return axios.get(REFEREE_BASE_REST_API_URL+"/getReferee");
  }
  createReferee(referee) {
    return axios.post(REFEREE_BASE_REST_API_URL+"/addReferee",referee);
  }
  getRefereeById(refereeID) {
    return axios.get(REFEREE_BASE_REST_API_URL + "/getRefereeById/" + refereeID);
  }
  updateReferee(refereeID, referee) {
    return axios.put(REFEREE_BASE_REST_API_URL + "/editReferee/" + refereeID,referee);
  }
  deleteReferee(refereeID) {
    return axios.delete(REFEREE_BASE_REST_API_URL + "/deleteReferee/" + refereeID);
  }
}
export default new refereeService();
