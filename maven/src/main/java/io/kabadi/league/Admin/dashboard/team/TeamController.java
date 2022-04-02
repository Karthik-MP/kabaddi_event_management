package io.kabadi.league.Admin.dashboard.team;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/admin")
@CrossOrigin
public class TeamController {

    @Autowired
    private TeamRepository trepo;

    @GetMapping("/getTeam")
    public List<Team> getTeam(){
        return trepo.findAll();
    }

    @DeleteMapping("/deleteTeam/{id}")
    public Long deleteteam(@PathVariable long id){
        trepo.deleteById(id);
        return id;
    }

    @PostMapping("/addTeam")
    public Team addTeam(@RequestBody Team team){
        return trepo.save(team);
    }

    @GetMapping("/getTeamById/{id}")
    public Optional<Team> getTeamById(@PathVariable Long id){
        return trepo.findById(id);
    }


    @PutMapping("/editTeam/{id}")
    public Team editTeam(@RequestBody Team team,@PathVariable long id){
        Team tteam=new Team();
        tteam.setId(id);
        tteam.setTeamName(team.getTeamName());
        tteam.setTeamLocation(team.getTeamLocation());
        tteam.setTeamImageUrl(team.getTeamImageUrl());
        tteam.setPlayerDetails(team.getPlayerDetails());
        return trepo.save(tteam);
    }
    
}