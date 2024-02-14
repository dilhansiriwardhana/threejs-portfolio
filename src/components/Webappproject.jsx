import "./Webappproject.css";
import webapp from "../assets/live/iphonerepair.lk.png";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import Threejsvideo from "../assets/element.mp4";
import Darkmode from "../assets/darkmode.mp4";
import { Helmet } from "react-helmet-async";

const Webappproject = () => {
  return (
    <>
      <Helmet>
        <title> Threejs | WEBGL | Threejs Immersive Website </title>
        <meta
          name="description"
          content="Seamlessly integrate Three.js for stunning 3D graphics and immersive web experiences. Elevate your website with advanced visualizations."
        />
      </Helmet>
      <section className="webapp">
        <div className="webappcontainer">
          <div className="webappwraper1  ">
            <h1 className="wrappertitle">
              Apple Repair Center Webapp Case Study
            </h1>
            <p className="wrapperdes">
              The client for this application approached me because they were
              seeking to develop a system that allows iPhone repair shops to
              efficiently connect with customers and optimize their search
              engine presence. They wanted a solution where customers could
              easily see their devices repairing status, and technicians could
              update the repair status as needed.
              <br />
              <br />
              They can track the progress of their repairs and receive updates
              from technicians. The system also includes features for
              technicians to manage their repair queues, update repair statuses,
              and communicate with customers. Additionally, I implemented search
              engine optimization strategies to ensure that the repair shop's
              website ranks highly in search engine results, helping to attract
              more customers and grow their business. Overall, the system
              provides a seamless experience for both customers and technicians,
              enhancing the efficiency and visibility of the repair shop's
              operations.
            </p>
            <div className="rolewrapper">
              <div className="technologies">
                <h1>Technologies i used</h1>
                <ul>
                  <li>React</li>
                  <li>Laravel</li>
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
                  As a full-stack developer, I am responsible for creating both
                  the frontend and backend components of the project, as well as
                  managing the database. This involves designing intuitive user
                  interfaces, implementing robust server-side functionalities,
                  and ensuring efficient database management. Throughout the
                  project, I engage in various stages of the design process.
                </p>
              </div>
            </div>
            <div className="livelink">
              <Link to="https://iphonerepair.lk">
                <h1>View Live Webapp</h1>
              </Link>
              <img src={webapp} alt="" className="liveimg" />
            </div>
            <div className="projectpurpose">
              <h1>project Purpose and Goal</h1>
              <p>
                The main purpose of the website for the Apple service center was
                to serve as a platform to attract new clients and enhance search
                engine optimization (SEO) for increased visibility.
                Additionally, the project aimed to streamline operations by
                implementing a system where technicians could update the status
                of Apple devices they were repairing.
                <br />
                <br />I am particularly drawn to this project because of my
                inherent passion for technology. As a tech-savvy individual, I
                am naturally inclined towards creating websites that revolve
                around technology-related themes. Given that Apple is a major
                player in the tech industry, it provides an exciting platform
                for me to apply my skills and knowledge. Furthermore, my
                enthusiasm for search engine optimization (SEO) is a driving
                force behind my interest in this project. I find joy in
                optimizing websites to improve their visibility and ranking on
                search engine results pages. Being able to marry my interest in
                technology with my expertise in SEO makes this project
                particularly appealing to me.
              </p>
            </div>
            <div className="spotlight">
              <h1>Three.js 3D Model Rendering ( Trickiest UI Element)</h1>
              <ReactPlayer
                className="videoplayer"
                url={Threejsvideo}
                controls={true}
                width="100%"
                height="auto"
              />
              <p>
                In my project, I tackled a particularly challenging UI element:
                integrating 3D elements into a web application. To accomplish
                this, I utilized WebGL, Three.js, and React Three Fiber. The 3D
                model itself was created using Blender, initially in GLB format,
                which I later converted to GLTF.
                <br />
                <br />
                One of the key challenges I encountered was that traditional
                HTML elements couldn't render the 3D model directly. Instead, I
                needed to create a scene, renderer, and camera using Three.js.
                This required a canvas element within the webpage.
                <br />
                <br />
                However, integrating the canvas posed layout problems. The 3D
                model would occupy all available space, causing other elements
                to become disorganized. To address this, I approached the
                problem methodically, incrementally refining the layout until
                achieving a satisfactory solution.
                <br />
                <br />
                The decision to incorporate a 3D model was driven by my personal
                passion for 3D animations. Rather than viewing it as a mere
                task, I found genuine enjoyment in the process. As a result, I
                ensured that visitors to the web application could engage with
                the model dynamically, allowing for zooming, tilting, panning
                within the confined space.
                <br />
                <br />
                Additionally, I incorporated smooth animations using GSAP,
                further enhancing the user experience. By prioritizing both
                functionality and aesthetics, I aimed to create a seamless and
                visually appealing interface.
                <br />
                <br />
                In summary, the integration of 3D elements required a
                combination of technical expertise, problem-solving skills, and
                a genuine passion for the subject matter. Through careful
                consideration and attention to detail, I successfully
                implemented a captivating and interactive feature within the web
                application.
              </p>
            </div>
            <div className="webstack">
              <h1>Web Stack & Explanation </h1>
              <ReactPlayer
                className="videoplayer"
                url={Darkmode}
                controls={true}
                width="100%"
                height="auto"
              />
              <p>
                I opted for React as the framework for this web application
                instead of traditional HTML, CSS, and JavaScript. React offers a
                more dynamic and efficient way to build user interfaces by
                utilizing a component-based architecture. This means that I can
                break down the UI into reusable components, making the code more
                modular and easier to maintain.
                <br />
                <br />
                In this project, I extensively utilized React hooks for state
                management and side effects. Instead of employing Redux for
                larger-scale state management, I leveraged the React Context API
                along with useState and useEffect hooks. This streamlined
                approach helped keep the codebase lightweight and focused,
                without the overhead of additional libraries.
                <br />
                <br />
                For styling, I embraced a hybrid approach by combining Tailwind
                CSS with regular CSS. Tailwind CSS offers utility classes for
                rapid prototyping and styling, while regular CSS provides
                flexibility for custom designs and layout tweaks.
                <br />
                <br />
                When it comes to icons, I opted for SVG (Scalable Vector
                Graphics) for their scalability and crispness across different
                screen resolutions. Additionally, I incorporated animation into
                some SVGs using libraries like React Spring Animation, adding a
                touch of interactivity and engagement to the user experience.
                <br />
                <br />
                Furthermore, I prioritized image optimization to ensure fast
                loading times and optimal performance across devices. By
                compressing and optimizing images, I aimed to enhance the
                overall user experience while minimizing bandwidth usage.
                <br />
                <br />
                In summary, my choice of technologies and methodologies,
                including React, React hooks, Tailwind CSS, SVGs, and image
                optimization, reflects a commitment to efficiency, scalability,
                and user-centric design principles in web development.
              </p>
            </div>
            <div className="currentstatus">
              <h1>Current Status</h1>
              <p>
                The iphonerepair.lk project is currently experiencing a high
                level of activity and engagement from real users. It has been
                discovered at the top of Google search engine results, which has
                significantly increased the number of clients visiting the
                repair shop. Clients are finding the website to be exceptionally
                interactive with a user-friendly interface.
                <br />
                <br />
                Users of the website include individuals from various
                backgrounds who are seeking repair services for their iPhones.
                They choose to use iphonerepair.lk primarily because of its
                prominent position in search results and the positive feedback
                they receive from others who have used the service.
                <br />
                <br />
                Clients have expressed their satisfaction with the website's
                design and functionality, often describing it as the best in Sri
                Lanka compared to other similar websites. They appreciate the
                intuitive user interface, which makes it easy for them to
                navigate through the site and find the information they need.
                <br />
                <br />
                The repair shop has been experiencing increased business as a
                result of the website's effectiveness in attracting clients.
                Customers are impressed by the quality of service they receive
                and the seamless experience provided by the website. Overall,
                iphonerepair.lk has become a go-to destination for individuals
                in Sri Lanka seeking reliable and efficient iPhone repair
                services.
              </p>
            </div>
            <div className="lessonslearned">
              <h1>Lessons Learned</h1>
              <p>
                I could spend all day describing the lessons that I learned
                while working on this project, but the most important ones
                involved my newfound understanding of React hooks, Git
                management, and REST API integration. As my first large project
                using React, I learned a lot of lessons regarding code structure
                and organization. When I first began, I would write sloppy code
                and move on, but now I know how doing so can come back to bite
                you. I now spend a lot more time refactoring and improving every
                line of code I write for the best readability and far fewer
                headaches.
              </p>
            </div>
            <div className="callus">
              <h2> Lets build something together </h2>
              <p>
                Feel free to react out if you are looking for a developer , have
                a question or just want to connect
              </p>
              <a className="emaillink" href="mailto:contact@dilhancodes.dev">
                contact@dilhancodes.dev
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Webappproject;
