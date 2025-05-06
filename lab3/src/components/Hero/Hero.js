import React from 'react'
import './Hero.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import slide1 from '../../assets/img/swiper/01.jpg';
import slide2 from '../../assets/img/swiper/02.jpg';
import slide3 from '../../assets/img/swiper/03.jpg';

const Hero = () => {
    const slides = [
        {
          title: 'ЖК Infinity Park',
          location: 'Львів',
          price: '66 250 грн',
          desc: 'Cучасний, стильний та продуманий до дрібниць житловий комплекс...',
          image: slide1
        },
        {
          title: 'ЖК SUMMERSTONE VILLAGE',
          location: 'Львів',
          price: '49 900 грн',
          desc: 'Новий житловий комплекс на вул.Орлика 18-Ж у Львові...',
          image: slide2
        },
        {
          title: 'ЖК SVOЇ CITY',
          location: 'Львів',
          price: '41 650 грн',
          desc: 'Новобудова комфорт класу. Поблизу парк, школи, садки...',
          image: slide3
        }
      ];
    
      return (
        <section className="hero">
          <Swiper
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="hero__swiper"
          >
            <div className='hero__wrapper'>
                {slides.map((s, idx) => (
                <SwiperSlide
                    key={idx}
                    className="hero__slide"
                    style={{ backgroundImage: `url(${s.image})`, backgroundSize: 'cover' }}
                >
                    <div className="info-block info-block--left">
                        <div className="info-block__category">{s.location}</div>
                        <h2 className="info-block__title">{s.title}</h2>
                        <div className="info-block__main info-block__main--grid">
                            <p className="info-block__data">{s.price}</p>
                            <div className="info-block__line"><span></span></div>
                            <p>{s.desc}</p>
                        </div>
                    </div>
                </SwiperSlide>
                ))}
            </div>
          </Swiper>
        </section>
      );
}

export default Hero