import React from 'react'
import './Contacts.css'

const Contacts = () => {
  return (
    <section id="contacts" class="contacts">
        <div class="container">
            <h2 class="title">Надішліть ваш відгук:</h2>
            
            <form class="contact-form ">
                <label class="contact-form__label" htmlFor="name">Ваша пошта:</label>
                <input class="contact-form__input" type="email" id="name" name="name" required />
                
                <label class="contact-form__label" htmlFor="message">Повідомлення:</label>
                <textarea class="contact-form__textarea" id="message" name="message" required></textarea>
                
                <button class="contact-form__button" type="submit">Надіслати</button>
            </form>
        </div>
    </section>
  )
}

export default Contacts