import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { FaEdit, FaTrash, FaStar } from 'react-icons/fa';
export default function Cards(props) {
    return (
        <div className="col-md-3 mx-2 my-2 mb-5">
            <div className="card p-2 overflow-hidden h-100 shadow">
                <img src={props.imageUrl} alt={props.title} className="card-img-top" />
                <div className="card-body">
                    <p className="card-text">{props.title}&emsp;&emsp;&emsp;
                        <FaStar color='black' /><FaStar color='black' /><FaStar color='black' />
                        <FaStar color='black' />
                    </p>
                    <p className="card-text">Venue: {props.place}&emsp;&emsp;&emsp;
                        <Link id='editTeam' className='mx-2' to={`/admin/editTeam/${props.id}`} style={{ color: 'black' }}><FaEdit /></Link>
                        <Link id='deleteTeam' className='mx-2' to={`/admin/deleteTeam/${props.id}`} style={{ color: 'black' }}><FaTrash /></Link>
                    </p>
                </div>
            </div>
        </div>
    )
}
Cards.defaultProps = {
    title: "Stadium Name",
    imageUrl: "Image Url",
    place: "Place"
}
Cards.propTypes = {
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    place: PropTypes.string.isRequired
}
