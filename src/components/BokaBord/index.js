import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { FaUsers, FaCalendarAlt, FaClock } from 'react-icons/fa';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import 'react-calendar/dist/Calendar.css';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import './BokaBord.scss';
import foto1 from '../../images/bokabordbg.jpg';
import { getAvaliableTimes } from '../../utils/http';
import { createBooking } from '../../utils/http';
import Spinner from '../Spinner';
import { formatDateToLocalISO } from '../../utils/formatDateToLocal';

function BokaBord() {
  const [step, setStep] = useState(1);
  const [peopleCount, setPeopleCount] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [availableTimes, setAvailableTimes] = useState([]);
  const [loadingTimes, setLoadingTimes] = useState(false);
  const [noTimesMessage, setNoTimesMessage] = useState('');
  const [userDetails, setUserDetails] = useState({
    name: '',
    phone: '',
    email: '',
    acceptedTerms: false,
  });
  const [bookingSuccess, setBookingSuccess] = useState(null);
  const [bookingError, setBookingError] = useState('');
  const [bookingLoading, setBookingLoading] = useState(false);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const handlePeopleCountSelect = (count) => {
    setPeopleCount(count);
    setStep(2);
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    const dateString = formatDateToLocalISO(date);
    setStep(3);
    setLoadingTimes(true);
    setNoTimesMessage('');
    setAvailableTimes([]);

    getAvaliableTimes(dateString, peopleCount)
      .then((data) => {
        if (data.length > 0) {
          setAvailableTimes(data);
        } else {
          setNoTimesMessage('Tyvärr finns det inga tillgängliga tider för detta datum.');
        }
      })
      .catch((error) => {
        setNoTimesMessage(
          'Ett fel inträffade vid hämtning av tillgängliga tider. Försök igen senare.',
        );
        console.error('Error fetching available times:', error);
      })
      .finally(() => {
        setLoadingTimes(false);
      });
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    setStep(4);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStep(5);
    setBookingLoading(true);
    setBookingError('');
    setBookingSuccess(null);

    try {
      const response = await createBooking({
        name: userDetails.name,
        phoneNumber: userDetails.phone,
        email: userDetails.email,
        guests: peopleCount,
        startTime: selectedTime,
      });

      console.log('Bokning lyckades:', response);

      setBookingSuccess('Bokningen har skickats! Vi återkommer med en bekräftelse.');
    } catch (error) {
      console.error('Fel vid bokning:', error.message);
      setBookingError('Något gick fel. Försök igen eller kontakta restaurangen.');
    } finally {
      setBookingLoading(false);
    }
  };

  const handleBack = () => {
    setStep(step - 1);

    if (step === 2) {
      setPeopleCount(null);
    }
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
          {step > 1 && step !== 5 && (
            <button onClick={handleBack} type="button" className="back-button">
              ← Steg tillbaka
            </button>
          )}

          {step === 1 && (
            <div className="step">
              <p className="bokabord__step">Steg 1:</p>
              <p className="bokabord__humans">Hur många personer ska boka bord?</p>
              <div className="humans__list">
                {[1, 2, 3, 4, 5, 6].map((count) => (
                  <button
                    key={count}
                    onClick={() => handlePeopleCountSelect(count)}
                    className="humans__item">
                    {count}
                  </button>
                ))}
              </div>
              <div className="bokabord__humans--content">
                <p className="bokabord__humans">
                  Har du fler människor? Ange sedan antalet personer i fältet nedan
                </p>
                <input
                  type="text"
                  value={peopleCount}
                  onChange={(e) => setPeopleCount(e.target.value)}
                  className="humans__input"
                  placeholder="Antal personer"
                />
                {peopleCount > 0 && (
                  <button onClick={() => setStep(2)} className="back-button" type="button">
                    Steg 2 &rarr;
                  </button>
                )}
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
                    const dateString = formatDateToLocalISO(date);
                    const todayString = formatDateToLocalISO(new Date());

                    if (dateString < todayString) {
                      return 'unavailable';
                    }
                    return 'available';
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

          {step === 3 && selectedDate && (
            <div className="step">
              <p className="bokabord__step">Steg 3:</p>
              <p className="bokabord__time">
                Vänligen välj tid för din bokning den {selectedDate.toLocaleDateString('sv-SE')}
              </p>

              {loadingTimes && <Spinner />}

              {noTimesMessage && !loadingTimes && (
                <p className="bokabord__no-times">{noTimesMessage}</p>
              )}

              {!loadingTimes && availableTimes.length > 0 && (
                <div className="bokabord__time--list">
                  {availableTimes.map((time) => {
                    const formattedTime = new Date(time).toLocaleTimeString('sv-SE', {
                      hour: '2-digit',
                      minute: '2-digit',
                    });

                    return (
                      <button
                        key={time}
                        className="bokabord__time--item"
                        onClick={() => handleTimeSelect(time)}
                        type="button">
                        {formattedTime}
                      </button>
                    );
                  })}
                </div>
              )}
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
                  Tid:{' '}
                  <span className="summary__value">
                    {new Date(selectedTime).toLocaleTimeString('sv-SE', {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </span>
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
                <label className="form__label">E-post (inte nödvändigtvis):</label>
                <input
                  type="email"
                  className="form__input"
                  value={userDetails.email}
                  onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
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

          {step === 5 && (
            <div className="step">
              {bookingLoading && <Spinner />}

              {bookingSuccess && (
                <div className="message__wrapper">
                  <FaCheckCircle className="success-icon" />
                  <p className="success-message">{bookingSuccess}</p>
                </div>
              )}

              {bookingError && (
                <div className="message__wrapper">
                  <FaTimesCircle className="error-icon" />
                  <p className="error-message">{bookingError}</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default BokaBord;
