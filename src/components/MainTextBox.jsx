import React, { useContext, useEffect, useRef, useState } from "react";
import styles from "../assets/stylesheets/MainTextBox.module.css"; // Import the CSS module

import SaveExpenseButton from "./SaveExpenseButton.jsx";
import SelectCurrencyDropdown from "./SelectCurrencyDropdown";
import SelectTagsDropdown from "./SelectTagsDropdown.jsx";

import { AuthenticatedUserContext } from "../contexts/AuthenticatedUserContext.jsx";
import { getAllEvents } from "../services/GetEventService.jsx";

const MainTextBox = () => {
  // State to track the typed event name
  const [eventName, setEventName] = useState("");
  const [expenseName, setExpenseName] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");
  const [expenseCurrency, setExpenseCurrency] = useState("");
  const [expenseTag, setExpenseTag] = useState("");
  const [existingEvents, setExistingEvents] = useState([]);

  const { userID } = useContext(AuthenticatedUserContext);
  useEffect(() => {
    console.log(expenseTag)
  }, [expenseTag])

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const fetchedEvents = await getAllEvents(userID);
        setExistingEvents(fetchedEvents); // Update state with fetched events
      } catch (error) {
        console.error("Failed to load events:", error);
      }
    };

    fetchEvents(); // Call the asynchronous function
  }, []);

  // Filter events based on the typed event name
  const matchingEvents = existingEvents.filter((event) =>
    event.name.toLowerCase().includes(eventName.toLowerCase())
  );

  const handleDropdownClick = (selectedEventName) => {
    setEventName(selectedEventName);
  };

  const isExactMatch = existingEvents.find(
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
          onChange={(e) => setExpenseName(e.target.value)}
        />

        {/* Input for the expense amount */}
        <input
          type="number"
          placeholder="Amount"
          className={styles.input}
          onChange={(e) => setExpenseAmount(e.target.value)}
        />

        <SelectCurrencyDropdown setExpenseCurrency={setExpenseCurrency} />

        <SelectTagsDropdown
          setExpenseTag={setExpenseTag}
          currEvent={
            isExactMatch && matchingEvents.length > 0 ? matchingEvents[0] : null
          }
        />

        {/* Button to save the expense */}
        <SaveExpenseButton
          className={styles.button}
          eventName={eventName}
          existingEvents={existingEvents}
          expenseName={expenseName}
          expenseTag={expenseTag}
          amount={expenseAmount}
          expenseCurrency={expenseCurrency}
        />
      </form>
    </div>
  );
};

export default MainTextBox;
