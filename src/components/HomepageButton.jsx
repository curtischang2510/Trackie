import React from 'react'
import { useNavigate } from 'react-router-dom';

import backButton from '../assets/images/back-button.svg'
import buttonStyle from '../assets/stylesheets/Buttons.module.css'

const HomePageButton = () => {
    const navigate = useNavigate() 

    return (
        <div>
            <button
                className={buttonStyle.back_button}
                onClick={() => navigate('/')}
            >
                <img 
                    className={buttonStyle.back_button_image} 
                    src={backButton} 
                    alt="back" 
                />
            </button>
        </div>
    )
};

export default HomePageButton