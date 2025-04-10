import React from 'react';
import logo from '../../images/logo.svg';

function Footer() {
  return (
    <footer class="footer">
      <div class="footer__wrapper container">
        <div class="footer__column">
          <h2 class="footer__title">Nooris</h2>
          <p>
            Panelen ett självklart val för dig som sätter högt värde på noga utvalda råvaror, god
            mat och dryck med kött i fokus.
          </p>
          <p>
            Precis som i köket kommer vi ha grymma bartenders som har koll på hur man blandar lyxiga
            cocktails alltså en kombination som är svårslaget.
          </p>
          <img src={logo} alt="Panelen Steakhouse Logo" class="footer__logo" />
        </div>

        <div class="footer__column">
          <h2 class="footer__title">Öppettider</h2>
          <p>
            <strong>Måndag</strong>
            <br />
            11.00-14.00
          </p>
          <p>
            <strong>Tisdag – Torsdag</strong>
            <br />
            11.00-14.00
            <br />
            16:00-22:00
          </p>
          <p>
            <strong>Fredag</strong>
            <br />
            11.00-14.00
            <br />
            16:00-23:00
          </p>
          <p>
            <strong>Lördag</strong>
            <br />
            12:00-14.30
            <br />
            16:00-23:00
          </p>
          <p class="footer__note">Köket stänger en timme före stängningstid.</p>
        </div>

        <div class="footer__column">
          <h2 class="footer__title">Meny</h2>
          <ul class="footer__list">
            <li>First Round</li>
            <li>2 Share Or not 2 Share</li>
            <li>Second Round</li>
            <li>Kött För Två</li>
            <li>Final Round</li>
            <li>Wine</li>
          </ul>
        </div>

        <div class="footer__column">
          <h2 class="footer__title">Kontakt</h2>
          <p>
            Storgatan 43
            <br />
            972 31 <strong>Luleå</strong>
          </p>
          <p>
            <a href="tel:092033030" class="footer__phone">
              0920 – 330 30
            </a>
            <br />
            <a href="mailto:lulea@panelen.nu" class="footer__email">
              lulea@panelen.nu
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
