import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Style from './Produto.module.css';
import Rotor from './photos/Rotor.png';
import Corcel from './photos/Corcel.png';
import Perkins from './photos/Perkins.png';
import Montana from './photos/Montana.png';
import Valvula from './photos/ValvulaScania.png';
import Mt from './photos/29 MT.png';

function Produtos() {
  return (
    <Swiper
      className={Style.carrosel}
      spaceBetween={80}
      slidesPerView={3}
      breakpoints={{
        425: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
    >
      <SwiperSlide>
        <div className={Style.Bar}>
          <img src={Rotor} alt="" />
          <h3>Solenóide para motor de Corcel</h3>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={Style.Bar}>
          <img src={Corcel} alt="" />
          <h3>Solenóide para motor de Corcel</h3>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={Style.Bar}>
          <img src={Montana} alt="" />
          <h3>Solenóide para motor de Corcel</h3>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={Style.Bar}>
          <img src={Perkins} alt="" />
          <h3>Solenóide para motor de Corcel</h3>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={Style.Bar}>
          <img src={Mt} alt="" />
          <h3>Solenóide para motor do 29MT</h3>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={Style.Bar}>
          <img src={Valvula} alt="" />
          <h3>Valvula do motor da scania</h3>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default Produtos;