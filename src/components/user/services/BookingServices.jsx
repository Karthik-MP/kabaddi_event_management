import axios from "axios";
const BASE_REST_API_URL = "http://localhost:8080/user/";
class BookingServices {
    createBooking(event) {
        return axios.post(BASE_REST_API_URL, event);
    }
}
export default new BookingServices();
