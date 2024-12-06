import React, { useState, useEffect } from "react";
import "./EventForm.css";

const EventForm = ({ onAddEvent, currentEvent, onClose }) => {
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [details, setDetails] = useState("");

  useEffect(() => {
    if (currentEvent) {
      setTitle(currentEvent.title);
      setTime(currentEvent.time);
      setDetails(currentEvent.details);
    }
  }, [currentEvent]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddEvent({ title, time, details });
    setTitle("");
    setTime("");
    setDetails("");
    onClose();
  };

  return (
    <div className="event-form-modal">
      <div className="event-form-container">
        <h2>{currentEvent ? "Edit Event" : "Add Event"}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Event Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
          <textarea
            placeholder="Details"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          />
          <div className="form-actions">
            <button type="submit">Save</button>
            <button type="button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EventForm;
