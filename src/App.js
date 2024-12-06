import React, { useState } from "react";
import Calendar from "./components/Calendar";
import MonthlyView from "./components/MonthlyView";
import WeeklyView from "./components/WeeklyView";
import DailyView from "./components/DailyView";
import "./App.css";

function App() {
  const [view, setView] = useState("monthly"); // View state: 'monthly', 'weekly', 'daily'
  const [selectedDate, setSelectedDate] = useState(new Date());

  const renderView = () => {
    switch (view) {
      case "weekly":
        return <WeeklyView selectedDate={selectedDate} setSelectedDate={setSelectedDate} />;
      case "daily":
        return <DailyView selectedDate={selectedDate} setSelectedDate={setSelectedDate} />;
      default:
        return <MonthlyView selectedDate={selectedDate} setSelectedDate={setSelectedDate} />;
    }
  };

  return (
    <div className="App">
      <header>
        <h1>My Scheduler</h1>
        <nav>
          <button onClick={() => setView("monthly")}>Monthly View</button>
          <button onClick={() => setView("weekly")}>Weekly View</button>
          <button onClick={() => setView("daily")}>Daily View</button>
        </nav>
      </header>
      {renderView()}
    </div>
  );
}

export default App;
