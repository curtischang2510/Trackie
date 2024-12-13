import React, { useContext, useEffect, useState } from "react";
import { AuthenticatedUserContext } from "../contexts/AuthenticatedUserContext";
import { getAllEvents } from "../services/GetEventService";
import EventCard from "./EventCard";
import styles from "../assets/stylesheets/CardAndCardContainer.module.css"

const EventsCardContainer = () => {
  const { userID } = useContext(AuthenticatedUserContext); 
  const [eventData, setEventData] = useState([]); 
  const [loading, setLoading] = useState(true); 

  // Fetch events when the component mounts or when userID changes
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true); // Set loading to true before fetching
        const events = await getAllEvents(userID); // Fetch events
        setEventData(events); // Update state with fetched events
      } catch (error) {
        console.error("Failed to fetch events:", error); // Handle errors
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    if (userID) {
      fetchEvents(); // Fetch events if userID exists
    }
  }, [userID]);

  // Render loading state or event cards
  return (
    <div className={styles.card_container}>
      {loading ? (
        <p>Loading events...</p> // Show loading message while fetching
      ) : (
        eventData.map((event) => (
          <EventCard key={event.id} eventID={event.id} eventName={event.name} />
        ))
      )}
    </div>
  );
};

export default EventsCardContainer;