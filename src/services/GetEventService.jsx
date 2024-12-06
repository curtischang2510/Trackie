import { collection, doc, getDoc, getDocs } from "firebase/firestore";
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

const getAllEvents = async (userID) => {
  try {
    const eventsCollectionRef = collection(db, "users", userID, "events");
    const snapshot = await getDocs(eventsCollectionRef);

    const events = snapshot.docs.map((doc) => {
      return {
        id: doc.id,
        name: doc.data().name,
        tags: doc.data().tags,
        transactions: doc.data().transactions,
      }
    });

    return events;
  } catch (error) {
    console.error("Error fetching events:", error);
    throw error;
  }
}

export default getEventByID;
export { getAllEvents }
