import React, { useState } from "react";
import "./Calendar.css";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
  const generateCalendar = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const totalDays = daysInMonth(year, month);
    const days = Array.from({ length: totalDays }, (_, i) => i + 1);

    return days.map((day) => (
      <div className="day" key={day}>
        {day}
      </div>
    ));
  };

  return (
    <div className="calendar">
      <div className="month">
        {currentDate.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
      </div>
      <div className="days-container">{generateCalendar()}</div>
    </div>
  );
};

export default Calendar;
