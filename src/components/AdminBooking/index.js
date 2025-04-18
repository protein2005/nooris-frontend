import React from 'react';
import './AdminBooking.scss';
import { getBookingByDate } from '../../utils/http';
import { deleteBookingByReference } from '../../utils/http';
import Cookies from 'js-cookie';
import Calendar from 'react-calendar';
import Spinner from '../Spinner';
import { formatDateToLocalISO } from '../../utils/formatDateToLocal';
import { FaTrashAlt, FaPhoneAlt, FaEnvelope, FaUsers, FaCalendarAlt } from 'react-icons/fa';
import AdminFormBokaBord from '../AdminFormBokaBord';

function AdminBooking() {
  const token = Cookies.get('token');
  const [bookings, setBookings] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [selectedDate, setSelectedDate] = React.useState(null);
  const [error, setError] = React.useState(null);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    const dateString = formatDateToLocalISO(date);
    setLoading(true);
    getBookingByDate(dateString, token)
      .then((response) => {
        setBookings(response);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  };

  console.log('bookings', bookings);

  const handleBackToCalendar = () => {
    setSelectedDate(null);
    setBookings([]);
  };

  const handleDeleteBooking = (reference) => {
    if (window.confirm('Är du säker på att du vill ta bort denna bokning?')) {
      setLoading(true);
      deleteBookingByReference(reference, token)
        .then(() => {
          setBookings(bookings.filter((booking) => booking.reference !== reference));
          setLoading(false);
        })
        .catch((error) => {
          setError(error.message);
          setLoading(false);
        });
    }
  };

  return (
    <>
      <h1 className="admin-bokabord__title">Admin Bokabord</h1>
      <p className="admin-bokabord__description">
        Här kan du se och hantera bokningar. Välj ett datum för att se bokningar.
      </p>

      {selectedDate ? (
        <>
          <button className="back-button" onClick={handleBackToCalendar}>
            ← Tillbaka till kalendern
          </button>

          {loading ? (
            <Spinner />
          ) : error ? (
            <p className="error">{error}</p>
          ) : bookings.length === 0 ? (
            <>
              <p className="no-bookings">Inga bokningar för det valda datumet.</p>
              <AdminFormBokaBord setBookings={setBookings} selectedDate={selectedDate} />
            </>
          ) : (
            <div>
              <h2 className="admin-bokabord__date">
                Bokningar för {formatDateToLocalISO(selectedDate)}
              </h2>
              <ul
                className={
                  bookings.length > 5 ? 'admin-bokabord__list--wide' : 'admin-bokabord__list'
                }>
                {bookings.map((booking) => (
                  <li key={booking.reference} className="admin-bokabord__item">
                    <div className="admin-bokabord__details">
                      <div className="admin-bokabord__details-item">
                        <FaUsers />
                        Namn: {booking.name}
                      </div>
                      <div className="admin-bokabord__details-item">
                        <FaPhoneAlt /> Telefon: {booking.phoneNumber}
                      </div>
                      <div className="admin-bokabord__details-item">
                        <FaEnvelope />
                        E-post: {booking.email}
                      </div>
                      <div className="admin-bokabord__details-item">
                        <FaUsers /> Gäster: {booking.guests}
                      </div>
                      <div className="admin-bokabord__details-item">
                        <FaCalendarAlt /> Starttid:{' '}
                        {new Date(booking.startTime).toLocaleTimeString([], {
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </div>
                    </div>

                    <button
                      className="delete-button"
                      onClick={() => handleDeleteBooking(booking.reference)}>
                      <FaTrashAlt />
                      Ta bort
                    </button>
                  </li>
                ))}
              </ul>
              <AdminFormBokaBord setBookings={setBookings} selectedDate={selectedDate} />
            </div>
          )}
        </>
      ) : (
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
      )}
    </>
  );
}

export default AdminBooking;
