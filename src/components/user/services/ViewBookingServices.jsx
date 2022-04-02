import axios from "axios";
const BASE_REST_API_URL = "http://localhost:8080/user/";
class ViewBookingServices {
  getAllBooking(url) {
    return axios.get(BASE_REST_API_URL+""+url);
  }
  updateBooking(bookingID, booking) {
    return axios.put(BASE_REST_API_URL + "/" + bookingID, booking);
  }
  deleteBooking(bookingID) {
    return axios.delete(BASE_REST_API_URL + "/" + bookingID);
  }
}
export default new ViewBookingServices();
