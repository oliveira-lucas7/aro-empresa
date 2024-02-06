import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Style from './css/Carrosel.module.css';
import Rotor from './photos/Rotor.png';
import Corcel from './photos/Corcel.png';
import Perkins from './photos/Perkins.png';
import Montana from './photos/Montana.png';
import Valvula from './photos/ValvulaScania.png';
import Mt from './photos/29 MT.png';

function Testando() {
  return (
    <Swiper className={Style.carrosel}

    style={{
      "--swiper-pagination-color": "#DAA540",
      "--swiper-theme-color": "#DAA540",
      "--swiper-pagination-bullet-inactive-color": "#999",
      "--swiper-pagination-bullet-inactive-opacity": "1",
    }}

    spaceBetween={30}
    slidesPerView={3}
    breakpoints={{
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
        "--swiper-pagination-color": "display-none",
        "--swiper-theme-color": "display-none",
        "--swiper-pagination-bullet-inactive-color": "display-none",
        "--swiper-pagination-bullet-inactive-opacity": "display-none"
        },
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
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      navigation
      //pagination={{ clickable: true }}
      //scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
        <section className={Style.produtos}>
        <SwiperSlide>
        <div className={Style.Bar}>
          <img src={Rotor} alt="" />
          <h3>Rotor do motor Pálio Punto</h3>
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
          <h3>Solenóide para motor de Montana</h3>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={Style.Bar}>
          <img src={Perkins} alt="" />
          <h3>Solenóide para motor de trator PKS</h3>
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
      </section>
    </Swiper>
  );
};

export default Testando