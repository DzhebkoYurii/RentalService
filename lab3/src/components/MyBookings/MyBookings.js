import React from 'react'
import './MyBookings.css'
import { useNavigate } from "react-router-dom";

const MyBookings = ({ booked }) => {
  const navigate = useNavigate();
  return (
    <section id="bookings" className="bookings">
        <div className="container">
        <h2 className="title">Мої бронювання</h2>
        <div className="bookings__body">
            {booked.map(apt => (
            <div key={apt.id} className="bookings__card card">
                <img className="card__img" src={apt.img} alt={`Квартира ${apt.id}`} />
                <h3 onClick={() => navigate(`/apartment/${apt.id}`)}>{apt.title}</h3>
                <p>Адреса: {apt.address}</p>
                <p>Кількість кімнат: {apt.rooms}</p>
                <p>Ціна за ніч: {apt.price} грн</p>
                <button className="card__btn card__btn-expired">{apt.startDate} - {apt.endDate}</button>
            </div>
            ))}
        </div>
        </div>
    </section>
  )
}

export default MyBookings