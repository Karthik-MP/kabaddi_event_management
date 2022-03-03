import React from 'react'
import PropTypes from 'prop-types'
import { FaStar } from 'react-icons/fa';
export default function Events(props) {
    return (
        <div className="col-md-3 mx-2 my-2 mb-5">
            <div className="card p-2 overflow-hidden h-100 shadow">
                <img src={props.imageUrl} alt={props.stadiumName} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{props.stadiumname}</h5>
                    <p className="card-text">Venue: {props.place}&emsp;&emsp;&emsp;
                    <FaStar color='black'/><FaStar color='black'/><FaStar color='black'/>
                    <FaStar color='black'/>           
                    </p>
                </div>
            </div>
        </div>
    )
}
Events.defaultProps = {
    stadiumName : "Stadium Name",
    imageUrl : "Image Url",
    place : "Place"
}
Events.propTypes = {
    stadiumName: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    place:PropTypes.string.isRequired
}

