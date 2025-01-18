import { doc, getDoc, collection, updateDoc } from "firebase/firestore";
import { db } from "../config";

const addDefaultTag = async (newTag, userID) => {
    try {
        const docRef = doc(db, "users", userID)
        const docSnap = await getDoc(docRef)

        if (docSnap.exists()) {
            const existingTags = docSnap.data().tags || [];
            const updatedTags = [...existingTags, newTag]

            await updateDoc(docRef, { tags: updatedTags })
        }
    } catch (error) {
        console.error("Error adding tags:", error)
    }
}

export default addDefaultTag;