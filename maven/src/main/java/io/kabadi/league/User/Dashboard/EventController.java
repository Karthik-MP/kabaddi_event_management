package io.kabadi.league.User.Dashboard;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/user")
@CrossOrigin
public class EventController {
    
    @Autowired
    private EventRepsitory erepo;

    @GetMapping("/getSchedule")
    public List<Event> viewEvent() {
        return erepo.findAll();
    }

    @PostMapping("/bookEvent")
    public Event bookEvent(@RequestBody Event event){
        return erepo.save(event);
    }

    @DeleteMapping("/deleteEvent/{id}")
    public Long deleteEvent(@PathVariable Long id){
        erepo.deleteById(id);
        return id;
    }

    @PutMapping("/editEvent/{id}")
    public Event editEvent(@RequestBody Event event,@PathVariable Long id){
        Event eevent =new Event();
        eevent.setId(id);
        eevent.setEventName(event.getEventName());
        eevent.setApplicantName(event.getApplicantName());
        eevent.setApplicantAddress(event.getApplicantAddress());
        eevent.setApplicantMobile(event.getApplicantMobile());
        eevent.setApplicantEmail(event.getApplicantEmail());
        eevent.setEventAddress(event.getEventAddress());
        eevent.setEventFromDate(event.getEventFromDate());
        eevent.setEventToDate(event.getEventToDate());
        return erepo.save(eevent);
    }
    
}
