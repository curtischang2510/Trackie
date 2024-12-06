import React, { useRef } from "react";
import Select from "react-select";

const SelectTagsDropdown = ({ currEvent, setExpenseTag }) => {
  const tagsToDisplay = useRef(["Food"]); //hardcoded for now
  console.log("Mathcing events :", currEvent);
  if (currEvent) {
    tagsToDisplay.current = currEvent.tags;
  }

  // Convert tags to the format required by react-select
  const options = tagsToDisplay.current.map((tag) => ({
    value: tag,
    label: tag,
  }));

  const handleChange = (currTag) => {
    if (setExpenseTag) {
      setExpenseTag(currTag.value);
    }
  };

  const customStyles = {
    container: (provided) => ({
      ...provided,
      width: "200px", // Customize width
      margin: "0 auto", // Center the dropdown
    }),
    control: (provided) => ({
      ...provided,
      backgroundColor: "#f9f9f9", // Light gray background
      borderRadius: "8px", // Rounded corners
      border: "1px solid #ccc", // Add a border
      padding: "2px", // Add padding
      "&:hover": {
        borderColor: "#888", // Change border color on hover
      },
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: "#ffffff", // White background
      borderRadius: "8px", // Match the control's rounded corners
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Add a subtle shadow
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#f0f0f0" : "#ffffff", // Highlight on hover
      color: state.isFocused ? "#333" : "#555", // Change text color on hover
      padding: "10px", // Add padding to options
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#333", // Text color for selected option
      fontWeight: "500", // Make the text slightly bold
    }),
  };

  return (
    <Select
      options={options}
      styles={customStyles}
      onChange={handleChange}
      placeholder="Select a tag..."
      isClearable
    />
  );
};

export default SelectTagsDropdown;
