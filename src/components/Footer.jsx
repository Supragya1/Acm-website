import { Link, useMatch, useResolvedPath } from "react-router-dom";
import PropTypes from "prop-types"; 
import { useState } from "react";
import { useEffect } from "react";
export default function Footer() {
    return (
        <>
        <div className="footer" >
	    <div className="waves">
		<div className="wave1" ></div>
		<div className="wave2" ></div>
		<div className="wave3" ></div>
		<div className="wave4" ></div>
	</div>
	<p style={{opacity: "0.75"}}></p>
    </div>
        </>
    )
}