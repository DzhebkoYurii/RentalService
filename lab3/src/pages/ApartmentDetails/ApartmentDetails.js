import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ApartmentDetails.css';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";

const ApartmentDetails = ({ apartments }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const [comment, setComment] = useState("");
  const apartment = apartments.find(apt => apt.id === parseInt(id));

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (!user) {
      navigate('/register');
    } else {
      alert("Ваш відгук надіслано: " + comment);
      setComment("");
    }
  };

  if (!apartment) return <div>Квартира не знайдена</div>;

  return (
    <section className="apartment-detail">
      <div className="container">
        <h2 className="title">{apartment.title}</h2>
        <img className="detail__img" src={apartment.img} alt={apartment.title} />
        <div className="detail__info">
          <p><strong>Адреса:</strong> {apartment.address}</p>
          <p><strong>Кількість кімнат:</strong> {apartment.rooms}</p>
          <p><strong>Ціна за ніч:</strong> {apartment.price} грн</p>
          <p><strong>Опис:</strong> {apartment.description || 'Опис тимчасово відсутній.'}</p>
        </div>

        <div className="comments">
          <h3>Відгуки</h3>
          {/* Тут можуть бути реальні відгуки */}

          <form onSubmit={handleCommentSubmit} className="comment-form">
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Залиште свій відгук..."
              required
            ></textarea>
            <button type="submit">Надіслати</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ApartmentDetails;
