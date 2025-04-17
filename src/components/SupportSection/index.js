import React from 'react';

function SupportSection() {
  return (
    <section class="support shadow">
      <h2 class="support__slogan">Hur kan vi hjälpa dig?</h2>
      <div class="support__wrapper container">
        <div class="support__kontakt">
          <h3 class="support__title">Har du frågor?</h3>
          <p class="support__subtitle">Hör gärna av dig!</p>
          <i
            className="fas fa-mobile-screen"
            style={{ fontSize: '42px', marginBottom: '10px' }}></i>
          <a class="support__phone" href="tel:+46920270444">
            +46 920 27 04 44
          </a>
          <p class="support__address">Storgatan 46F, 972 31 Luleå</p>
        </div>
        <div class="support__calendar">
          <h3 class="calendar__title">Öppettider</h3>
          <p class="calendar__subtitle">Besök oss.</p>
          <div class="calendar__wrapper">
            <div class="calendar__date">
              <p>
                <strong>Måndag – Lördag</strong>
              </p>
              <p>11:00-22:00</p>
            </div>
            <div class="calendar__date">
              <p>
                <strong>Söndag</strong>
              </p>
              <p>Stängd</p>
            </div>
          </div>
          <p class="calendar__note">Köket stänger en timme före stängningstid.</p>
        </div>
        <div class="support__map">
          <iframe
            title="Google map showing Nooris kök & bar"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1649.1916928457567!2d22.156494!3d65.5845444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x467f65bc1e6f1409%3A0x5d64ee4ab6f1d85!2sNooris%20k%C3%B6k%20%26%20bar!5e0!3m2!1suk!2sua!4v1743862359561!5m2!1suk!2sua"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </section>
  );
}

export default SupportSection;
