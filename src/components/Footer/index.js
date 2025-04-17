import React from 'react';
import logo from '../../images/logo.svg';
import { Link, useNavigate } from 'react-router-dom';
import { menuCategories } from '../../utils/menuCategories';

function Footer() {
  const navigate = useNavigate();
  return (
    <footer class="footer">
      <div class="footer__wrapper container">
        <div class="footer__column">
          <h2 onClick={() => navigate('/admin')} class="footer__title">
            Nooris
          </h2>
          <p>
            Nooris är ett självklart val för dig som sätter högt värde på noga utvalda råvaror, god
            mat och dryck med kött i fokus.
          </p>
          <p>
            Precis som i köket kommer vi ha grymma bartenders som har koll på hur man blandar lyxiga
            cocktails – alltså en kombination som är svårslagen.
          </p>

          <img src={logo} alt="Panelen Steakhouse Logo" class="footer__logo" />
        </div>

        <div class="footer__column">
          <h2 class="footer__title">Öppettider</h2>
          <p>
            <strong>Måndag – Lördag</strong>
            <br />
            11.00-22.00
          </p>
          <p>
            <strong>Söndag</strong>
            <br />
            stängd
          </p>
          <p class="footer__note">Köket stänger en timme före stängningstid.</p>
        </div>

        <div class="footer__column">
          <h2 class="footer__title">Meny</h2>
          <ul class="footer__list">
            {menuCategories.map((category) => (
              <li key={category.id}>
                <Link to={`${category.url}`}>{category.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div class="footer__column">
          <h2 class="footer__title">Kontakt</h2>
          <p>
            Storgatan 46F
            <br />
            972 31 <strong>Luleå</strong>
          </p>
          <p>
            <a href="tel:+46920270444" class="footer__phone">
              +46920270444
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
