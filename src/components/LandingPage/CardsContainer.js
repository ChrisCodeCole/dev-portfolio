import React, { useState, useEffect } from 'react';
import './styles/CardsContainer.css';
import Card from './Card';
import image1 from '../../assets/images/evan-wise-jzCmSH6en5c-unsplash.jpg';
import image2 from '../../assets/images/harper-sunday-nUpgLnikqkQ-unsplash.jpg';
import image3 from '../../assets/images/jametlene-reskp-VDrErQEF9e4-unsplash.jpg';

function CardsContainer(props) {
    const [selectedImage, setSelectedImage] = useState(0);
    const works = [{path: image1}, {path: image2}, {path: image3}];

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
        <div className="CardsContainer-mainContainer">
            {works.map((work, i) =>
                    <Card 
                        key={i} 
                        path={work.path} 
                        isSelected={selectedImage === i}
                        onClick={()=> setSelectedImage(i)} 
                    />
                )
            }
        </div>
    );
}

export default CardsContainer;