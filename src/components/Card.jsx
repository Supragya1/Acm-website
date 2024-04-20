import React, { useRef, useEffect } from 'react';
import {useState} from "react";
import './Card.css'
const Card = ({ name, position, image,variable, linkedin, github,instagram}) => {
return (
  <>
    <div  className="card2">
            <div className="container2">
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
        </div>
    </>
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