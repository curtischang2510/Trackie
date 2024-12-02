import React from 'react'
import AddEventButton from '../components/AddEventButton';
import MainTextBox from '../components/MainTextbox';

const HomePage = () => {
    return (
        <div>
            <h1 style={{color: 'black'}}>Trackie</h1>
            <MainTextBox />
            <AddEventButton />
        </div>
    );
};

export default HomePage;