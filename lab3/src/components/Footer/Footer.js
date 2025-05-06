import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import facebook from '../../assets/img/socials/facebook.png'
import instagram from '../../assets/img/socials/instagram.png'
import telegram from '../../assets/img/socials/telegram.png'

const Footer = () => {
  return (
    <footer class="footer">
        <div class="container">
            <div class="footer-left">
                <h2 class="ours">Контактна інформація:</h2>
                <p>Email: contact@rental.com</p>
                <p>Телефон: +380 50 123 45 67</p>
        
                <h3>Меню:</h3>
                <ul class="footer-links">
                    <li><Link to="/">Доступні квартири</Link></li>
                    <li><Link to="/bookings">Мої бронювання</Link></li>
                </ul>
            </div>
        
            <div class="footer-right">
                <h3>Слідкуйте за нами:</h3>
                <div class="socials">
                    <a href="https://facebook.com" target="_blank" class="social-link">
                        <img src={facebook} alt="Facebook"/>
                        <p>@orendalviv</p>
                    </a>
                    <a href="https://instagram.com" target="_blank" class="social-link">
                        <img src={instagram} alt="Instagram"/>
                        <p>orendalviv.com</p>
                    </a>
                    <a href="https://t.me/yourchannel" target="_blank" class="social-link">
                        <img src={telegram} alt="Telegram"/>
                        <p>orendalviv.tme</p>
                    </a>
                </div>
            </div>
        
            <div class="copy">&copy; 2025 Оренда житла. Всі права захищені.</div>
        </div>
        
    </footer>
  )
}

export default Footer