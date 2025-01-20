import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import getEventByID from "../services/GetEventService";
import CustomPieChart from "../components/charts/CustomPieChart";
import ExpenseTable from "../components/ExpenseTable";
import { AuthenticatedUserContext } from "../contexts/AuthenticatedUserContext";
import HomePageButton from "../components/HomepageButton";

import styles from "../assets/stylesheets/EventPage.module.css";

const EventPage = () => {
  const { userID } = useContext(AuthenticatedUserContext);
  const { eventID } = useParams();
  const [eventData, setEventData] = useState(null);
  const [loading, setLoading] = useState(true);

  const data = [
    { name: "Category 1", value: 100 },
    { name: "Category 2", value: 200 },
    { name: "Category 3", value: 50 },
    { name: "Category 4", value: 150 },
  ];

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const data = await getEventByID(userID, eventID);
        setEventData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching event:", error);
        setLoading(false);
      }
    };

    fetchEvent();
  }, [userID, eventID]);

  if (loading) {
    return <div className={styles.loading}>Loading...</div>; // Show a loading message while fetching
  }

  if (!eventData) {
    return <div className={styles.errorMessage}>No event found</div>; // Handle the case where no event is found
  }
  console.log(eventData);

  return (
    <div className={styles.eventPage}>
      <h1 className={styles.eventName}>{eventData.name}</h1>
      <HomePageButton />
      {eventData.transactions.length > 0 ? (
        <React.Fragment>
          <CustomPieChart eventData={eventData} />
          <ExpenseTable transactions={eventData.transactions} />
        </React.Fragment>
      ) : (
        <div className={`${styles.errorMessage} ${styles.noExpenseMessage}`}>
          Event has no transactions, add transactions now!!
        </div>
      )}
    </div>
  );
};

export default EventPage;
