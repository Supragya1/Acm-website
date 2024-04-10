import React, { useRef, useEffect } from 'react';
import {useState} from "react";
import './Card.css'
const Card = ({ name, position, image,variable, linkedin, github,instagram}) => {
    const cardRef = useRef(null);
    const throttle = (func, limit) => {
        let inThrottle;
        return function() {
          const args = arguments;
          if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
          }
        }
    }
    useEffect(() => {
        const card = cardRef.current;
        if (!card) return;
    
        const height = card.clientHeight;
        const width = card.clientWidth;
    
        const mouseMoveHandler = throttle((evt) => {
          evt.preventDefault();
    
          requestAnimationFrame(() => {
            const xRotation = -30 * ((evt.layerY - height / 2) / height);
            const yRotation = 20 * ((evt.layerX - width / 2) / width);
    
            card.style.transform = `perspective(1000px) scale(1.05) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
          });
        }, 100); // Throttle limit
    
        const mouseEnterHandler = () => {
          card.addEventListener("mousemove", mouseMoveHandler);
        };
    
        const mouseOutHandler = () => {
          card.style.transform = "perspective(1000px) scale(1) rotateX(0) rotateY(0)";
          card.removeEventListener("mousemove", mouseMoveHandler);
        };
    
        const clickHandler = () => {
          card.style.animation = "spin 1s ease-in-out";
          setTimeout(() => {
            card.style.animation = '';
          }, 1000);
        };
    
        card.addEventListener("mouseenter", mouseEnterHandler);
        card.addEventListener("mouseout", mouseOutHandler);
        card.addEventListener("click", clickHandler);
    
        // Cleanup function to remove event listeners
        return () => {
          card.removeEventListener("mouseenter", mouseEnterHandler);
          card.removeEventListener("mouseout", mouseOutHandler);
          card.removeEventListener("click", clickHandler);
        };
    }, []); 

return (
    <div ref={cardRef} className="card2">
        {
            <div className="container">
            <div className="overlay">
                <div className="card">
                    <img src={image} alt={name} className="card__image"/>
                    <div className="content">
                        <p className="name">{name}</p>
                        <p className="position">{position} {variable}</p>
                    </div>
                    <div className="social">
                        <a href={linkedin} target="_blank">
                        <img src="/linkedin.png" alt="" className="linkedin" />
                        </a>
                        <a href={github} target="_blank">
                        <img src="/github.png" alt="" className="github" />
                        </a>
                        <a href={instagram} target="_blank">
                        <img src="/instagram.png" alt="" className="instagram" />
                        </a>
                    </div>
                </div>  
            </div> 
        </div>
        }
        </div>
);
};
    // return (
    // <div className="container">
    //     <div className="overlay">
    //         <div className="card">
    //             <img src={image} alt={name} className="card__image"/>
    //             <div className="content">
    //                 <p className="name">{name}</p>
    //                 <p className="position">{position} {variable}</p>
    //             </div>
    //             <div className="social">
    //                 <a href={linkedin} target="_blank">
    //                 <img src="/linkedin.png" alt="" className="linkedin" />
    //                 </a>
    //                 <a href={github} target="_blank">
    //                 <img src="/github.png" alt="" className="github" />
    //                 </a>
    //                 <a href={instagram} target="_blank">
    //                 <img src="/instagram.png" alt="" className="instagram" />
    //                 </a>
    //             </div>
    //         </div>  
    //     </div> 
    // </div>
    // )

export default Card;