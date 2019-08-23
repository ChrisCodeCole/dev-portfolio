import React, { useState, useEffect } from 'react';
import './styles/CardsContainer.css';
import Card from './Card';

function CardsContainer(props) {
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
        <div>
            {/* map out cards here */}
        </div>
    );
}

export default CardsContainer;