import React from 'react';

function SupportSection() {
  return (
    <section className="support shadow">
      <div className="support__intro container">
        <p className="support__eyebrow">Kontakt</p>
        <h2 className="support__slogan">Allt du behöver för att hitta till oss</h2>
      </div>

      <div className="support__wrapper container">
        <div className="support__panel support__panel--contact">
          <p className="support__label">Kontaktuppgifter</p>
          <h3 className="support__title">Frågor, bokning eller snabb kontakt</h3>
          <p className="support__subtitle">
            Ring oss gärna om du vill boka, ställa en fråga eller få hjälp inför ditt besök.
          </p>
          <a className="support__phone" href="tel:+46920270444">
            +46 920 27 04 44
          </a>
          <p className="support__address">Storgatan 46F, 972 31 Luleå</p>
        </div>

        <div className="support__panel support__panel--calendar">
          <p className="support__label">Öppettider</p>
          <h3 className="calendar__title">När dörrarna är öppna</h3>
          <p className="calendar__subtitle">Kom förbi när det passar dig bäst.</p>
          <div className="calendar__wrapper">
            <div className="calendar__date">
              <p>
                <strong>Måndag – Lördag</strong>
              </p>
              <p>11:00 - 22:00</p>
            </div>
            <div className="calendar__date">
              <p>
                <strong>Söndag</strong>
              </p>
              <p>11:00 - 21:00</p>
            </div>
          </div>
          <p className="calendar__note">Köket stänger en timme före ordinarie stängningstid.</p>
        </div>

        <div className="support__map-card">
          <div className="support__map-copy">
            <p className="support__label">Hitta hit</p>
            <h3 className="support__title">Mitt i Luleå</h3>
            <p className="support__subtitle">
              Restaurangen ligger centralt och är enkel att nå, oavsett om du kommer till fots eller
              med bil.
            </p>
          </div>

          <div className="support__map-frame">
            <iframe
              title="Google map showing Nooris kök & bar"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1649.1916928457567!2d22.156494!3d65.5845444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x467f65bc1e6f1409%3A0x5d64ee4ab6f1d85!2sNooris%20k%C3%B6k%20%26%20bar!5e0!3m2!1suk!2sua!4v1743862359561!5m2!1suk!2sua"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SupportSection;
