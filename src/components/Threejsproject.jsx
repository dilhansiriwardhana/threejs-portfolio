import "./Threejsproject.css";
import dilhancodes from "../assets/dilhancodes.png";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import threejsportfolio from "../assets/3dportfolio.mp4";
import fox from "../assets/fox.mp4";
import { Helmet } from "react-helmet-async";

const Threejsproject = () => {
  return (
    <>
      <Helmet>
        <title> React Three fiber | Threejs Immersive Website </title>
        <meta
          name="description"
          content="Seamlessly integrate Three.js for stunning 3D graphics and immersive web experiences. Elevate your website with advanced visualizations."
        />
      </Helmet>
      <section className="webapp">
        <div className="webappcontainer">
          <div className="webappwraper1  ">
            <h1 className="wrappertitle">3D Portfolio Case Study</h1>
            <p className="wrapperdes">
              My 3D portfolio website offers visitors an immersive experience
              where they can interact with a rotating 3D world. Through
              intuitive navigation, users explore my portfolio content,
              showcasing my work from various angles and perspectives. This
              dynamic presentation not only captivates visitors but also
              provides a memorable and engaging way to showcase my creative
              projects.
              <br />
            </p>
            <div className="rolewrapper">
              <div className="technologies">
                <h1>Technologies i used</h1>
                <ul>
                  <li>React</li>
                  <li>Threejs</li>
                  <li>React Three Fiber</li>
                  <li>Tailwindcss</li>
                  <li>CI/CD</li>
                  <li>GIT</li>
                </ul>
              </div>
              <div className="myrole">
                <h1>My Role</h1>
                <p>
                  As a frontend developer, this project is a unique opportunity
                  for me to leverage my skills. My primary focus revolves around
                  seamlessly integrating 3D worlds together, ensuring a cohesive
                  and immersive user experience. In this role, I have the
                  freedom to explore innovative techniques and implement
                  cutting-edge technologies to bring these 3D worlds to life.
                  From creating captivating visual interfaces to optimizing
                  performance for smooth interactions, I am responsible for
                  every aspect of the frontend development process.
                </p>
              </div>
            </div>
            <div className="livelink">
              <Link to="https://iphonerepair.lk">
                <h1>View Live Webapp</h1>
              </Link>
              <img src={dilhancodes} alt="" className="liveimg" />
            </div>
            <div className="projectpurpose">
              <h1>project Purpose and Goal</h1>
              <p>
                The primary purpose of this 3D portfolio project is to showcase
                my work and projects in an innovative and captivating manner. By
                leveraging 3D worlds and immersive environments, the portfolio
                aims to provide visitors with a unique and engaging experience
                while highlighting my skills and accomplishments as a developer.
                <br />
              </p>
            </div>
            <div className="spotlight">
              <h1>3D World Creating Using Threejs</h1>
              <ReactPlayer
                className="videoplayer"
                url={threejsportfolio}
                controls={true}
                width="100%"
                height="auto"
              />
              <p>
                In my project, I created a platform where users can interact
                with 3D models within a virtual world. Initially, I encountered
                a problem with positioning the 3D models correctly. To resolve
                this issue, I decided to explore WebGL, a JavaScript API for
                rendering interactive 3D graphics in web browsers.
                <br />
                <br />
                As I delved deeper into WebGL, I discovered a solution to fix
                the positioning problem with the 3D models. WebGL provided me
                with a powerful set of tools for creating immersive and
                interactive experiences on the web. It allowed me to manipulate
                and render 3D graphics with precision and control.
                <br />
                <br />
                In summary, my project involved utilizing WebGL to render 3D
                models and enabling users to interact with them within a virtual
                environment. By exploring and leveraging the capabilities of
                WebGL, I was able to overcome challenges and enhance the
                functionality of my project.
              </p>
            </div>
            <div className="webstack">
              <h1>Web Stack & Explanation </h1>
              <ReactPlayer
                className="videoplayer"
                url={fox}
                controls={true}
                width="100%"
                height="auto"
              />
              <p>
                For my 3D portfolio, I employed a blend of technologies like
                React, Tailwind CSS, regular CSS, Three.js, WebGL, and React
                Three Fiber. React helped me manage the UI components
                efficiently, while Tailwind CSS simplified styling tasks with
                its ready-made classes. I also utilized regular CSS for specific
                customizations. Three.js and WebGL were crucial for rendering
                stunning 3D graphics, and React Three Fiber seamlessly
                integrated Three.js with my React components. With these tools,
                I crafted a captivating portfolio that showcases my work in a
                visually striking and interactive manner, reflecting my skills
                and creativity.
              </p>
            </div>

            <div className="lessonslearned">
              <h1>Lessons Learned</h1>
              <p>
                Exploring 3D integration for websites and creating tools like 3D
                configurators for businesses, I gained valuable insights. As I
                worked on this project, I delved deep into understanding React
                hooks and refining my Git skills. Initially, I rushed through my
                code, but now I take my time to ensure clarity and readability.
                This change has made development smoother and less stressful,
                highlighting the importance of methodical software development.
              </p>
            </div>
            <div className="callus">
              <h2> Lets build something together </h2>
              <p>
                Feel free to react out if you are looking for a developer , have
                a question or just want to connect
              </p>
              <Link className="emaillink" to="mailto:contact@dilhancodes.dev">
                contact@dilhancodes.dev
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Threejsproject;
