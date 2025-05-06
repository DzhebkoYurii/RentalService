import React from 'react'
import './Discount.css'

import icon from '../../assets/img/discount.png'

const Discount = () => {
  return (
    <section class="discount">
        <div class="container discount__wrapper">
            <div class="discount__body">
                <img src={icon} alt="" class="discount__image"/>
                <div class="discount__content">
                    <div class="discount__title">10% Знижка <br/>  На першу покупку</div>
                    <a href="#apartments" class="button discount__button">До пропозицій</a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Discount