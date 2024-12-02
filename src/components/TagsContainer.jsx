import React, { useState, useEffect, useContext } from "react";

import { doc, getDoc } from "firebase/firestore";

import { app, db } from "../config";
import Tags from "./Tag.jsx";
import styles from "../assets/stylesheets/Tag.module.css";
import { AuthenticatedUserContext } from "../contexts/AuthenticatedUserContext.jsx";

const TagsContainer = ({ toggleTag }) => {
  const [tags, setTags] = useState([]); // State to store tags
  const { userID } = useContext(AuthenticatedUserContext);

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const docRef = doc(db, "users", userID); // Reference to the user's document
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const tagData = docSnap.data().tags; // Assuming 'tags' is a field in the document
          setTags(tagData || []); // Update state with tags or an empty array if undefined
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching tags:", error);
      }
    };

    fetchTags();
  }, []); // Runs once when the component is mounted

  return (
    <div className={styles.tag_container}>
      {tags.map((tag, index) => (
        <Tags key={tag} tagName={tag} toggleTag={toggleTag} />
      ))}
    </div>
  );
};

export default TagsContainer;
