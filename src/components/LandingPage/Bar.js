import React from 'react';
import './styles/Bar.css';
import posed from 'react-pose';

const AnimatedBar = posed.div({
  isNotActive: { scaleX: 1, x: '0%' },
  isActive: { scaleX: 2, x: '50%' }
});


function Bar({ lastChild, isActive, onClick }) {
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
    // <div 
    //   className={
    //     `Bar-barStyles 
    //     ${lastChild ? 'Bar-lastChild' : ''} 
    //     ${isActive ? 'Bar-widthAnimation' : ''}
    //   `}
    //   onClick={onClick}
    // />
    <AnimatedBar
      className={
          `Bar-barStyles 
          ${lastChild ? 'Bar-lastChild' : ''} 
        `
      }
      pose={isActive ? 'isActive' : 'isNotActive'}
      onClick={onClick}
    />
  );
}

export default Bar;