import React, { useState } from "react";
import styles from "../assets/stylesheets/Tag.module.css"

const Tags = ({ tagName, toggleTag }) => {
  const [isPicked, setIsPicked] = useState(false);

  const toggleIsPicked = () => {
    setIsPicked((prevState) => !prevState);
    toggleTag(tagName, !isPicked)
  };

  return (
    <div>
      <button
        className={`${styles.tag} ${isPicked ? styles.picked : ""}`} // Apply dynamic class
        onClick={toggleIsPicked}
      >
        {tagName}{" "}
      </button>
    </div>
  );
};

export default Tags;
