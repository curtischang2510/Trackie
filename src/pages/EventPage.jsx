import React, { useState } from "react";
import getEventByID from "../services/GetEventService";
import CustomPieChart from "../components/charts/CustomPieChart";

const EventPage = ({ userID, eventID }) => {
    // const [eventData, setEventData] = useState(getEventByID(userID, eventID))
    const data = [
        { name: "Category 1", value: 100 },
        { name: "Category 2", value: 200 },
        { name: "Category 3", value: 50 },
        { name: "Category 4", value: 150 },
      ];

    return(
        <div>
           <CustomPieChart data={data}/>
        </div>
    )
};

export default EventPage;
