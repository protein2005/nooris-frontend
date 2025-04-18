import React from 'react';

function SupportSection() {
  return (
    <section className="support shadow">
      <h2 className="support__slogan">Hur kan vi hjälpa dig?</h2>
      <div className="support__wrapper container">
        <div className="support__kontakt">
          <h3 className="support__title">Har du frågor?</h3>
          <p className="support__subtitle">Hör gärna av dig!</p>
          <i
            classNameName="fas fa-mobile-screen"
            style={{ fontSize: '42px', marginBottom: '10px' }}></i>
          <a className="support__phone" href="tel:+46920270444">
            +46 920 27 04 44
          </a>
          <p className="support__address">Storgatan 46F, 972 31 Luleå</p>
        </div>
        <div className="support__calendar">
          <h3 className="calendar__title">Öppettider</h3>
          <p className="calendar__subtitle">Besök oss.</p>
          <div className="calendar__wrapper">
            <div className="calendar__date">
              <p>
                <strong>Måndag – Lördag</strong>
              </p>
              <p>11:00-22:00</p>
            </div>
            <div className="calendar__date">
              <p>
                <strong>Söndag</strong>
              </p>
              <p>Stängd</p>
            </div>
          </div>
          <p className="calendar__note">Köket stänger en timme före stängningstid.</p>
        </div>
        <div className="support__map">
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
