import { Link } from "react-router-dom";
import { projects } from "../constants";
import { arrow } from "../assets/icons";
import CTA from "../components/CTA";
import React, { useState } from "react";
import link from "../assets/link.mp3";
import hoverSound from "../assets/hoverSound.mp3";
import useSound from "use-sound";

const Projects = () => {
  const githubLinkSoundUrl = link;
  const liveLinkSoundUrl = hoverSound;

  const [playGithubLink, { stop: stopGithubLink }] = useSound(
    githubLinkSoundUrl,
    { volume: 0.5 }
  );
  const [playLiveLink, { stop: stopLiveLink }] = useSound(liveLinkSoundUrl, {
    volume: 0.5,
  });

  const [isGithubLinkHovering, setIsGithubLinkHovering] = useState(false);
  const [isLiveLinkHovering, setIsLiveLinkHovering] = useState(false);

  return (
    <section className="max-container">
      <h1 className="head-text">
        My{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Projects
        </span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          I like to stay busy and always have a project in the works. Take a
          look at some of the applications, I’ve dedicated my time to.
        </p>
      </div>

      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project) => (
          <div className="lg:w-[400px] w-full" key={project.theme}>
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme} `} />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={project.iconUrl}
                  alt="Project Icon"
                  className="w-1/2 h-1/2 object-contain"
                  key={project.name}
                />
              </div>
            </div>

            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold ">
                {project.name}
              </h4>
              <p className="mt-2 text-slate-500">{project.description}</p>
              <div className="mt-5 flex items-center gap-2 font-poppins">
                <Link
                  to={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600"
                  onMouseEnter={() => {
                    setIsGithubLinkHovering(true);
                    playGithubLink();
                  }}
                  onMouseLeave={() => {
                    setIsGithubLinkHovering(false);
                    stopGithubLink();
                  }}
                >
                  Github Link
                </Link>
                {isGithubLinkHovering && (
                  <img
                    src={arrow}
                    alt="arrow"
                    className="w-4 h-4 object-contain"
                  />
                )}
                <Link
                  to={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600 ml-5 "
                  onMouseEnter={() => {
                    setIsLiveLinkHovering(true);
                    playLiveLink();
                  }}
                  onMouseLeave={() => {
                    setIsLiveLinkHovering(false);
                    stopLiveLink();
                  }}
                >
                  Live LInk
                </Link>
                {isLiveLinkHovering && (
                  <img
                    src={arrow}
                    alt="arrow"
                    className="w-4 h-4 object-contain"
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className="border-slate-200" />
      <CTA />
    </section>
  );
};

export default Projects;
