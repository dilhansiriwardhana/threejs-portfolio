import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import learnMore from "../assets/learnmore.mp3";

const playHoverSound = () => {
  const audio = new Audio(learnMore);
  audio.play();
};

const stopHoverSound = () => {
  const audio = new Audio(learnMore);
  audio.pause();
  audio.currentTime = 0;
};

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link
      to={link}
      className="neo-brutalism-white neo-btn"
      onMouseEnter={playHoverSound}
      onMouseLeave={stopHoverSound}
    >
      {btnText}
      <ArrowCircleRightIcon />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I'm <span>Dilhan </span>👋
      <br />
      Frontend Developer Student and Minimalist
    </h1>
  ),
  2: (
    <InfoBox
      text="Iam Undergraduate Student in Software Engineering"
      link="/about"
      btnText="Learn more"
    />
  ),
  3: (
    <InfoBox
      text="What I've been working on past months"
      link="/projects"
      btnText="Visit my Portfolio"
    />
  ),
  4: (
    <InfoBox
      text="Feel free to reach out if you're looking for a developer"
      link="/contact"
      btnText="Contact me"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
