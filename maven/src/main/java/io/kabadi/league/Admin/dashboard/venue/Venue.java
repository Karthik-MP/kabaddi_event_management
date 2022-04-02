package io.kabadi.league.Admin.dashboard.venue;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="venue")
public class Venue {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(name="venuename")
    private String venueName;

    @Column(name="venueimageurl")
    private String venueImageURL;

    @Column(name="venuedescription")
    private String venueDescription;

    @Column(name="venuelocation")
    private String venueLocation;

    @Column(name="venuecapacity")
    private String venueCapacity;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getVenueCapacity() {
        return venueCapacity;
    }

    public void setVenueCapacity(String venueCapacity) {
        this.venueCapacity = venueCapacity;
    }

    public String getVenueName() {
        return venueName;
    }

    public void setVenueName(String venueName) {
        this.venueName = venueName;
    }

    public String getVenueImageURL() {
        return venueImageURL;
    }

    public void setVenueImageURL(String venueImageURL) {
        this.venueImageURL = venueImageURL;
    }

    public String getVenueDescription() {
        return venueDescription;
    }

    public void setVenueDescription(String venueDescription) {
        this.venueDescription = venueDescription;
    }

    public String getVenueLocation() {
        return venueLocation;
    }

    public void setVenueLocation(String venueLocation) {
        this.venueLocation = venueLocation;
    }
    
}
