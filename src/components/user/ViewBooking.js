import React from 'react'
import { Link } from 'react-router-dom'
import {  FaEdit,FaTrash } from 'react-icons/fa';
export default function ViewBooking() {
    const bookedEventsData = [
        {
            id: 1,
            VenueName: 'Gandhi Stadium',
            place: 'Delhi',
            date:'28/02/22',
            time:'4pm to 5pm',
            totalPrice:1500
        },
        {
            id: 2,
            VenueName: 'Nehru Stadium',
            place: 'Chennai',
            date:'2/02/22',
            time:'4pm to 5pm',
            totalPrice:2500
        },
        {
            id: 3,
            VenueName: 'Gachibowli Stadium',
            place: 'Hyderabad',
            date:'28/02/21',
            time:'4pm to 5pm',
            totalPrice:2501
        },
        {
            id: 4,
            VenueName: 'Netaji Indoor Stadium',
            place: 'Kolkata',
            date:'28/02/22',
            time:'4pm to 5pm',
            totalPrice:2500
        },
        {
            id: 5,
            VenueName: 'Kanteerava Stadium',
            place: 'Bangalore',
            date:'28/02/22',
            time:'4pm to 5pm',
            totalPrice:2500
        },
        {
            id: 6,
            VenueName: 'G.M.S Stadium',
            place: 'Hyderabad',
            date:'28/02/22',
            time:'4pm to 5pm',
            totalPrice:2500
        }
    ]

    return (
        <div className='container col-10 text-center'>
            <h2 className='my-5'>Booked Events</h2>
            <table className="table-secondary table table-striped table-hover">
                <thead className='table-dark'>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Venue Name</th>
                        <th scope="col">Time</th>
                        <th scope="col">Date</th>
                        <th scope="col">Total Price</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {bookedEventsData.map((element) => {
                        return <>
                            <tr>
                                <th scope="row">{element.id}</th>
                                <td>{element.VenueName}</td>
                                <td>{element.time}</td>
                                <td>{element.date}</td>
                                <td>{element.totalPrice}</td>
                                <td><Link to={`user/editEvent/${element.id}`} style={{color:'black'}}><FaEdit/></Link></td>
                                <td><Link to={`user/deleteEvent/${element.id}`} style={{color:'black'}}><FaTrash/></Link></td>
                            </tr>
                        </>
                    })}
                </tbody>
            </table>
            
            <button type="button" className="btn btn-dark" ><Link style={{ color: "white", textDecoration: "None" }} to="/user/homepage">Back to home</Link></button>
        </div>

    )
}
