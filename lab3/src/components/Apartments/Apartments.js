import React, { useState } from 'react';
import './Apartments.css'

const Apartments = ({ apartments, onBook }) => {
  const [visibleCount, setVisibleCount] = useState(6);
  const [priceSort, setPriceSort] = useState(""); // 'asc' | 'desc'
  const [roomFilter, setRoomFilter] = useState(""); // '1', '2', etc.

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  const handleSortChange = (e) => {
    setPriceSort(e.target.value);
  };

  const handleRoomFilterChange = (e) => {
    setRoomFilter(e.target.value);
  };

  let filtered = [...apartments];

  if (roomFilter) {
    filtered = filtered.filter((apt) => apt.rooms === parseInt(roomFilter));
  }

  if (priceSort === "asc") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (priceSort === "desc") {
    filtered.sort((a, b) => b.price - a.price);
  }

  const visibleApartments = filtered.slice(0, visibleCount);

  return (
    <section id="apartments" className="apartments">
      <div className="container apartments__container">
        <h2 className="title">Доступні квартири</h2>

        <div className="filters">
          <select onChange={handleSortChange} defaultValue="">
            <option value="">Сортувати за ціною</option>
            <option value="asc">↑ Від дешевих до дорогих</option>
            <option value="desc">↓ Від дорогих до дешевих</option>
          </select>

          <select onChange={handleRoomFilterChange} defaultValue="">
            <option value="">Фільтр за кількістю кімнат</option>
            <option value="1">1 кімната</option>
            <option value="2">2 кімнати</option>
            <option value="3">3 кімнати</option>
            <option value="4">4 кімнати</option>
            <option value="5">5 кімнат</option>
          </select>
        </div>

        <div className="apartments__body">
          {visibleApartments.map((apt) => (
            <div className="apartmens__card card" key={apt.id}>
              <img className="card__img" src={apt.img} alt={`Квартира ${apt.id}`} />
              <h3>{apt.title}</h3>
              <p>Адреса: {apt.address}</p>
              <p>Кількість кімнат: {apt.rooms}</p>
              <p>Ціна за ніч: {apt.price} грн</p>
              <button className="card__btn card__btn-offer" onClick={() => onBook(apt.id)}>
                Забронювати
              </button>
            </div>
          ))}
        </div>

        {visibleCount < filtered.length && (
          <button className="apartments__toggleButton" onClick={handleShowMore}>
            показати ще...
          </button>
        )}
      </div>
    </section>
  );
};

export default Apartments