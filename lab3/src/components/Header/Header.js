import React from 'react'
import logo from '../../assets/img/logo.jpg'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <Link to="/"><img className="logo" src={logo} alt="logo" /></Link>
        <nav className="menu">
          <ul className="menu__list">
            <li><a className="menu__link" href="#apartments">Доступні квартири</a></li>
            <li><Link className="menu__link" to="/bookings">Мої бронювання</Link></li>
            <li><a className="menu__link" href="#contacts">Контакти</a></li>
          </ul>
        </nav>
        <div className="header__login">Увійти</div>
      </div>
    </header>
  )
}

export default Header