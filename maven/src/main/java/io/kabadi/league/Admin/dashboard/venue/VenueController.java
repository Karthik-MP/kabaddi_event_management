package io.kabadi.league.Admin.dashboard.venue;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/admin")
@CrossOrigin
public class VenueController {
    
    @Autowired
    private VenueRepository vrepo;

    @GetMapping("/getVenue")
    public List<Venue> getVenue(){
        return vrepo.findAll();
    }

    @GetMapping("/getVenueById/{id}")
    public Optional<Venue> getVenueById(@PathVariable Long id){
        return vrepo.findById(id);
    }

    @PostMapping("/addVenue")
    public String postMethodName(@RequestBody Venue venue) {
        vrepo.save(venue);
        return("Add Sucessfully");
    }

    @DeleteMapping("/deleteVenue/{id}")
    public Long deleteVenue(@PathVariable Long id){
        vrepo.deleteById(id);
        return id;
    }

    @PutMapping("/editVenue/{id}")
    public Venue editVenue(@RequestBody Venue venue,@PathVariable Long id){
        Venue vvenue=new Venue();
        vvenue.setId(id);
        vvenue.setVenueName(venue.getVenueName());
        vvenue.setVenueImageURL(venue.getVenueImageURL());
        vvenue.setVenueDescription(venue.getVenueDescription());
        vvenue.setVenueLocation(venue.getVenueDescription());
        vvenue.setVenueCapacity(venue.getVenueCapacity());
        return vrepo.save(vvenue);
    }
    
}
