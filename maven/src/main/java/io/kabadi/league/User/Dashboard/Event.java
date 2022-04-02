package io.kabadi.league.User.Dashboard;

import javax.persistence.Entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="event")
public class Event {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    @Column(name="eventname")
    private String eventName;

    @Column(name="applicantname")
    private String applicantName;
    
    @Column(name="applicantaddress")
    private String applicantAddress;

    @Column(name="applicantmobile")
    private String applicantMobile;

    @Column(name="applicantemail")
    private String applicantEmail;

    @Column(name="eventaddress")
    private String eventAddress;

    @Column(name="eventfromdate")
    private Date eventFromDate;

    @Column(name="eventtodate")
    private Date eventToDate;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEventName() {
        return eventName;
    }

    public void setEventName(String eventName) {
        this.eventName = eventName;
    }

    public String getApplicantName() {
        return applicantName;
    }

    public void setApplicantName(String applicantName) {
        this.applicantName = applicantName;
    }

    public String getApplicantAddress() {
        return applicantAddress;
    }

    public void setApplicantAddress(String applicantAddress) {
        this.applicantAddress = applicantAddress;
    }

    public String getApplicantMobile() {
        return applicantMobile;
    }

    public void setApplicantMobile(String applicantMobile) {
        this.applicantMobile = applicantMobile;
    }

    public String getApplicantEmail() {
        return applicantEmail;
    }

    public void setApplicantEmail(String applicantEmail) {
        this.applicantEmail = applicantEmail;
    }

    public String getEventAddress() {
        return eventAddress;
    }

    public void setEventAddress(String eventAddress) {
        this.eventAddress = eventAddress;
    }

    public Date getEventFromDate() {
        return eventFromDate;
    }

    public void setEventFromDate(Date eventFromDate) {
        this.eventFromDate = eventFromDate;
    }

    public Date getEventToDate() {
        return eventToDate;
    }

    public void setEventToDate(Date eventToDate) {
        this.eventToDate = eventToDate;
    }

    
}
