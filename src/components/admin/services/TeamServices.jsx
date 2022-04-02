import axios from "axios";
const TEAM_BASE_REST_API_URL = "http://localhost:8080/admin";
class TeamService {
  getAllTeams() {
    return axios.get(TEAM_BASE_REST_API_URL+"/getTeam");
  }
  createTeam(Team) {
    return axios.post(TEAM_BASE_REST_API_URL+"/addTeam",Team);
  }
  getTeamById(TeamID) {
    return axios.get(TEAM_BASE_REST_API_URL + "/getTeamById/" + TeamID);
  }
  updateTeam(TeamID, TEAM) {
    return axios.put(TEAM_BASE_REST_API_URL + "/editTeam/"+ TeamID,TEAM);
  }
  deleteTeam(TeamID) {
    return axios.delete(TEAM_BASE_REST_API_URL + "/" + TeamID);
  }
}
export default new TeamService();
