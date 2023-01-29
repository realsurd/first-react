import React from "react";
import heroBnB from "./images/Group 77.png";


const Hero = () => {
    return (
        <section className="hero">
            <img src ={heroBnB} alt="Logo" className="hero--photo" />
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by <br />
             one-of-a-kind hosts—all without leaving <br />
             home.</p>
        </section>
    )
}



export default Hero;