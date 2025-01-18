import React, { useState } from "react";

const EditableTag = ({ handleNewTag, cancelAddingTag }) => {
  const [newTagName, setNewTagName] = useState("");

  const handleInputChange = (event) => {
    setNewTagName(event.target.value);
  };

  const finaliseTag = () => {
    handleNewTag(newTagName.trim())
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
