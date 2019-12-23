import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FaPlane } from "react-icons/fa";
import Moment from "react-moment";
import logo from "../assets/logo.png";
import destination from "../services/destination";
import "./Main.css";

export default function Main() {
    const [dataDestination, setDataDestination] = useState([]);

    useEffect(() => {
        destination
            .getDestination()
            .then(response => setDataDestination(response.data));
    }, []);

    return (
        <div className="main-container">
            <img src={logo} alt="Logo My bookings" />
            {dataDestination.length > 0 ? (
                <ul>
                    {dataDestination.map(bookings => (
                        <li key={bookings.destination}>
                            <img
                                src={bookings.thumb}
                                alt={bookings.destination}
                            />
                            <footer>
                                <strong>{bookings.destination}</strong>
                                <p>
                                    <Moment format="DD/MM">
                                        {bookings.outboundDate}
                                    </Moment>
                                    {" - "}
                                    <Moment format="DD/MM">
                                        {bookings.inboundDate}
                                    </Moment>
                                </p>
                            </footer>

                            <div className="buttons">
                                <button type="button">
                                    <FaPlane />
                                </button>

                                <button type="button">
                                    <FaTimes />
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <div className="empty">Sem bookings no momento!</div>
            )}
        </div>
    );
}
