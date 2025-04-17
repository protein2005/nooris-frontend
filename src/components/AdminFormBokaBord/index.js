import React, { useState } from 'react';
import { FaCalendarAlt, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { createBooking } from '../../utils/http';
import Spinner from '../Spinner';

function AdminFormBokaBord({ selectedDate, setBookings }) {
  const [Namn, setNamn] = useState('');
  const [Telefon, setTelefon] = useState('');
  const [Email, setEmail] = useState('');
  const [peopleCount, setPeopleCount] = useState(0);
  const [selectedTime, setSelectedTime] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [bookingLoading, setBookingLoading] = useState(false);
  const [bookingError, setBookingError] = useState('');
  const [bookingSuccess, setBookingSuccess] = useState(null);

  const formatStartTime = () => {
    if (selectedDate && selectedTime) {
      const date = new Date(selectedDate);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}T${selectedTime}`;
    }
    return '';
  };

  const handleSubmit = async (e) => {
    console.log(formatStartTime());
    e.preventDefault();
    setBookingLoading(true);
    setBookingError('');
    setBookingSuccess(null);

    try {
      const response = await createBooking({
        name: Namn,
        phoneNumber: Telefon,
        email: Email,
        guests: peopleCount,
        startTime: formatStartTime(),
      });

      setBookingSuccess('Bokningen har skickats! Vi återkommer med en bekräftelse.');
      setNamn('');
      setTelefon('');
      setEmail('');
      setPeopleCount(0);
      setSelectedTime('');
      setAcceptedTerms(false);
      setBookings((prevBookings) => [...prevBookings, response]);
    } catch (error) {
      console.error('Fel vid bokning:', error.message);
      setBookingError('Något gick fel. Försök igen eller kontakta restaurangen.');
    } finally {
      setBookingLoading(false);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="bokabord__form mt-70 mb-20">
      <p className="bokabord__time">Vid behov kan administratören reservera bord åt kunden.</p>
      <div className="bokabord__summary">
        <h4 className="summary__title">Fyll i alla fält.</h4>
        <p className="summary__item">
          <FaCalendarAlt className="summary__icon" />
          Datum: <span className="summary__value">{selectedDate.toLocaleDateString('sv-SE')}</span>
        </p>
      </div>
      <div className="form__group">
        <label className="form__label">Namn:</label>
        <input
          type="text"
          className="form__input"
          value={Namn}
          onChange={(e) => setNamn(e.target.value)}
          placeholder="Ditt namn"
          required
        />
      </div>

      <div className="form__group">
        <label className="form__label">Telefon:</label>
        <PhoneInput
          international
          defaultCountry="SE"
          value={Telefon}
          onChange={(phone) => setTelefon(phone)}
          required
        />
      </div>

      <div className="form__group">
        <label className="form__label">E-post (inte nödvändigtvis):</label>
        <input
          type="email"
          className="form__input"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Din e-postadress"
        />
      </div>

      <div className="form__group">
        <label className="form__label">Antal gäster:</label>
        <input
          type="number"
          className="form__input"
          value={peopleCount}
          onChange={(e) => setPeopleCount(e.target.value)}
          required
        />
      </div>

      {/* Вибір часу для бронювання */}
      <div className="form__group">
        <label className="form__label">Tid:</label>
        <input
          type="text"
          className="form__input"
          placeholder="HH:mm"
          value={selectedTime}
          onChange={(e) => setSelectedTime(e.target.value)}
          required
        />
      </div>

      {/* Погодження з умовами */}
      <div className="form__group form__checkbox">
        <label>
          <input
            type="checkbox"
            checked={acceptedTerms}
            onChange={(e) => setAcceptedTerms(e.target.checked)}
            required
            style={{ marginRight: '10px' }}
          />
          Jag förstår att bokningen är begränsad till 2 timmar
        </label>
      </div>

      <button type="submit" className="form__button">
        Bekräfta bokning
      </button>

      <div className="step mt-20">
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
    </form>
  );
}

export default AdminFormBokaBord;
