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
        <div className="main__ad" id="reviews">
          <h3 className="main__ad-title">Наш ассортимент со временем пополняется!</h3>
          <p className="main__ad-subtitle">Приходите ещё!</p>
        </div>
        <div className="main__reviews">
          <div className="main__reviews__item">
            <img src="https://sun120-1.userapi.com/s/v1/if1/gBAsKDTnDMi5NmOcuzveNMkVfSZvbcGoUToz-LtMdrnGNPuDTzwVeE3SPyuFasPETFTa39Lc.jpg?quality=96&crop=94,28,538,538&as=50x50,100x100,200x200,400x400&ava=1&u=sLH9cCzErjQ-eWkjtrTqIC6HuTW43zlckXUwtEDYXm4&cs=200x200" className="main__reviews__item-img" />
            <h3 className="main__reviews__item-name">Ирина Веткина</h3>
            <p className="main__reviews__item-text">Все есть, хороший магазин, то что работает до 20.00 каждый день 👍</p>
          </div>
          <div className="main__reviews__item">
            <img src="https://sun120-1.userapi.com/s/v1/if2/P2YjlmQOxrdP4qL_CMdbDb_mJBl3yr6U8d-6zyoLJ0M6UR5l2WfUjhQXTzU2pZtTZ7EcS1itHzJkryu7TKiCPWp5.jpg?quality=95&crop=52,228,1296,1296&as=50x50,100x100,200x200,400x400&ava=1&u=YBkwA6aAC3qxFVZcyTJMJQz-Uq968tpDcZAEZKWiHW8&cs=200x200" className="main__reviews__item-img" />
            <h3 className="main__reviews__item-name">Наталья Кокосова</h3>
            <p className="main__reviews__item-text">Хороший магазин есть всё для хозтоваров и не только</p>
          </div>
          <div className="main__reviews__item">
            <img src="https://sun120-2.userapi.com/s/v1/if2/ezxf9fb2MFh408p0_Wb2GiKpFG7VMPHTB7ce1VMQ-TEPNWhfexdHQAqy6RIN3uyNmGnMr7_ToObvfWLW_pxGYVL5.jpg?quality=95&crop=403,710,1237,1237&as=50x50,100x100,200x200,400x400&ava=1&u=BjoeoleR56hYb2ZyjsNhMB1L4e1hMDjoq1BOWrvG7oM&cs=200x200" className="main__reviews__item-img" />
            <h3 className="main__reviews__item-name">Игорь Прилучный</h3>
            <p className="main__reviews__item-text">Обычный небольшой магазин. Очень мало магазинов открывающихся рано, а этот работает с 8. Очень удобно заскочить перед работой.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
};

export default Home;
