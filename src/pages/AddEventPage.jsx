import React, { useCallback, useContext } from "react";
import { useEffect, useRef } from "react";

import HomePageButton from "../components/HomepageButton";
import EnterButton from "../assets/images/enter.png";
import styles from "../assets/stylesheets/AddEventPage.module.css"; // Assuming you add styles here
import TagsContainer from "../components/TagsContainer";
import addEventService from "../services/AddEventService";
import { AuthenticatedUserContext } from "../contexts/AuthenticatedUserContext";

const AddEventPage = () => {
  const inputRef = useRef(null);
  const selectedTagsRef = useRef(new Set());
  const { userID } = useContext(AuthenticatedUserContext)

  const handleEnterPress = (event) => {
    if (event.key === "Enter") {
      handleButtonClick();
    }
  };

  const handleButtonClick = () => {
    const eventName = inputRef.current.value.trim();
    const chosenTags = [...selectedTagsRef.current];

    addEventService(userID, eventName, chosenTags)
  };

  const toggleTag = useCallback((tag, isPicked) => {
    selectedTagsRef.current.has(tag) && !isPicked
      ? selectedTagsRef.current.delete(tag)
      : selectedTagsRef.current.add(tag);
  });

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <HomePageButton />
      <div className={styles.container}>
        <div className={styles.textfield_button_container}>
          <input
            type="text"
            placeholder="New Event Name!!"
            className={styles.transparentInput}
            onKeyDown={handleEnterPress}
            ref={inputRef}
          />
          <button className={styles.enter_button} onClick={handleButtonClick}>
            <img src={EnterButton} className={styles.enter_button_img} alt="" />
          </button>
        </div>

        <TagsContainer toggleTag={toggleTag} />
      </div>
    </div>
  );
};

export default AddEventPage;
