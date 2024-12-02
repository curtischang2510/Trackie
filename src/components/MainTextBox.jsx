import React, { useState } from "react";
import styles from "../assets/stylesheets/MainTextBox.module.css"; // Import the CSS module
import SelectCurrencyButton from "./SelectCurrencyDropdown";

const MainTextBox = () => {
  // State to track the typed event name
  const [eventName, setEventName] = useState("");

  // Placeholder list of events
  const events = [
    { id: 1, name: "Wedding Planning" },
    { id: 2, name: "Italy Honeymoon" },
    { id: 3, name: "Birthday Party" },
  ];

  // Filter events based on the typed event name
  const matchingEvents = events.filter((event) =>
    event.name.toLowerCase().includes(eventName.toLowerCase())
  );

  const handleDropdownClick = (selectedEventName) => {
    setEventName(selectedEventName);
  };

  const isExactMatch = events.find(
    (event) => event.name.toLowerCase() === eventName.toLowerCase()
  );

  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>Add Expense</h2>
      <form className={styles.textboxContainer}>
        {/* Input for the event name */}
        <div className={styles.inputContainer}>
          <input
            type="text"
            placeholder="Event Name"
            value={eventName}
            onChange={(currentUserInput) =>
              setEventName(currentUserInput.target.value)
            } // Update state as user types
            className={styles.input}
          />
          {/* Dropdown with matching events if eventName is non-empty */}
          {eventName && !isExactMatch && (
            <ul className={styles.dropdown}>
              {matchingEvents.map((event) => (
                <li
                  key={event.id}
                  className={styles.dropdownItem}
                  onClick={() => handleDropdownClick(event.name)}
                >
                  {event.name}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Input for the expense name */}
        <input
          type="text"
          placeholder="Expense Name"
          className={styles.input}
        />

        {/* Input for the expense amount */}
        <input type="number" placeholder="Amount" className={styles.input} />

        <SelectCurrencyButton />

        {/* Button to save the expense */}
        <button type="submit" className={styles.button}>
          Save Expense
        </button>
      </form>
    </div>
  );
};

export default MainTextBox;
