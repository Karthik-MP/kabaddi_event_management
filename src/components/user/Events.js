import React from 'react'
import PropTypes from 'prop-types'

export default function Events(props) {
    return (
        <div className="col-md-3 mx-2 my-2 mb-5">
            <div className="card p-2 overflow-hidden h-100 shadow">
                <img src={props.imageUrl} alt={props.stadiumName} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">{props.stadiumname}</h5>
                    <p className="card-text">Place: {props.place}&emsp;&emsp;&emsp;
                        <span className="fa fa-star checked fa-lg" aria-hidden="true"></span>
                        <span className="fa fa-star checked fa-lg" aria-hidden="true"></span>
                        <span className="fa fa-star checked fa-lg" aria-hidden="true"></span>
                        <span className="fa fa-star-half-o checked fa-lg" aria-hidden="true"></span>
                        <span className="fa fa-star-o unchecked fa-lg" aria-hidden="true"></span>
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

