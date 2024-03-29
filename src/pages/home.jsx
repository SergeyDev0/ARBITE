import React from "react";
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import MainCard from "../components/mainCard/MainCard";
import catalog from "../data/catalogData.json";
import Modal from "../components/modal/Modal";
import 'swiper/css';
import 'swiper/css/pagination';

const Home = () => {
  
  return (
    <>
      <Header />
      <main className="main">
        <Modal />
        <h1 className="main__title">Арбайт предлагает вам строительные материалы по выгодным <div id="catalog"></div> ценам!</h1>
        <h2 className="main__subtitle">Каталог</h2>
        <div className="main__wrapper-cards">
          {
            catalog.map((item, index) => (
              <MainCard 
                key={index}
                id={index}
                name={item.name}
                description={item.description}
                img={item.img}
              />
            ))
          }
        </div>
        <div className="main__ad">
          <h3 className="main__ad-title">Наш ассортимент со временем пополняется!</h3>
          <p className="main__ad-subtitle">Приходите ещё!</p>
        </div>
        <div className="main__reviews">
          <Swiper
            // install Swiper modules
            modules={[Pagination]}
            spaceBetween={50}
            slidesPerView={3}
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <div className="main__review"></div>
            </SwiperSlide>
            <SwiperSlide></SwiperSlide>
            <SwiperSlide></SwiperSlide>
            <SwiperSlide></SwiperSlide>
          </Swiper>
        </div>
      </main>
      <Footer />
    </>
  )
};

export default Home;
