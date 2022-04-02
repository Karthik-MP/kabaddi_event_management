import axios from "axios";
const BASE_REST_API_URL = "http://localhost:8080/admin/getVenue";
class HomepageServices {
  getAllHomepage() {
    return axios.get(BASE_REST_API_URL);
  }
  getHomepageById(HomepageID) {
    return axios.get(BASE_REST_API_URL + "/" + HomepageID);
  }
}
export default new HomepageServices();
