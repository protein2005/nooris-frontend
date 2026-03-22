import React from 'react';

import foto1 from '../../images/foto1.webp';
import foto2 from '../../images/foto2.webp';
import foto3 from '../../images/foto3.jpg';
import { useNavigate } from 'react-router-dom';

function MenuSection() {
  const navigate = useNavigate();

  return (
    <section className="menu shadow">
      <h2 className="visually-hidden">Nooris Meny</h2>
      <div className="menu__wrapper container">
        <div className="menu__content">
          <h3 className="menu__title">Menyutbud</h3>
          <p className="menu__subtitle">NÅGRA FAVORITER</p>
          <div className="menu__description">
            <p className="fw-600">
              Menyn är sammansatt för att ge variation, tydliga smaker och något som passar olika
              tillfällen.
            </p>
            <p>
              Här finns allt från lättare val till mer generösa rätter, alltid serverat med samma
              omtanke om upplevelsen runt bordet.
            </p>
          </div>
          <button onClick={() => navigate('/meny')} type="button" className="hero__button">
            SE HELA MENYN
          </button>
        </div>
        <div className="menu__images">
          <img src={foto1} alt="Nooris Luleå mat" className="menu__image menu__image--1" loading="lazy" />
          <div className="menu__image--wide">
            <img
              src={foto2}
              alt="Nooris Luleå mat"
              className="menu__image menu__image--2"
              loading="lazy"
            />
            <img
              src={foto3}
              alt="Nooris Luleå mat"
              className="menu__image menu__image--2"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default MenuSection;
