import React from 'react';
import './styles/HeaderSection.css';

function HeaderSection(props) {
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
    <div className="HeaderSection-mainContainer">
      <div className="HeaderSection-nameContainer">
        <h1 className="HeaderSection-name">Christian Coleman</h1>
      </div>
      <div className="HeaderSection-navItemsContainer">
        {/* <h2 className="HeaderSection-navWorkLink">Work</h2>
        <h2 className="HeaderSection-navAboutLink">About</h2>
        <h2 className="HeaderSection-navContactLink">Contact</h2> */}
        {/* <span>Logo</span> */}
      </div>
      <div>

      </div>
    </div>
  );
}

export default HeaderSection;