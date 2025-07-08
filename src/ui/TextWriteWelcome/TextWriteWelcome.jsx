import React from "react";
import scss from "./TextWriteWelcome.module.scss";
import { Typewriter } from "react-simple-typewriter";

const TextWriteWelcome = () => {
  const welcome = [
    "Welcome to TmdbMovie - Enjoy the Show!",
    "Discover Movie Magic at TmdbMovie",
    "Get Ready for Cinematic Bliss",
  ];
  return (
    <div>
      <Typewriter
        className={scss.title}
        words={welcome}
        loop={true}
        cursor={true}
        cursorStyle="|"
        typeSpeed={80}
        deleteSpeed={10}
        delaySpeed={2700}
      />
    </div>
  );
};

export default TextWriteWelcome;
