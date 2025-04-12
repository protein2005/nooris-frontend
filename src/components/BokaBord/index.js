import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Для стилів календаря
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'; // Для стилів PhoneInput
import './BokaBord.scss';

function BokaBord() {
  const [step, setStep] = useState(1);
  const [peopleCount, setPeopleCount] = useState(0);
  const [selectedDate, setSelectedDate] = useState(null);
  const [availableTimes, setAvailableTimes] = useState([]);
  const [userDetails, setUserDetails] = useState({
    name: '',
    phone: '',
    email: '',
    acceptedTerms: false,
  });
  const [dateUnavailable, setDateUnavailable] = useState([
    '2025-04-18', // Приклад недоступної дати
  ]);

  const handlePeopleCountSelect = (count) => {
    setPeopleCount(count);
    setStep(2); // Переходимо до наступного етапу
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    const dateString = date.toISOString().split('T')[0]; // Форматуємо дату до строкового значення

    // Тут ви можете додати свою логіку для отримання доступного часу для конкретної дати
    if (!dateUnavailable.includes(dateString)) {
      setAvailableTimes(['12:00', '14:00', '16:00']); // Приклад доступних часів
    } else {
      setAvailableTimes([]);
    }
    setStep(3); // Переходимо до етапу вибору часу
  };

  const handleTimeSelect = (time) => {
    // Логіка для вибору часу
    setStep(4); // Переходимо до етапу заповнення контактних даних
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Логіка для підтвердження бронювання
    console.log('Бронювання підтверджено:', { userDetails, selectedDate, peopleCount });
  };

  return (
    <div className="bokabord shadow">
      <div className="bokabord__wrapper container">
        <h2>Boka Bord</h2>

        {/* Крок 1: Вибір кількості людей */}
        {step === 1 && (
          <div className="step">
            <h3>Виберіть кількість людей:</h3>
            <div className="people-count">
              {[2, 3, 4, 5, 6].map((count) => (
                <button
                  key={count}
                  onClick={() => handlePeopleCountSelect(count)}
                  className="count-button">
                  {count}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Крок 2: Вибір дати */}
        {step === 2 && (
          <div className="step">
            <h3>Виберіть дату:</h3>
            <Calendar
              onChange={handleDateSelect}
              value={selectedDate}
              locale="sv-SE"
              tileClassName={({ date, view }) => {
                if (view === 'month') {
                  const dateString = date.toISOString().split('T')[0];
                  if (dateUnavailable.includes(dateString)) return 'unavailable';
                  return 'available';
                }
              }}
            />
          </div>
        )}

        {/* Крок 3: Вибір часу */}
        {step === 3 && selectedDate && availableTimes.length > 0 && (
          <div className="step">
            <h3>Виберіть час:</h3>
            <div className="available-times">
              {availableTimes.map((time) => (
                <button key={time} onClick={() => handleTimeSelect(time)}>
                  {time}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Крок 4: Заповнення контактних даних */}
        {step === 4 && selectedDate && availableTimes.length > 0 && (
          <form onSubmit={handleSubmit}>
            <div className="step">
              <label>Ім'я замовника:</label>
              <input
                type="text"
                value={userDetails.name}
                onChange={(e) => setUserDetails({ ...userDetails, name: e.target.value })}
                required
              />
            </div>

            <div className="step">
              <label>Телефон:</label>
              <PhoneInput
                international
                defaultCountry="SE"
                value={userDetails.phone}
                onChange={(phone) => setUserDetails({ ...userDetails, phone })}
                required
              />
            </div>

            <div className="step">
              <label>Email:</label>
              <input
                type="email"
                value={userDetails.email}
                onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
                required
              />
            </div>

            <div className="step">
              <label>
                <input
                  type="checkbox"
                  checked={userDetails.acceptedTerms}
                  onChange={(e) =>
                    setUserDetails({ ...userDetails, acceptedTerms: e.target.checked })
                  }
                />
                Я розумію, що бронювання обмежене 2 годинами
              </label>
            </div>

            <button type="submit">Підтвердити бронювання</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default BokaBord;
