import { doc, setDoc, collection } from "firebase/firestore";
import { db } from "../config";

const uid = function () {
  return Date.now().toString(36) + Math.random().toString(36).slice(2);
};

const addEvent = async (userID, eventName, eventTags) => {
  try {
    const userRef = doc(db, "users", userID); // Reference to the user document
    const eventsCollectionRef = collection(userRef, "events"); // Reference to the user's events collection

    // Generate a unique ID for the event
    const eventID = uid();

    // Create the new event object
    const newEvent = {
      name: eventName,
      tags: eventTags,
      transactions: [], // Start with an empty transactions array
    };

    // Add the event to the events sub-collection
    await setDoc(doc(eventsCollectionRef, eventID), newEvent);

    console.log("Event added successfully!");
  } catch (error) {
    console.error("Failed to add event:", error);
    throw error; // Propagate the error
  }
};


export default addEvent;
