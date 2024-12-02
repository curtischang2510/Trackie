import React, { useState } from "react";
import getEventByID from "../services/GetEventService";

const EventPage = ({ userID, eventID }) => {
    const [eventData, setEventData] = useState(getEventByID(userID, eventID))
};

export default EventPage;
