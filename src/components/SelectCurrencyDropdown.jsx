import React from "react";
import Select from "react-select";
import { currencyOptions } from "../services/HandleCurrencyService";

const customStyles = {
  container: (provided) => ({
    ...provided,
    width: "200px", // Customize width
    height: "100%",
    margin: "0 auto", // Center the dropdown
  }),
  control: (provided) => ({
    ...provided,
    backgroundColor: "#f9f9f9", // Light gray background
    borderRadius: "8px", // Rounded corners
    border: "1px solid #ccc", // Add a border
    padding: "2px", // Add padding
    boxShadow: "none", // Remove default shadow
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
    textAlign: "left",
    padding: "10px", // Add padding to options
    "&:active": {
      backgroundColor: "#e0e0e0", // Change background on click
    },
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#333", // Text color for selected option
    fontWeight: "500", // Make the text slightly bold
  }),
};

const SelectCurrencyDropdown= ({ setExpenseCurrency }) => {
 
  const handleChange = (selectedOption) => {
    if (setExpenseCurrency) {
      console.log("Selected currency option: ", selectedOption.value)
      setExpenseCurrency(selectedOption?.value || "SGD")
    }
  }

  return (
    <React.Fragment>
      <Select
        options={currencyOptions}
        styles={customStyles}
        onChange={handleChange}
      />
    </React.Fragment>
  );
};

export default SelectCurrencyDropdown;
