import { doc, getDoc } from "firebase/firestore";
import { db } from "../config";

const getEventByID = async (userID, eventID) => {
  try {
    const eventDocRef = doc(db, "users", userID, "events", eventID);
    const eventDocSnap = await getDoc(eventDocRef);

    if (eventDocSnap.exists()) {
      return eventDocSnap.data();
    } else {
      console.warn("No such event found");
      return null;
    }
  } catch (error) {
    console.error("Error fetching event:", error);
    throw error; // Propagate the error for further handling
  }
};

export default getEventByID;
