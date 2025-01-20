import React, { useState } from "react";

const EditableTag = ({ handleNewTag, cancelAddingTag }) => {
  const [newTagName, setNewTagName] = useState("");

  const handleInputChange = (event) => {
    setNewTagName(event.target.value);
  };

  const finaliseTag = () => {
    const finalTagName = newTagName.trim()
    if (finalTagName === "") {
      cancelTag()
      return
    }

    const capitalizeFirstLetter = finalTagName.charAt(0).toUpperCase() + finalTagName.slice(1)
    handleNewTag(capitalizeFirstLetter)
  };


  const cancelTag = () => {
    console.log("Escape pressed")
    setNewTagName(""); // Clear temporary input
    cancelAddingTag()
  };

  return (
    <React.Fragment>
      <input
        autoFocus
        type="text"
        value={newTagName}
        onChange={handleInputChange}
        onBlur={finaliseTag}
        onKeyDown={(e) => {
            if (e.key === "Enter") finaliseTag(); // Finalize on Enter key
            if (e.key === "Escape") cancelTag(); // Cancel on Escape key
        }}
      />
    </React.Fragment>
  );
};

export default EditableTag;
