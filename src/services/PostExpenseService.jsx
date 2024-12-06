import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "../config";

const postExpenseToDatabase = async (eventID, expense, userID) => {
  try {
    const eventDocRef = doc(db, "users", userID, "events", eventID)

    await updateDoc(eventDocRef, {
        transactions: arrayUnion(expense)
    })

    console.log("Expense successfully added to database:", expense);
  } catch (error) {
    throw error
  }
};

export { postExpenseToDatabase };
