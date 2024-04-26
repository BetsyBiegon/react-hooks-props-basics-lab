import React from "react";
import user from "../data/user";
import Links from "./Links"; // Correct import

function About({ bio }) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {bio && <p>{bio}</p>}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links {...user.links} /> {/* Corrected component name and removed semicolon */}
    </div>
  );
}

export default About;
