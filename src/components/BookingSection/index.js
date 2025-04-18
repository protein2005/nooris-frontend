import React from 'react';
import { useNavigate } from 'react-router-dom';

function BookingSection() {
  const navigate = useNavigate();
  return (
    <section className="booking">
      <h1 className="visually-hidden">Nooris Boka Bord</h1>
      <div className="booking__overlay">
        <div className="booking__content">
          <h2 className="booking__title">Vill ni boka bord?</h2>
          <p className="booking__subtitle">UPPlev VÅR restaurang</p>
          <button
            onClick={() => navigate('/bokabord')}
            className="hero__button"
            aria-label="Boka bord på Nooris Luleå"
            type="button">
            BOKA BORD
          </button>
          <p className="booking__description">Vi hjälper med er bokning, ring oss på</p>
          <address className="booking__address">
            <a href="tel:+46920270444">+46 920 27 04 44</a>
          </address>
        </div>
      </div>
    </section>
  );
}

export default BookingSection;
