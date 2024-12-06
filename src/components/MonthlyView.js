import React from "react";
import "./MonthlyView.css";

const MonthlyView = ({ selectedDate, setSelectedDate }) => {
  const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
  const startDay = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1).getDay();

  const handleDayClick = (day) => {
    const date = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), day);
    setSelectedDate(date);
  };

  const renderDays = () => {
    const totalDays = daysInMonth(selectedDate.getFullYear(), selectedDate.getMonth());
    const paddingDays = Array.from({ length: startDay });

    return [
      ...paddingDays.map((_, index) => <div key={`pad-${index}`} className="day empty"></div>),
      ...Array.from({ length: totalDays }).map((_, day) => (
        <div key={`day-${day}`} className="day" onClick={() => handleDayClick(day + 1)}>
          <span>{day + 1}</span>
        </div>
      )),
    ];
  };

  return <div className="monthly-view">{renderDays()}</div>;
};

export default MonthlyView;
