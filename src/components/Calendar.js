import React, { useState } from "react";
import "./Calendar.css";
import EventForm from "./EventForm";

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [events, setEvents] = useState({});

  const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
  const startDayOfMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1).getDay();

  const handleAddEvent = (date, event) => {
    setEvents((prev) => ({
      ...prev,
      [date]: [...(prev[date] || []), event],
    }));
  };

  const renderCalendar = () => {
    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth();
    const totalDays = daysInMonth(year, month);
    const days = [];
    const paddingDays = Array.from({ length: startDayOfMonth });

    paddingDays.forEach(() => days.push(<div className="day empty"></div>));
    for (let day = 1; day <= totalDays; day++) {
      const dateKey = `${year}-${month + 1}-${day}`;
      days.push(
        <div
          className="day"
          key={day}
          onClick={() => setSelectedDate(new Date(year, month, day))}
        >
          <span>{day}</span>
          <div className="events">
            {(events[dateKey] || []).map((event, index) => (
              <div key={index} className="event">
                {event.time}: {event.title}
              </div>
            ))}
          </div>
        </div>
      );
    }
    return days;
  };

  return (
    <div className="calendar-container">
      <EventForm
        selectedDate={selectedDate}
        onAddEvent={(event) =>
          handleAddEvent(
            `${selectedDate.getFullYear()}-${selectedDate.getMonth() + 1}-${selectedDate.getDate()}`,
            event
          )
        }
      />
      <div className="calendar-grid">{renderCalendar()}</div>
    </div>
  );
};

export default Calendar;
