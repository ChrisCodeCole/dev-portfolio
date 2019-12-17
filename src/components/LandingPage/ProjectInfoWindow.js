import React, { useState, useEffect } from 'react';
import './styles/ProjectInfoWindow.css';

import image1 from '../../assets/images/evan-wise-jzCmSH6en5c-unsplash.jpg';


function ProjectInfoWindow(props) {
    // const [selectedImage, setSelectedImage] = useState(0);
    // const [windowSize, setWindowSize] = useState({height: 0, width: 0});
    // const works = [{path: image1}, {path: image2}, {path: image3}];

    // useEffect(() => {
    //     const handler = (event) => {
    //         setWindowSize({height: window.innerHeight, width: window.innerWidth})
    //     };
    
    //     setWindowSize({height: window.innerHeight, width: window.innerWidth})
    //     window.addEventListener("resize", handler);
    
    //     // clean up
    //     return () => window.removeEventListener("resize", handler);
    //   }, []); // empty array => run only once

  return(
        <div className="ProjectInfoWindow-mainContainer">
            <h1 className="ProjectInfoWindow-projectTitle">Project Title</h1>
            <div className="ProjectInfoWindow-middleContainer">
                {/* <img className="ProjectInfoWindow-projectImage" src="" alt=""/> */}
                <div
                    // onClick={onClick}
                    // ref={cardDiv} 
                    className='ProjectInfoWindow-projectImage' 
                    style={Object.assign({}, {
                    position: 'relative',
                    backgroundImage: `url(${image1})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center'
                    })}
                />
                <p className="ProjectInfoWindow-projectDescription">
                    A really simple description talking about the project and its purpose. To the left we'll haave the same image background displayed also.
                </p>
            </div>
            <div className="ProjectInfoWindow-iconsContainer">
                {/* Map out icons here */}
            </div>
        </div>
    );
}

export default ProjectInfoWindow;