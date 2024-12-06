import React from "react";
import "./WeeklyView.css";

const WeeklyView = ({ selectedDate, setSelectedDate }) => {
  const startOfWeek = new Date(selectedDate);
  startOfWeek.setDate(selectedDate.getDate() - selectedDate.getDay());

  const daysOfWeek = Array.from({ length: 7 }, (_, i) => {
    const date = new Date(startOfWeek);
    date.setDate(startOfWeek.getDate() + i);
    return date;
  });

  const handleDayClick = (day) => {
    setSelectedDate(day);
  };

  return (
    <div className="weekly-view">
      {daysOfWeek.map((day, index) => (
        <div key={index} className="day" onClick={() => handleDayClick(day)}>
          <div className="day-header">{day.toDateString()}</div>
          <div className="day-events">
            {/* Event titles and times will go here */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default WeeklyView;
