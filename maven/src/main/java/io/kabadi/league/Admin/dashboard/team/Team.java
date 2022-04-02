package io.kabadi.league.Admin.dashboard.team;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

@Entity
@Table(name="team")
public class Team {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="TeamName")
    private String TeamName;

    @Column(name="TeamLocation")
    private String TeamLocation;

    @Column(name="TeamImageUrl")
    private String TeamImageUrl;
    
    @ManyToMany(cascade=CascadeType.ALL,fetch = FetchType.EAGER)
    @JoinTable(name="teamplayerlink",joinColumns = @JoinColumn(referencedColumnName = "id"),inverseJoinColumns=@JoinColumn(referencedColumnName = "id"))
    private List<PlayerDetails> playerDetails;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTeamName() {
        return TeamName;
    }

    public String getTeamImageUrl() {
        return TeamImageUrl;
    }

    public void setTeamName(String TeamName) {
        this.TeamName = TeamName;
    }

    public void setTeamImageUrl(String TeamImageUrl) {
        this.TeamImageUrl = TeamImageUrl;
    }

    public String getTeamLocation() {
        return TeamLocation;
    }

    public void setTeamLocation(String TeamLocation) {
        this.TeamLocation = TeamLocation;
    }

    public List<PlayerDetails> getPlayerDetails() {
        return playerDetails;
    }

    public void setPlayerDetails(List<PlayerDetails> playerDetails) {
        this.playerDetails = playerDetails;
    }

    
}