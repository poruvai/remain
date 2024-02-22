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
      setReminder([...reminder, newreminder])
      setnewReminder("")
    }

    
  }

  const handledelete=(index)=>{
    setReminder(reminder.filter((item,itemIndex) => itemIndex != index))
  
    }
  
  return (
    <div className="container">
      <h1>Todays Reminder </h1>

      
      <div className="input-container">
        <input
          type="text"
          value={newreminder}
          placeholder="Enter reminder"
          onChange={handleInputchange}
        />

        <button className="add-btn" onClick={handleAddReminder}>
          Add Reminder
        </button>
      </div>
      {
        
      reminder.length >0 ? (
      <ul className="reminder-list">
        {
        reminder.map((reminder, index) => (
          <li key={index}>
            {reminder}
            <button onClick={()=>handledelete(index)} className="deletebtn">Delete</button>
            </li>
        ))}
      </ul>
      ):
      <p> No Reminder found</p>
}
    </div>
  );
}

export default Reminder;
