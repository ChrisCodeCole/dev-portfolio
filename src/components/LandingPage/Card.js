import React, { useState, useEffect, useRef } from 'react';
import './styles/Card.css';
import posed from 'react-pose';

const AnimatedCard = posed.div({
  isNotSelected: { 
    scaleX: 1,
    scaleY: 1, 
    x: 0,
    y: 0,
    transition: { 
      duration: 1000,
      ease: 'easeIn',
    }
  },
  isSelected: { 
    scaleX: ({ scaleObj }) => scaleObj.scaleX, 
    scaleY: ({ scaleObj }) => scaleObj.scaleX,
    x: ({ translateObj }) =>  translateObj.translateX,
    y: ({ translateObj }) => translateObj.translateY,
    transition: { 
      duration: 1000,
      ease: 'easeIn',
    }
  }
});
//
 /** USEFUL POSE PROPS */
  // initialPose={'isNotSelected'}
  // onPoseComplete={() => {}} //can find a better way to handle window resize here..//can also set off another animation for the overlay possibly?
  //                           //add overlay style to card for isSelected... && onHover
  //applyAtStart/applyAtEnd={} //accepts style objects to apply either before or after animation

function Card({ path, isSelected, onClick, windowSize }) {
  const [scaleObj, setScaleObj] = useState({});
  const [translateObj, setTranslateObj] = useState({});
  const cardDiv = useRef(null);
  
  useEffect(() => {
    if(isSelected){
      const objHeight = cardDiv.current.offsetHeight;
      const objWidth = cardDiv.current.offsetWidth;
      const objLeft = cardDiv.current.offsetLeft;
      const objTop = cardDiv.current.offsetTop;

      const objCenterX = objLeft + (objWidth / 2);
      const objCenterY = objTop + (objHeight / 2);
      const windowCenterX = windowSize.width / 2;
      const windowCenterY = windowSize.height / 2;

      //calculate appropiate scale to fill screen..
      let scaleX = 0;
      let scaleY = 0;
      scaleX = windowSize.width / objWidth - 0.025; //-0.025 to avoid scroll bars..
      scaleY = windowSize.height / objHeight - 0.025;
      const newScaleObj = { scaleX, scaleY };
      setScaleObj(newScaleObj);

      //calculate correct (x, y) to center of screen..
      let translateX = 0;
      let translateY = 0;
      translateX = windowCenterX - objCenterX;
      translateY = windowCenterY - objCenterY;
      const newTranslateObj = { translateX, translateY };
      setTranslateObj(newTranslateObj);

    } 
  }, [windowSize, isSelected]); // run on window size change

  return(
    <AnimatedCard
      onClick={onClick}
      ref={cardDiv} 
      className='Card-imageContainer' 
      style={Object.assign({}, {
        backgroundImage: `url(${path})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
        }, 
        isSelected ? { 
        //     position: 'absolute', 
        //     top: windowSize.height / 2, 
        //     left: windowSize.width / 2,  
        //     transform: `translate(-50%, -50%) scale(${scaleObj.scaleX}, ${scaleObj.scaleY})`, 
            margin: 0,
            border: 'none',
            borderRadius: 0,
            boxShadow: 'none',
            zIndex: -100
            // opacity: 0.4
          } : null,
      )}
      scaleObj={scaleObj}
      translateObj={translateObj}
      poseKey={scaleObj.scaleX}
      initialPose={'isNotSelected'}
      pose={isSelected ? 'isSelected' : 'isNotSelected'}
    />
  );
}

export default Card;
