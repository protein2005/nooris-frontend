import React from 'react';
import logo from '../../images/logo.svg';
import { useNavigate } from 'react-router-dom';

function HeroSection() {
  const navigate = useNavigate();
  return (
    <section className="hero">
      <div className="hero__overlay">
        <div className="hero__content">
          <img src={logo} alt="Nooris Luleå logotyp" className="hero__logo" loading="lazy" />
          <h1 className="hero__title">VÄLKOMMEN TILL NOORIS KÖK & BAR</h1>

          <p className="hero__subtitle">Boka bord och njut av en fantastisk matupplevelse.</p>
          <button
            onClick={() => navigate('/bokabord')}
            className="hero__button"
            aria-label="Boka bord på Nooris Luleå"
            type="button">
            BOKA BORD
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
