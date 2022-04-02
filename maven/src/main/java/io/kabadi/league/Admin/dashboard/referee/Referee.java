package io.kabadi.league.Admin.dashboard.referee;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="referee")
public class Referee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="refereename")
    private String refereeName;

    @Column(name="noofmatches")
    private int noOfMatches;

    @Column(name="location")
    private String refereeLocation;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getRefereeName() {
        return refereeName;
    }

    public void setRefereeName(String refereeName) {
        this.refereeName = refereeName;
    }

    public int getNoOfMatches() {
        return noOfMatches;
    }

    public void setNoOfMatches(int noOfMatches) {
        this.noOfMatches = noOfMatches;
    }

    public String getRefereeLocation() {
        return refereeLocation;
    }

    public void setRefereeLocation(String refereeLocation) {
        this.refereeLocation = refereeLocation;
    }

    
}
