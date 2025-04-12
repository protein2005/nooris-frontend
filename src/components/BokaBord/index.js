import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { FaUsers, FaCalendarAlt, FaClock } from 'react-icons/fa';
import 'react-calendar/dist/Calendar.css';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import './BokaBord.scss';
import foto1 from '../../images/bokabordbg.jpg';

function BokaBord() {
  const [step, setStep] = useState(1);
  const [peopleCount, setPeopleCount] = useState(0);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [availableTimes, setAvailableTimes] = useState([]);
  const [userDetails, setUserDetails] = useState({
    name: '',
    phone: '',
    email: '',
    acceptedTerms: false,
  });
  const [dateUnavailable, setDateUnavailable] = useState(['2025-04-18', '2025-04-19']);

  // Поточна дата
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const handlePeopleCountSelect = (count) => {
    setPeopleCount(count);
    setStep(2);
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    const dateString = date.toISOString().split('T')[0];

    if (!dateUnavailable.includes(dateString)) {
      setAvailableTimes(['12:00', '14:00', '16:00']);
    } else {
      setAvailableTimes([]);
    }
    setStep(3);
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    setStep(4);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Бронювання підтверджено:', { userDetails, selectedDate, peopleCount });
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  return (
    <div className="bokabord shadow">
      <div className="bokabord__wrapper container">
        <div className="bokabord__header">
          <h2 className="bokabord__title">Boka Bord</h2>
          <p className="bokabord__description">
            Vänligen fyll i 4-stegsformuläret nedan för att boka bord. Vi kommer att bekräfta din
            bokning så snart som möjligt.
          </p>
        </div>
        <div className="bokabord__image">
          <img src={foto1} width="500" alt="Boka Bord" className="bokabord__img" />
        </div>
        <div className="bokabord__content">
          {step > 1 && (
            <button onClick={handleBack} className="back-button">
              ← Steg tillbaka
            </button>
          )}

          {step === 1 && (
            <div className="step">
              <p className="bokabord__step">Steg 1:</p>
              <p className="bokabord__humans">Hur många personer ska boka bord?</p>
              <div className="humans__list">
                {[2, 3, 4, 5, 6].map((count) => (
                  <button
                    key={count}
                    onClick={() => handlePeopleCountSelect(count)}
                    className="humans__item">
                    {count}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="step">
              <p className="bokabord__step">Steg 2:</p>
              <p className="bokabord__date">
                Vänligen välj datum för din bokning (tillgängliga datum är markerade):
              </p>
              <Calendar
                onChange={handleDateSelect}
                value={selectedDate}
                locale="sv-SE"
                tileClassName={({ date, view }) => {
                  if (view === 'month') {
                    const dateString = date.toISOString().split('T')[0];
                    const today = new Date().toISOString().split('T')[0]; // Отримуємо поточну дату
                    // Якщо дата в майбутньому і не входить в dateUnavailable, то вона доступна
                    if (dateString < today || dateUnavailable.includes(dateString)) {
                      return 'unavailable'; // Дні до сьогоднішнього дня або зі списку dateUnavailable будуть недоступними
                    }
                    return 'available'; // Інші дні доступні
                  }
                }}
              />
              <div className="bokabord__color--info">
                <div className="bokabord__color--available"></div>
                <p>- Tillgängliga datum</p>
              </div>
              <div className="bokabord__color--info">
                <div className="bokabord__color--unavailable"></div>
                <p>- Otillgängliga datum</p>
              </div>
              <div className="bokabord__color--info">
                <div className="bokabord__color--today"></div>
                <p>- Idag</p>
              </div>
            </div>
          )}

          {step === 3 && selectedDate && availableTimes.length > 0 && (
            <div className="step">
              <p className="bokabord__step">Steg 3:</p>
              <p className="bokabord__time">
                Vänligen välj tid för din bokning den {selectedDate.toLocaleDateString('sv-SE')}
              </p>
              <div className="bokabord__time--list">
                {availableTimes.map((time) => (
                  <button
                    key={time}
                    className="bokabord__time--item"
                    onClick={() => handleTimeSelect(time)}>
                    {time}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 4 && selectedDate && availableTimes.length > 0 && (
            <form onSubmit={handleSubmit} className="bokabord__form">
              <p className="bokabord__step">Steg 4:</p>
              <p className="bokabord__time">Vänligen fyll i dina kontaktuppgifter</p>
              <div className="bokabord__summary">
                <h4 className="summary__title">Sammanfattning av din bokning:</h4>
                <p className="summary__item">
                  <FaUsers className="summary__icon" />
                  Antal personer: <span className="summary__value">{peopleCount}</span>
                </p>
                <p className="summary__item">
                  <FaCalendarAlt className="summary__icon" />
                  Datum:{' '}
                  <span className="summary__value">{selectedDate.toLocaleDateString('sv-SE')}</span>
                </p>
                <p className="summary__item">
                  <FaClock className="summary__icon" />
                  Tid: <span className="summary__value">{selectedTime}</span>
                </p>
              </div>

              <div className="form__group">
                <label className="form__label">Namn:</label>
                <input
                  type="text"
                  className="form__input"
                  value={userDetails.name}
                  onChange={(e) => setUserDetails({ ...userDetails, name: e.target.value })}
                  required
                />
              </div>

              <div className="form__group">
                <label className="form__label">Telefon:</label>
                <PhoneInput
                  international
                  defaultCountry="SE"
                  value={userDetails.phone}
                  onChange={(phone) => setUserDetails({ ...userDetails, phone })}
                  required
                />
              </div>

              <div className="form__group">
                <label className="form__label">E-post:</label>
                <input
                  type="email"
                  className="form__input"
                  value={userDetails.email}
                  onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
                  required
                />
              </div>

              <div className="form__group form__checkbox">
                <label>
                  <input
                    type="checkbox"
                    checked={userDetails.acceptedTerms}
                    required
                    style={{ marginRight: '10px' }}
                    onChange={(e) =>
                      setUserDetails({ ...userDetails, acceptedTerms: e.target.checked })
                    }
                  />
                  Jag förstår att bokningen är begränsad till 2 timmar
                </label>
              </div>

              <button type="submit" className="form__button">
                Bekräfta bokning
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default BokaBord;
