import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import getEventByID from "../services/GetEventService";
import CustomPieChart from "../components/charts/CustomPieChart";
import ExpenseTable from "../components/ExpenseTable";
import { AuthenticatedUserContext } from "../contexts/AuthenticatedUserContext";
import HomePageButton from "../components/HomepageButton";

const EventPage = () => {
    const { userID } = useContext(AuthenticatedUserContext);
    const { eventID } = useParams();
    const [eventData, setEventData] = useState(null)
    const [loading, setLoading] = useState(true)

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
        return <div>Loading...</div>; // Show a loading message while fetching
    }

    if (!eventData) {
        return <div>No event found</div>; // Handle the case where no event is found
    }
    console.log(eventData)

    return(
        <div>
           <HomePageButton/>
           <CustomPieChart eventData={eventData}/>
           <ExpenseTable transactions={eventData.transactions}/>
        </div>
    )
};

export default EventPage;
