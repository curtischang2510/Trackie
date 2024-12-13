import React from "react";
import reactImg from "../assets/images/react.svg";
import styles from "../assets/stylesheets/CardAndCardContainer.module.css";
import { Link } from "react-router-dom"; // Import Link for navigation

const EventCard = ({ eventID, eventName }) => {
  return (
    <Link to={`/EventPage/${eventID}`} className={styles.cardLink}>
      <div className={styles.card}>
        <img src={reactImg} alt="default photo" className={styles.card_image} />
        <h3>{eventName}</h3>
      </div>
    </Link>
  );
};

export default EventCard;
