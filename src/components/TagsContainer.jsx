import React, { useState, useEffect, useContext } from "react";

import { doc, getDoc } from "firebase/firestore";

import { db } from "../config";
import Tags from "./Tag.jsx";
import styles from "../assets/stylesheets/Tag.module.css";
import { AuthenticatedUserContext } from "../contexts/AuthenticatedUserContext.jsx";
import AddTagButton from "./AddTagsButton.jsx";
import EditableTag from "./EditableTag.jsx";
import addDefaultTag from "../services/AddDefaultTagService.jsx";

const TagsContainer = ({ toggleTag }) => {
  const [tags, setTags] = useState([]); // State to store tags
  const [isAddingTag, setIsAddingTag] = useState(false);
  const { userID } = useContext(AuthenticatedUserContext);

  const fetchTags = async () => {
    try {
      const docRef = doc(db, "users", userID);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const tagData = docSnap.data().tags || [];
        console.log("Fetched tags:", tagData); // Log fetched tags
        setTags(tagData);
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.error("Error fetching tags:", error);
    }
  };

  const cancelAddingTag = () => {
    setIsAddingTag(false);
  };

  const handleNewTag = async (newTag) => {
    await addDefaultTag(newTag, userID);
    cancelAddingTag()
    fetchTags();
  };

  // Fetch tags when the component mounts
  useEffect(() => {
    fetchTags();
  }, [userID]); // Only refetch when userID changes

  return (
    <div className={styles.tag_container}>
      {tags.map((tag, index) => (
        <Tags key={tag} tagName={tag} toggleTag={toggleTag} />
      ))}

      {isAddingTag && (
        <EditableTag
          handleNewTag={handleNewTag}
          cancelAddingTag={cancelAddingTag}
        />
      )}

      <AddTagButton setIsAddingTag={setIsAddingTag} />
    </div>
  );
};

export default TagsContainer;
