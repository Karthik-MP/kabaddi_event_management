import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
export default function EditEvent() {
    const { id }  = useParams();
    console.log(id);
    const dataBase={
        venuename: "asdasd",
        username: "asdasd",
        address: "asda",
        number: "asdas",
        email: "asdasd",
        location: "asdasd",
        date: "21/09/2002",
        time: "4:00",
        noofmembers: "80"
    }
    useEffect(()=>{
        setUserBooking({
            venuename: dataBase.venuename,
            username: dataBase.username,
            address:  dataBase.address,
            number: dataBase.number,
            email: dataBase.email,
            location:  dataBase.location,
            date: dataBase.date,
            time: dataBase.time,
            noofmembers: dataBase.noofmembers,
        })
    },[])
    const [userBooking, setUserBooking] = useState({
        venuename: "",
        username: "",
        address: "",
        number: "",
        email: "",
        location: "",
        date: "",
        time: "",
        noofmembers: ""
    });

    const [data, setData] = useState([]);

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value);
        setUserBooking({ ...userBooking, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newData = { ...userBooking, id: new Date().getTime().toString() }
        console.log(data);
        setData([...data, newData]);
        console.log(data);
        setUserBooking({
            venuename: "", username: "", address: "", number: "",
            email: "", location: "", dte: "", time: "", noofmembers: ""
        });
    }
    return (
        <div className='container  col-md-4 my-5'>
            <form onSubmit={handleSubmit}>
                <h3 className='text-center'>Book Event</h3>
                <div className='form-group my-3' >
                    <input type="text" id='eventName' name="venuename" className="form-control" placeholder='Venue Name' value={userBooking.venuename} onChange={handleInput} />
                </div>
                <div className='form-group my-3' >
                    <input type="text" id='applicantName' name="username" className='form-control' placeholder='Enter applicant name' value={userBooking.username} onChange={handleInput} />
                </div>
                <div className='form-group my-3' >
                    <input type="text" name="address" id='applicantAddress' className='form-control' placeholder='Enter applicant address' value={userBooking.address} onChange={handleInput} />
                </div>
                <div className='form-group my-3' >
                    <input type="tel" className='form-control' id='applicantMobileNo' pattern="[0-9]*" maxLength={10} name="number" placeholder='Enter applicant mobile no' value={userBooking.number} onChange={handleInput} />
                </div>
                <div className='form-group my-3' >
                    <input type="email" name="email" id='applicantEmailId' className='form-control' placeholder='Enter applicant mail Id' value={userBooking.email} onChange={handleInput} />
                </div>
                <h5 className='text-center'>Event Detials</h5>
                <div className='form-group my-3' >
                    <input type="location" name="location" id='eventAddress' className='form-control' placeholder='Address' value={userBooking.location} onChange={handleInput} />
                </div>
                <div className='form-group my-3' >
                    <input type="number" name="noofmembers" id='noOfPepole' className='form-control' maxLength={12} placeholder='Enter the number of teams members' value={userBooking.noofmembers} onChange={handleInput} />
                </div>
                <div className='form-group my-3' >
                    <div className="row g-3">
                        <div className="col-sm-6">
                            <input type="time" name="time" id='eventTime' className='form-control' placeholder='Enter the time of the match' value={userBooking.time} onChange={handleInput} />
                        </div>
                        <div className="col-sm-6">
                            <input type="date" name="date" id='eventDate' className='form-control' placeholder='Enter date of the event' value={userBooking.date} onChange={handleInput} />
                        </div>
                    </div>
                </div>
                <div className='form-group my-3 text-center' >
                    <button className='btn btn-primary' id='BookVenue' type='submit'>Update the Venue</button>
                </div>
            </form>
        </div>
    )
}
