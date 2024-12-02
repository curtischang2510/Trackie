import React from "react";
import { useNavigate } from "react-router-dom";

const AddEventButton = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate("/AddEventPage")}>Add Event!! 🥳</button>
    </div>
  );
}

export default AddEventButton;
