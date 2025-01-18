import React from "react";
import styles from "../assets/stylesheets/Tag.module.css"

const AddTagButton = ({ setIsAddingTag }) => {
    return(
        <React.Fragment>
            <button className={styles.add_tag_button} onClick={() => setIsAddingTag(true)}>
                Add Tag
            </button>
        </React.Fragment>
    );
}

export default AddTagButton;