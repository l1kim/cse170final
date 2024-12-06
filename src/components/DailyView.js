import React, { useState } from "react";
import EventForm from "./EventForm";
import "./DailyView.css";

const DailyView = ({ selectedDate }) => {
  const [events, setEvents] = useState([]);
  const [isFormVisible, setFormVisible] = useState(false);
  const [currentEvent, setCurrentEvent] = useState(null);

  const handleAddEvent = (event) => {
    setEvents([...events, event]);
    setFormVisible(false);
  };

  const handleEditEvent = (eventIndex) => {
    setCurrentEvent(events[eventIndex]);
    setFormVisible(true);
  };

  return (
    <div className="daily-view">
      <h2>{selectedDate.toDateString()}</h2>
      <button onClick={() => setFormVisible(true)}>Add Event</button>
      <div className="events-list">
        {events.map((event, index) => (
          <div
            key={index}
            className="event"
            onClick={() => handleEditEvent(index)}
          >
            <strong>{event.time}</strong> - {event.title}
          </div>
        ))}
      </div>
      {isFormVisible && (
        <EventForm
          onAddEvent={handleAddEvent}
          currentEvent={currentEvent}
          onClose={() => setFormVisible(false)}
        />
      )}
    </div>
  );
};

export default DailyView;
