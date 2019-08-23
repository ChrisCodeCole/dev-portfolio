import React, { useState, useEffect } from 'react';
import './styles/BarsContainer.css';
import Bar from './Bar';

function BarsContainer(props) {
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
      {/* return bars based off of mapped state */}
      {/* below states active bar numerically */}
      <p>01/06</p>
    </div>
  );
}

export default BarsContainer;