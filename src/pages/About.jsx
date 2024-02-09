import { Link } from "react-router-dom";

import CTA from "../components/CTA";
import React, { useEffect, useState } from "react";

import handemoji from "../assets/hand-emoji.webp";
import pro from "../assets/pro.png";
import portfoliosite from "../assets/portfolio.png";
import iphonesite from "../assets/iphonelk.png";
import { Helmet } from "react-helmet-async";

import gsap from "gsap";

import "./About.css";
import ReactGA from "react-ga4";

const About = () => {
  ReactGA.send({
    hitType: "pageview",
    page: "/about",
    title: "Home",
  });

  useEffect(() => {
    const sectionTitle = document.querySelector(".section-title");

    gsap.from(sectionTitle, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out",
    });
  }, []);

  return (
    <>
      <Helmet>
        {/* Add JSON-LD script for sitename structured data */}
        <title>About me | Threejs Developer </title>
        <meta
          name="description"
          content="Experienced Three.js developer creating immersive 3D experiences. Explore stunning web visuals & interactive designs. Let's bring your ideas to life!"
        />
      </Helmet>
      <section className="mycontainer">
        <div className="content">
          <div className="alldiv">
            <div className="namediv">
              <h2 className="section-title">Meet Dilhan </h2>
              <img className="hand" src={handemoji} alt="HI emoji" />
            </div>

            <div className="description">
              <p>
                Hi there! I’m Dilhan. <br></br> I’m a passionate introvert who
                loves building things with code.
                <br />
                My first experience with programming was when I was 18, but I
                didn’t last long.Years later, I decided to try learning HTML. It
                was a radically different experience. Learning HTML felt like
                uncovering the secrets behind web pages. It was hands-on and
                felt like solving a puzzle. When I decided to build my own
                website, everything fell into place. HTML became the tool that
                let me organize information online.Since then, I’ve been honing
                my skills and learning Javascript. I’m seeking a full-time role
                where I can help a company achieve their goals.{" "}
              </p>
            </div>
            <div className="social-links">
              <a className="link twitter" href="">
                <span className="twitter-logo">
                  <svg
                    width="24"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 18.5C3.76504 19.521 5.81428 20 8 20C14.4808 20 19.7617 14.8625 19.9922 8.43797L22 4.5L18.6458 5C17.9407 4.37764 17.0144 4 16 4C13.4276 4 11.5007 6.51734 12.1209 8.98003C8.56784 9.20927 5.34867 7.0213 3.48693 4.10523C2.25147 8.30185 3.39629 13.3561 6.5 16.4705C6.5 16.4705 5 18.5 2 18.5Z"
                      fill="#fff"
                    />
                  </svg>
                </span>
                <span className="bubble">
                  <span className="strong">12+</span>
                  followers
                </span>
              </a>
              <a className="link github" href="">
                <span className="github-logo">
                  <svg
                    width="24"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 1.25C6.06294 1.25 1.25 6.10743 1.25 12.0994C1.25 17.3807 4.98901 21.7806 9.94118 22.75V19.8138C9.89151 19.8073 9.83484 19.7985 9.77181 19.7864C9.55571 19.745 9.26528 19.6656 8.9267 19.514C8.24445 19.2086 7.39219 18.6216 6.56641 17.5108L7.76624 16.6023C8.44046 17.5092 9.09014 17.9311 9.53483 18.1301C9.69641 18.2025 9.83444 18.2469 9.94118 18.2743V17.8278C9.94118 17.461 10.0494 17.1422 10.2238 16.8542C10.3434 16.6566 10.2615 16.3762 10.0453 16.3143C8.25526 15.8014 7 14.9767 7 12.2413C7 11.5301 7.22356 10.8615 7.61654 10.2795C7.62445 10.2678 7.63203 10.2566 7.63929 10.2459C7.72164 10.1243 7.76287 10.0634 7.77491 9.99714C7.78698 9.93069 7.76971 9.8588 7.73513 9.71485C7.73203 9.70195 7.7288 9.68847 7.72543 9.67437C7.58167 9.07234 7.57017 8.4381 7.73081 7.84647C7.78361 7.652 7.8968 7.53857 8.10166 7.56047C8.3674 7.58887 8.82753 7.71585 9.50999 8.16022C9.77813 8.33481 9.91221 8.42211 10.0303 8.44164C10.1484 8.46117 10.3062 8.42027 10.622 8.33846C11.0537 8.22659 11.4986 8.16654 12 8.16654C12.5014 8.16654 12.9463 8.22659 13.378 8.33846C13.6938 8.42027 13.8516 8.46117 13.9697 8.44164C14.0878 8.42211 14.2219 8.33482 14.49 8.16022C15.1725 7.71585 15.6326 7.58887 15.8983 7.56047C16.1032 7.53857 16.2164 7.652 16.2692 7.84647C16.4298 8.4381 16.4183 9.07232 16.2746 9.67436C16.2712 9.68846 16.268 9.70193 16.2649 9.71482C16.2303 9.8588 16.213 9.93069 16.2251 9.99714C16.2371 10.0634 16.2784 10.1243 16.3607 10.2459C16.368 10.2566 16.3755 10.2678 16.3834 10.2795C16.7764 10.8614 17 11.5301 17 12.2413C17 14.9767 15.7447 15.8014 13.9547 16.3143C13.7385 16.3762 13.6566 16.6566 13.7762 16.8542C13.9506 17.1422 14.0588 17.461 14.0588 17.8278V22.75C19.011 21.7806 22.75 17.3807 22.75 12.0994C22.75 6.10743 17.9371 1.25 12 1.25Z"
                      fill="#fff"
                    />
                  </svg>
                </span>
                <span className="bubble">
                  <span className="strong">1</span>
                  followers
                </span>
              </a>
              <a className="link linkedin" href="">
                <span className="linkedin-logo">
                  <svg
                    width="24"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M3 2.25C2.58579 2.25 2.25 2.58579 2.25 3L2.25 21C2.25 21.4142 2.58579 21.75 3 21.75L21 21.75C21.4142 21.75 21.75 21.4142 21.75 21L21.75 3C21.75 2.58579 21.4142 2.25 21 2.25L3 2.25ZM6.25 9L6.25 17H7.75L7.75 9H6.25ZM10.25 9H11.75V9.99973C12.3767 9.52896 13.1558 9.25 14 9.25C16.0711 9.25 17.75 10.9289 17.75 13V17H16.25V13C16.25 11.7574 15.2426 10.75 14 10.75C12.7574 10.75 11.75 11.7574 11.75 13L11.75 17H10.25L10.25 9ZM7.00781 8C7.5601 8 8.00781 7.55229 8.00781 7C8.00781 6.44771 7.5601 6 7.00781 6H6.99883C6.44655 6 5.99883 6.44771 5.99883 7C5.99883 7.55228 6.44655 8 6.99883 8H7.00781Z"
                      fill="#fff"
                    />
                  </svg>
                </span>
                <span className="bubble">
                  <span className="strong">800+</span>
                  connections
                </span>
              </a>
              <a className="link youtube" href="">
                <span className="youtube-logo">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.69686 3.27174C8.35585 2.93356 10.1415 2.75 12.0001 2.75C13.8587 2.75 15.6444 2.93356 17.3034 3.27174L17.4306 3.29766C19.3253 3.68329 20.5877 3.94024 21.6755 5.33892C22.7517 6.72258 22.7511 8.3272 22.7502 10.8124V13.1876C22.7511 15.6728 22.7517 17.2774 21.6755 18.6611C20.5877 20.0598 19.3253 20.3167 17.4306 20.7023L17.3034 20.7283C15.6444 21.0664 13.8587 21.25 12.0001 21.25C10.1415 21.25 8.35585 21.0664 6.69686 20.7283L6.56958 20.7023C4.67495 20.3167 3.41255 20.0598 2.3247 18.6611C1.24852 17.2774 1.24912 15.6728 1.25005 13.1876L1.25005 10.8124C1.24912 8.3272 1.24852 6.72258 2.3247 5.33892C3.41255 3.94024 4.67495 3.68329 6.56958 3.29766L6.69686 3.27174ZM11.2946 8.25224C11.8132 8.46986 12.443 8.82163 13.2132 9.25173C13.3145 9.30834 13.4164 9.36458 13.5184 9.42088C14.0218 9.69878 14.5281 9.9783 14.995 10.314C15.4146 10.6157 15.8127 10.9896 15.9445 11.5349C16.0185 11.841 16.0185 12.159 15.9445 12.4651C15.8127 13.0104 15.4146 13.3843 14.995 13.686C14.5281 14.0217 14.0217 14.3013 13.5183 14.5792C13.4163 14.6355 13.3145 14.6917 13.2132 14.7483C12.443 15.1784 11.8132 15.5301 11.2946 15.7478C10.4516 16.1015 9.55771 16.1302 8.82301 15.5282C8.36316 15.1514 8.20061 14.6119 8.12929 14.0683C7.95694 12.7544 7.95687 11.2462 8.12929 9.93172C8.20061 9.38806 8.36316 8.84858 8.82301 8.47181C9.55771 7.86983 10.4516 7.89845 11.2946 8.25224Z"
                      fill="#fff"
                    />
                  </svg>
                </span>
                <span className="bubble">
                  <span className="strong">13k+</span>
                  subscribers
                </span>
              </a>
            </div>
          </div>
          <div className="photo">
            {/* <span className="gradient"></span> */}
            <img className="sideimage" src={pro} alt="Dilhan" />
          </div>
        </div>
        <div className="skills">
          <div className="skillscontainer">
            <h1 className="skillstext">My Skills</h1>
            <p className="skillsptext">
              Apart fom the courses included in my degree , ive been taken Trial
              and error approach and learned so many things
            </p>
            <div className="list">
              <ul className="listlist">
                <li>HTML 5</li>
                <li>CSS3</li>
                <li>JAVASCRIPT</li>
                <li>REACT</li>
                <li>PHP & MYSQL</li>
                <li>LARAVEL</li>
                <li>GIT</li>
                <li>THREEJS</li>
                <li>WEBGL</li>
                <li>UX DESIGN</li>
                <li>WEB ANIMATION</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Projects Grid */}

        <div className="projectgrid">
          <div className="projectwrapper">
            <h1 className="projectsmaintitle">
              This is what i committed my time to
            </h1>
            <p className="projectdescription">
              I like to stay busy and always have a project in the works. Take a
              look at some applications and companies ive dedicated my time to
            </p>

            <div className="project">
              <div className="projectview">
                <h1 className="projectname">
                  Apple Service center Fullstack 3D Website
                </h1>
                <p>A web application for Apple service center </p>
                <Link className="projectlink" to="/appleservicecenter">
                  <img className="base" src={iphonesite} alt="" />
                  <div className="overlay"></div>
                  <h1 className="projecthovertext">
                    Project in Depth
                    <span className="link">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M19.6086 3.03365C20.2436 3.57396 21.1101 4.34021 21.5892 4.90786C21.854 5.22146 22.0169 5.6244 21.9986 6.06623C21.9823 6.45914 21.8252 6.81172 21.589 7.09154C21.1099 7.65886 20.2437 8.425 19.6089 8.96542C19.4315 9.11635 19.2103 9.30832 19.0068 9.43458C18.8064 9.55886 18.3178 9.8126 17.7548 9.55248C17.1886 9.29093 17.0672 8.74933 17.0328 8.51915C16.9996 8.29741 16.9998 8.02612 17 7.79902C17.0002 7.54742 17 7.29582 17 7.04423C16.5303 7.05965 16.1133 7.08456 15.7369 7.1242C14.7232 7.23093 14.1232 7.43514 13.6654 7.76421C13.3162 8.0152 13.0098 8.32084 12.7579 8.66938C12.4277 9.12637 12.222 9.72583 12.1127 10.7393C12.0014 11.7712 12 13.1091 12 14.9996C12 15.5518 11.5523 15.9996 11 15.9996C10.4477 15.9996 10 15.5518 10 14.9996L10 14.9408C9.99999 13.1223 9.99997 11.6765 10.1242 10.5248C10.2517 9.34221 10.5197 8.35201 11.1369 7.49797C11.5147 6.97516 11.9743 6.51669 12.4981 6.14021C13.3537 5.52522 14.3445 5.25975 15.5275 5.13519C15.9729 5.08829 16.4622 5.06007 17 5.04337C17 4.76232 17.0002 4.48127 17 4.20022C16.9998 3.97318 16.9996 3.70193 17.0328 3.48022C17.0672 3.25001 17.1887 2.70854 17.7547 2.44698C18.3176 2.18687 18.8062 2.44043 19.0066 2.56469C19.2101 2.69089 19.4313 2.8828 19.6086 3.03365Z"
                          fill="#fff"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12.1002 2.9982C12.1012 3.55048 11.6543 3.999 11.102 4C9.26069 4.00331 7.95244 4.02946 6.95832 4.19037C5.99343 4.34655 5.43598 4.61383 5.02517 5.02464C4.58291 5.4669 4.30569 6.08056 4.15584 7.19512C4.00213 8.33845 4 9.85009 4 11.9997C4 14.1494 4.00212 15.661 4.15584 16.8044C4.30569 17.9189 4.5829 18.5326 5.02516 18.9748C5.46742 19.4171 6.08108 19.6943 7.19564 19.8442C8.33897 19.9979 9.85061 20 12.0003 20C14.1499 20 15.6616 19.9979 16.8049 19.8442C17.9194 19.6943 18.5331 19.4171 18.9754 18.9748C19.3862 18.564 19.6534 18.0066 19.8096 17.0417C19.9705 16.0476 19.9967 14.7393 20 12.898C20.001 12.3457 20.4495 11.8988 21.0018 11.8998C21.5541 11.9008 22.001 12.3493 22 12.9016C21.9967 14.7099 21.9748 16.182 21.7839 17.3613C21.5883 18.5697 21.2001 19.5785 20.3896 20.3891C19.5138 21.2648 18.4077 21.6467 17.0714 21.8263C15.7793 22 14.1328 22 12.0744 22H11.9262C9.86771 22 8.22126 22 6.92915 21.8263C5.59281 21.6467 4.48675 21.2648 3.61095 20.389C2.73515 19.5133 2.35334 18.4072 2.17367 17.0709C1.99996 15.7787 1.99998 14.1323 2 12.0738L2 11.9257C1.99998 9.86718 1.99996 8.22073 2.17368 6.92862C2.35334 5.59229 2.73516 4.48623 3.61095 3.61043C4.4215 2.79988 5.43031 2.41167 6.63875 2.21607C7.81796 2.0252 9.29011 2.00326 11.0984 2C11.6507 1.99901 12.0992 2.44592 12.1002 2.9982Z"
                          fill="#fff"
                        />
                      </svg>
                    </span>
                  </h1>
                </Link>
              </div>
              <div className="projectview">
                <h1 className="projectname">3D Portfolio Website</h1>
                <p>A web application for my portfolio </p>
                <Link className="projectlink" to="/3dwebsite">
                  <img src={portfoliosite} alt="" />
                  <div className="overlay"></div>
                  <h1 className="projecthovertext">
                    Project in Depth
                    <span className="link">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M19.6086 3.03365C20.2436 3.57396 21.1101 4.34021 21.5892 4.90786C21.854 5.22146 22.0169 5.6244 21.9986 6.06623C21.9823 6.45914 21.8252 6.81172 21.589 7.09154C21.1099 7.65886 20.2437 8.425 19.6089 8.96542C19.4315 9.11635 19.2103 9.30832 19.0068 9.43458C18.8064 9.55886 18.3178 9.8126 17.7548 9.55248C17.1886 9.29093 17.0672 8.74933 17.0328 8.51915C16.9996 8.29741 16.9998 8.02612 17 7.79902C17.0002 7.54742 17 7.29582 17 7.04423C16.5303 7.05965 16.1133 7.08456 15.7369 7.1242C14.7232 7.23093 14.1232 7.43514 13.6654 7.76421C13.3162 8.0152 13.0098 8.32084 12.7579 8.66938C12.4277 9.12637 12.222 9.72583 12.1127 10.7393C12.0014 11.7712 12 13.1091 12 14.9996C12 15.5518 11.5523 15.9996 11 15.9996C10.4477 15.9996 10 15.5518 10 14.9996L10 14.9408C9.99999 13.1223 9.99997 11.6765 10.1242 10.5248C10.2517 9.34221 10.5197 8.35201 11.1369 7.49797C11.5147 6.97516 11.9743 6.51669 12.4981 6.14021C13.3537 5.52522 14.3445 5.25975 15.5275 5.13519C15.9729 5.08829 16.4622 5.06007 17 5.04337C17 4.76232 17.0002 4.48127 17 4.20022C16.9998 3.97318 16.9996 3.70193 17.0328 3.48022C17.0672 3.25001 17.1887 2.70854 17.7547 2.44698C18.3176 2.18687 18.8062 2.44043 19.0066 2.56469C19.2101 2.69089 19.4313 2.8828 19.6086 3.03365Z"
                          fill="#fff"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12.1002 2.9982C12.1012 3.55048 11.6543 3.999 11.102 4C9.26069 4.00331 7.95244 4.02946 6.95832 4.19037C5.99343 4.34655 5.43598 4.61383 5.02517 5.02464C4.58291 5.4669 4.30569 6.08056 4.15584 7.19512C4.00213 8.33845 4 9.85009 4 11.9997C4 14.1494 4.00212 15.661 4.15584 16.8044C4.30569 17.9189 4.5829 18.5326 5.02516 18.9748C5.46742 19.4171 6.08108 19.6943 7.19564 19.8442C8.33897 19.9979 9.85061 20 12.0003 20C14.1499 20 15.6616 19.9979 16.8049 19.8442C17.9194 19.6943 18.5331 19.4171 18.9754 18.9748C19.3862 18.564 19.6534 18.0066 19.8096 17.0417C19.9705 16.0476 19.9967 14.7393 20 12.898C20.001 12.3457 20.4495 11.8988 21.0018 11.8998C21.5541 11.9008 22.001 12.3493 22 12.9016C21.9967 14.7099 21.9748 16.182 21.7839 17.3613C21.5883 18.5697 21.2001 19.5785 20.3896 20.3891C19.5138 21.2648 18.4077 21.6467 17.0714 21.8263C15.7793 22 14.1328 22 12.0744 22H11.9262C9.86771 22 8.22126 22 6.92915 21.8263C5.59281 21.6467 4.48675 21.2648 3.61095 20.389C2.73515 19.5133 2.35334 18.4072 2.17367 17.0709C1.99996 15.7787 1.99998 14.1323 2 12.0738L2 11.9257C1.99998 9.86718 1.99996 8.22073 2.17368 6.92862C2.35334 5.59229 2.73516 4.48623 3.61095 3.61043C4.4215 2.79988 5.43031 2.41167 6.63875 2.21607C7.81796 2.0252 9.29011 2.00326 11.0984 2C11.6507 1.99901 12.0992 2.44592 12.1002 2.9982Z"
                          fill="#fff"
                        />
                      </svg>
                    </span>
                  </h1>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
