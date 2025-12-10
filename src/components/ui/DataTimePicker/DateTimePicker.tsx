import React from "react";

function DateTimePicker() {
  return (
    <div>
      <input type="datetime-local" className="type" />
      <input type="date" className="type" />
      <input type="time" className="type" />
    </div>
  );
}

export default DateTimePicker;
