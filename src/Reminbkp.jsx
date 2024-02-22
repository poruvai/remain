import React, { useState } from "react";

import "./Reminder.css";
function Reminder() {
  const [reminder, setReminder] = useState([]);
  const [newreminder, setnewReminder] = useState("");
  const handleInputchange = (event) => {
    setnewReminder(event.target.value);
  };
  const handleAddReminder = () => {
    if (newreminder.trim()) {
      setReminder([...Reminder, newreminder])
    }
  }
  return (
    <div className="container">
      <h1>Todays Reminder </h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter reminder"
          onChange={handleInputchange}
        />

        <button className="add-btn" onClick={handleAddReminder}>
          Add Reminder
        </button>
      </div>
      <ul className="reminder-list">
        {
        reminder.map((reminder, index) => (
          <li>
            {reminder}
            </li>
        ))}
      </ul>
    </div>
  );
}

export default Reminder;
