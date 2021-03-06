import React from 'react';
import './styles/LandingPageContainer.css';

//Components
import BarsContainer from './BarsContainer';
import CardsContainer from './CardsContainer';
import HeaderSection from '../Common/HeaderSection';
import ProjectInfoWindow from './ProjectInfoWindow';

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
        <HeaderSection />
        <BarsContainer />
        <CardsContainer />
        <ProjectInfoWindow />
        <div className="LandingPageContainer-backgroundColor" />
    </div>
  );
}

export default LandingPageContainer;