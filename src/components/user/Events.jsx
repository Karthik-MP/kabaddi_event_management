import React from 'react'
import PropTypes from 'prop-types'
import { FaStar } from 'react-icons/fa';
export default function Events(props) {
    return (
        <div className="col-md-3 mx-2 my-2 mb-5">
            <div className="card p-2 overflow-hidden h-100 shadow">
                <img src={props.imageUrl} alt={props.title} className="card-img-top" />
                <div className="card-body">
                    <div className="text-center">
                        <h5 className="card-title">{props.title}</h5>
                    </div>
                    <p className="card-text">Venue: {props.place}&emsp;&emsp;&emsp;
                        <FaStar color='black' /><FaStar color='black' /><FaStar color='black' />
                        <FaStar color='black' />
                    </p>
                </div>
            </div>
        </div>
    )
}
Events.defaultProps = {
    title: "Stadium Name",
    imageUrl: "Image Url",
    place: "Place"
}
Events.propTypes = {
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    place: PropTypes.string.isRequired
}
