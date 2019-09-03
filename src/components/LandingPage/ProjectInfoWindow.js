import React, { useState, useEffect } from 'react';
import './styles/ProjectInfoWindow.css';

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
                <img className="ProjectInfoWindow-projectImage" src="" alt=""/>
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