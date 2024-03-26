import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <main className="main">
        <h1 className="main__title">Арбайт предлагает вам строительные материалы по выгодным <div id="catalog"></div> ценам!</h1>
        <h2 className="main__subtitle">Каталог</h2>
        <div className="main__wrapper-cards">
          <div className="main__card">
            <img className="main__card--img" src='https://avatars.mds.yandex.net/get-sprav-products/5399152/2a0000018825a3e51adc8165e9ab41f6cc3d/XXL' alt='Крепёж и фурнитура' />
            <h3 className="main__card-title">Крепёж и фурнитура</h3>
            <p className="main__card-subtitle">Гвозди, дюбели, уголки, саморезы, анкера, хомуты и пр. (на развес и поштучно)</p>
          </div>
          <div className="main__card">
            <img className="main__card--img" src='https://avatars.mds.yandex.net/get-sprav-products/9854027/2a0000018825a38e4c268b0e41befc6fd04e/XXL' alt='Сантехника' />
            <h3 className="main__card-title">Сантехника</h3>
            <p className="main__card-subtitle">Смесители, унитазы, раковины, ремкомплекты, душевые шланги и насадки, водяные счётчики и пр.</p>
          </div>
          <div className="main__card">
            <img className="main__card--img" src='https://avatars.mds.yandex.net/get-sprav-products/9685839/2a0000018825a395cb9581a0237d73e9bc7a/XXL' alt='Строительная химия' />
            <h3 className="main__card-title">Строительная химия</h3>
            <p className="main__card-subtitle">Монтажная пена, жидкие гвозди, клеи, гели, изолента и пр.</p>
          </div>
          <div className="main__card">
            <img className="main__card--img" src='https://avatars.mds.yandex.net/get-sprav-products/9854027/2a0000018825a3a0a80853c2953c2162153d/XXL' alt='Садовый инвентарь и инструмент' />
            <h3 className="main__card-title">Садовый инвентарь и инструмент</h3>
            <p className="main__card-subtitle">Лопаты, грабли, тяпки, черенки, вилы, веники, совки и пр.</p>
          </div>
          <div className="main__card">
            <img className="main__card--img" src='https://avatars.mds.yandex.net/get-sprav-products/9854027/2a0000018825a3c0d343ced9ec409d816fd7/XXL' alt='Лакокрасочные материалы' />
            <h3 className="main__card-title">Лакокрасочные материалы</h3>
            <p className="main__card-subtitle">Низкие цены, профессиональный подбор!</p>
          </div>
          <div className="main__card">
            <img className="main__card--img" src='https://avatars.mds.yandex.net/get-sprav-products/9685839/2a0000018825a3944bcc9282fac0499e06c8/XXL' alt='Строительный электроинструмент' />
            <h3 className="main__card-title">Строительный электроинструмент</h3>
            <p className="main__card-subtitle">В продаже имеется: Шуруповерты, дрели, шлифмашинки, сварочные аппараты, перфораторы, бензопилы, паяльные лампы.</p>
          </div>
        </div>
        <div className="main__ad">
            <h3 className="main__ad-title">Наш ассортимент со временем пополняется!</h3>
            <p className="main__ad-subtitle">Приходите ещё!</p>
          </div>
      </main>
      <Footer />
    </>
  )
};

export default Home;
