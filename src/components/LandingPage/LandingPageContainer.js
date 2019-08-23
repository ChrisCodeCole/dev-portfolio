import React, { useState, useEffect } from 'react';
import './styles/LandingPageContainer.css';

//Components
import BarsContainer from './BarsContainer';
import CardsContainer from './CardsContainer';
import HeaderSection from '../Common/HeaderSection';

function LandingPageContainer(props) {
  // const [isOnline, setIsOnline] = useState(null);

  // useEffect(() => {
  //   function handleStatusChange(status) {
  //     setIsOnline(status.isOnline);
  //   }

  //   ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
  //   // Specify how to clean up after this effect:
  //   return function cleanup() {
  //     ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
  //   };
  // });

  return(
    <div className="LandingPageContainer-mainContainer">
        <HeaderSection></HeaderSection>
        <BarsContainer></BarsContainer>
        <CardsContainer></CardsContainer>
    </div>
  );
}

export default LandingPageContainer;