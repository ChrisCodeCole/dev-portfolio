import React, { useState, useEffect } from 'react';
import './styles/CardsContainer.css';
import Card from './Card';
import image1 from '../../assets/images/evan-wise-jzCmSH6en5c-unsplash.jpg';
import image2 from '../../assets/images/harper-sunday-nUpgLnikqkQ-unsplash.jpg';
import image3 from '../../assets/images/jametlene-reskp-VDrErQEF9e4-unsplash.jpg';

function CardsContainer(props) {
    const [selectedImage, setSelectedImage] = useState(0);
    const [windowSize, setWindowSize] = useState({height: 0, width: 0});
    const [selectedImageSize, setSelectedImageSize] = useState({height: 0, width: 0, projectX: 0, projectY: 0});

    const works = [{path: image1}, {path: image2}, {path: image3}];

    useEffect(() => {
        const handler = (event) => {
            setWindowSize({height: window.innerHeight, width: window.innerWidth})
        };
    
        setWindowSize({height: window.innerHeight, width: window.innerWidth})
        window.addEventListener("resize", handler);
    
        // clean up
        return () => window.removeEventListener("resize", handler);
      }, []); // empty array => run only once


      useEffect(() => {
        console.log("use effect ran");
        // const handler = (event) => {
        //     setWindowSize({height: window.innerHeight, width: window.innerWidth})
        // };
        const element = document.querySelector('.ProjectInfoWindow-projectImage');
        const elementRect = element.getBoundingClientRect();
        const height = elementRect.height;
        const width = elementRect.width;
        const projectX = elementRect.x;
        const projectY = elementRect.y;

        console.log("element", element);
        console.log("element", element.getBoundingClientRect());


        setSelectedImageSize({height, width, projectX, projectY });
        // window.addEventListener("resize", handler);
    
        // clean up
        // return () => window.removeEventListener("resize", handler);
      }, [selectedImage]); // empty array => run only once


  return(
        <div className="CardsContainer-mainContainer">
            {works.map((work, i) =>
                    <Card 
                        key={i} 
                        path={work.path} 
                        isSelected={selectedImage === i}
                        onClick={()=> setSelectedImage(i)}
                        windowSize={windowSize}
                        selectedImageSize={selectedImageSize}
                    />
                )
            }
        </div>
    );
}

export default CardsContainer;