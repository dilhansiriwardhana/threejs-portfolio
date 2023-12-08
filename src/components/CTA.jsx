import React from "react";
import { Link } from "react-router-dom";
import useSound from "use-sound";
import cta from "./cta.css";

import pop from "../assets/pop.mp3";

const CTA = () => {
  const soundUrl = pop;

  const [play, { stop }] = useSound(soundUrl, { volume: 0.5 });
  const [isHovering, setIsHovering] = React.useState(false);

  return (
    <section className="cta">
      <p className="cta-text">
        Have a project in mind? <br className="sm:block hidden" />
        Lets build something together
      </p>
      <Link
        to="/contact"
        className={`btn ${isHovering ? "hover:scale-110" : ""}`}
        onMouseEnter={() => {
          setIsHovering(true);
          play();
        }}
        onMouseLeave={() => {
          setIsHovering(false);
          stop();
        }}
      >
        Contact
      </Link>
    </section>
  );
};

export default CTA;
