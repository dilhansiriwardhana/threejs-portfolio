import { skills, experiences, socialLinks } from "../constants";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import CTA from "../components/CTA";
import { Link } from "react-router-dom";
import Slide from "../components/Slide";

const About = () => {
  ReactGA.send({
    hitType: "pageview",
    page: "/",
    title: "Home",
  });

  return (
    <>
      <section className="pb-16vh bg-custom-purple text-white ">
        <div className=" relative mx-auto w-custom-840 pt-vh ">
          <div className="absolute bottom-0 left-custom-500 custom-width h-full ">
            <h2 className="mb-0">Meet Dilhan</h2>
          </div>
        </div>
      </section>
      <section className="max-container">
        <h1 className="head-text">
          Hello, I'm{" "}
          <span className="blue-gradient_text font-semibold drop-shadow">
            Dilhan
          </span>
        </h1>

        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            Hi there! I’m Dilhan. I’m a passionate introvert who loves building
            things with code. <br />
            <br />
            My first experience with programming was when I was 18, but I didn’t
            last long.
            <br /> <br />
            Years later, I decided to try learning HTML. It was a radically
            different experience. Learning HTML felt like uncovering the secrets
            behind web pages. It was hands-on and felt like solving a puzzle.
            When I decided to build my own website, everything fell into place.
            HTML became the tool that let me organize information online.
            <br />
            <br /> Since then, I’ve been honing my skills and learning
            Javascript. I recently finished Web Development Bootcamp program.
            I’m seeking a full-time role where I can help a company achieve
            their goals.
          </p>
        </div>

        <div className="py-10 flex flex-col">
          <h3 className="subhead-text">My Skills</h3>

          <div className="mt-16 flex flex-wrap gap-12">
            {skills.map((skill) => (
              <div className="block-container w-20 h-20" key={skill.name}>
                <div className="btn-back rounded-xl" />
                <div className="btn-front rounded-xl flex justify-center items-center">
                  <img
                    src={skill.imageUrl}
                    alt={skill.name}
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="py-16">
          <h3 className="subhead-text">Work Experience</h3>
          <div className="mt-5 flex flex-col gap-3 text-slate-500">
            <p>
              As I’ve grown as a developer, I’ve worked alongside senior
              designers and developers who have raised my standards for what’s
              expected of any web application.
              <br />
              <br />
              Through these experiences, I’ve had the opportunity to create
              memorable products that are not only enjoyable to use, but are
              written in code that’s maintainable and easy to understand.
            </p>
          </div>

          <div className="mt-12 flex">
            <VerticalTimeline>
              {experiences.map((experience, index) => (
                <VerticalTimelineElement
                  key={experience.company_name}
                  date={experience.date}
                  icon={
                    <div className="flex justify-center items-center w-full h-full">
                      <img
                        src={experience.icon}
                        alt={experience.company_name}
                        className="w-[60%] h-[60%] object-contain"
                      />
                    </div>
                  }
                  iconStyle={{ background: experience.iconBg }}
                  contentStyle={{
                    borderBottom: "8px",
                    borderStyle: "solid",
                    borderBottomColor: experience.iconBg,
                    boxShadow: "none",
                  }}
                >
                  <div>
                    <h3 className="text-black text-xl font-poppins font-semibold">
                      {experience.title}
                    </h3>
                    <p
                      className="text-black-500 font-medium font-base ml-8 "
                      style={{ margin: 0 }}
                    >
                      {experience.company_name}
                    </p>
                    <p
                      className="text-black-500 font-medium font-base ml-8 "
                      style={{ margin: 0 }}
                    >
                      <a
                        href={experience.site}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Datarecover.lk
                      </a>
                    </p>
                  </div>

                  <ul className="my-5 list-disc ml-5 space-y-2">
                    {experience.points.map((point, index) => (
                      <li
                        key={`experience-point-${index}`}
                        className="text-black-500/50 font-normal pl-1 text-sm"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
        </div>
        <Slide />

        <hr className="border-slate-200" />

        <CTA />

        <hr className="border-slate-200  mt-20 " />

        {/* Social Links */}
        <div className="flex items-center space-x-4 mt-4 justify-center mt-10 ">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black-500 hover:text-blue-500"
            >
              <img src={link.iconUrl} alt={link.name} className="w-10 h-10" />
            </a>
          ))}
        </div>
      </section>
    </>
  );
};

export default About;
