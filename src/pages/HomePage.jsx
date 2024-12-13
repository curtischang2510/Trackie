import React from 'react'
import AddEventButton from '../components/AddEventButton';
import MainTextBox from '../components/MainTextBox';
import EventsCardContainer from '../components/EventsCardsContainer'; 

const HomePage = () => {
    return (
        <div>
            <h1 style={{color: 'black'}}>Trackie</h1>
            <MainTextBox />
            <AddEventButton />
            <EventsCardContainer />
        </div>
    );
};

export default HomePage;