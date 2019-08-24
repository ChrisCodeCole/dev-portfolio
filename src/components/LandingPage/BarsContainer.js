import React, { useState, useEffect } from 'react';
import './styles/BarsContainer.css';
import Bar from './Bar';

function BarsContainer(props) {
  const [selectedBarIndex, setSelectedBarIndex] = useState(0);
  const works = [{}, {}, {}, {}, {}, {}];
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
    <div className="BarsContainer-mainContainer">
      {
        works.map((work, i) => 
          <Bar
            key={i} 
            isActive={selectedBarIndex === i} 
            onClick={()=> setSelectedBarIndex(i)} 
            lastChild={i === works.length - 1} 
          />
        )
      }
      {/* below states active bar numerically */}
      <p className="BarsContainer-barActiveStatus">01/06</p>
    </div>
  );
}

export default BarsContainer;