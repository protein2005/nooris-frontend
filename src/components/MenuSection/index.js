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
          <h3 className="menu__title">Vår meny</h3>
          <p className="menu__subtitle">ETT AXPLOCK</p>
          <div className="menu__description">
            <p className="fw-600">
              Vår meny har ett helhetsutbud som är anpassat för att alla ska vara nöjda.
            </p>
            <p>
              Vår meny erbjuder något för alla. Vi strävar efter att kunna servera kunderna inte
              bara den bästa maten, utan även en fantastisk service och helhetsupplevelse.
            </p>
          </div>
          <button onClick={() => navigate('/meny')} type="button" className="hero__button">
            LÄS HELA MENYN
          </button>
        </div>
        <div className="menu__images">
          <img
            src={foto1}
            alt="Nooris Luleå mat"
            className="menu__image menu__image--1"
            loading="lazy"
          />
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
