package io.kabadi.league.Admin.dashboard.referee;

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
public class RefereeController {
    
    @Autowired
    private RefereeRepository rrepo;

    @GetMapping("/getReferee")
    public List<Referee> getReferee(){
        return rrepo.findAll();
    }

    @GetMapping("/getRefereeById/{id}")
    public Optional<Referee> getVenueById(@PathVariable Long id){
        return rrepo.findById(id);
    }


    @PostMapping("/addReferee")
    public Referee addReferee(@RequestBody Referee referee){
        return rrepo.save(referee);
    }

    @DeleteMapping("/deleteReferee/{id}")   
    public Long deleteReferee(@PathVariable Long id){
        rrepo.deleteById(id);
        return id;
    }

    @PutMapping("/editReferee/{id}")
    public Referee editReferee(@RequestBody Referee referee,@PathVariable Long id){
        Referee rreferee =new Referee();
        rreferee.setId(id);
        rreferee.setRefereeName(referee.getRefereeName());
        rreferee.setNoOfMatches(referee.getNoOfMatches());
        rreferee.setRefereeLocation(referee.getRefereeLocation());
        return rrepo.save(rreferee);
    }
}
