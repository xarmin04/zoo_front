import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import "./ZooTickets.css"



const Booking = () => {
    const [date, setDate] = useState(new Date());
    const [adultTickets, setAdultTickets] = useState(0);
    const [childTickets, setChildTickets] = useState(0);
    const [elderTickets, setElderTickets] = useState(0);
    const [bookingResult, setBookingResult] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post("http://localhost:8000/book_ticket/", {
                date: date.toISOString().split("T")[0],
                adult_tickets: adultTickets,
                child_tickets: childTickets,
                elder_tickets: elderTickets
            });
            setBookingResult(response.data);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div>
            <h2 className="Title-ZooTicket">Book Zoo Tickets</h2>
            <form onSubmit={handleSubmit} className="Zoo-ticket">
                <div>
                    <label>Date:</label>
                    <DatePicker selected={date} onChange={(date) => setDate(date)} />
                </div>
                <div>
                    <label>Adult Tickets:</label>
                    <label className="ticket-price"> 30£ </label>
                    <input type="number" value={adultTickets} onChange={(e) => setAdultTickets(e.target.value)} />
                </div>
                <div>
                    <label>Child Tickets:</label>
                    <label className="ticket-price"> 20£ </label>
                    <input type="number" value={childTickets} onChange={(e) => setChildTickets(e.target.value)} />
                </div>
                <div>
                    <label>Elder Tickets:</label>
                    <label className="ticket-price"> 25£ </label>
                    <input type="number" value={elderTickets} onChange={(e) => setElderTickets(e.target.value)} />
                </div>
                <button type="submit">Book Tickets</button>
            </form>
            {bookingResult && (
    <div className="Zoo-ticket">
        <h3>Booking Successful!</h3>
        <p>Date: {bookingResult[0]}</p>
        {bookingResult[1].map(ticket => (
            <div key={ticket.type}>
                <p>{ticket.type.charAt(0).toUpperCase() + ticket.type.slice(1)} Tickets: {ticket.quantity}</p>
            </div>
        ))}
    </div>
)}


        </div>
    );
};


// ZooTickets.js




export default Booking;

