import React from 'react';
import { useNavigate } from 'react-router-dom';

function BookingSection() {
  const navigate = useNavigate();
  return (
    <section class="booking">
      <div class="booking__overlay">
        <div class="booking__content">
          <h2 class="booking__title">Vill ni boka bord?</h2>
          <p class="booking__subtitle">UPPlev VÅR restaurang</p>
          <button
            onClick={() => navigate('/bokabord')}
            class="hero__button"
            aria-label="Boka bord på Panelen Luleå">
            BOKA BORD
          </button>
          <p class="booking__description">Vi hjälper med er bokning, ring oss på</p>
          <address class="booking__address">
            <a href="tel:+46920270444">+46 920 27 04 44</a>
          </address>
        </div>
      </div>
    </section>
  );
}

export default BookingSection;
