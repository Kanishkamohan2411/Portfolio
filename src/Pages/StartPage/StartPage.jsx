import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import SideBar from "../../Component/SideBar/SideBar";
import "./StartPage.css";
import Myphoto from "../../assets/KaniWebPhoto.webp";
import Project1 from "../../assets/col web portfolio.webp";
import Project2 from "../../assets/eark for portfolio.webp";
import Project3 from "../../assets/kani a.webp";
import Project4 from "../../assets/leetcode.webp";
import Project5 from "../../assets/eee web.webp";
import Project6 from "../../assets/cse web.webp";
import pic1 from "../../assets/c.webp";
import pic2 from "../../assets/atom.webp";
import pic3 from "../../assets/css-3.webp";
import pic4 from "../../assets/github.webp";
import pic5 from "../../assets/html.webp";
import pic6 from "../../assets/java.webp";
import pic7 from "../../assets/mysql.webp";
import pic8 from "../../assets/node-js.webp";
import pic9 from "../../assets/java-script.webp";
import pic10 from "../../assets/runnerupcerti.webp";

const StartPage = () => {
    useEffect(() => {
        document.title = "Its KANISHKA";
    
        // Change Favicon Dynamically
        const favicon = document.querySelector("link[rel='icon']");
        if (favicon) {
          favicon.href = "/k-icon.ico"; // Use the image you placed in public/
        } else {
          const link = document.createElement("link");
          link.rel = "icon";
          link.href = "/fk-icon.ico"; // Change to your image filename if different
          document.head.appendChild(link);
        }
      }, []);
  const typedElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: ["Web Developer", "Freelancer", "Coder"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy(); // Clean up on unmount
    };
  }, []);

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <SideBar />

      {/* Main Content */}
      <div className="content">
        
      <section id="hero" className="hero-section">
  <div className="hero-container">
    <h2>Hello!, It's KANISHKA MOHAN</h2>
    <p>
      I'm <span ref={typedElement}></span>
    </p>
    <div className="social-links">
          <a href="https://github.com/Kanishkamohan2411" className="github"><i className="bi bi-github"></i></a>
          <a href="https://www.linkedin.com/in/kanishka-m-5655472a0" className="linkedin"><i className="bi bi-linkedin"></i></a>
          <a href="/kanishka_resume.pdf" className="resume" target="_blank" rel="noopener noreferrer">
  <span className="cv-icon">CV</span>
</a>

        </div>
  </div>
</section>


        
        <section id="about" className="about-section">
          <h2>ABOUT ME!</h2>
          <div className="about-content">
            <div className="about-photo">
              <img src={Myphoto} alt="Kanishka Mohan" />
            </div>
            <div className="about-details">
              <p>
                Hello! My name is <strong>Kanishka Mohan</strong>, a passionate
                Web Developer with a knack for creating dynamic and
                user-friendly websites and web applications.
              </p>
             
              <p>
                I have experience working on various frontend and backend technologies.
                I thrive in environments where I can solve challenging problems and bring ideas to life through code.
              </p>
            </div>
          </div>
        </section>

        <section id="achievement" className="projects-section">
  <h2>ACHIEVEMENTS</h2>
  <div className="projects-grid">
  <div className="project-item">
      <div className="project-details">
      <h5>Awarded For Developing My College Official Website!</h5>
        {/* <p>"Bringing EARK International School online—designed, developed, and launched!".</p> */}
      </div>
      <div className="card">
        <img src={Project3} alt="Project 2" />
      </div>
    </div>
    <div className="project-item">
      <div className="project-details">
      <h5>I Secured Runner Place In Coding Event</h5>
        {/* <p>A web application that helps users track their daily tasks and manage productivity.</p> */}
      </div>
      <div className="card">
        <img src={pic10} alt="Project 1" />
      </div>
    </div>
    <div className="project-item">
      <div className="project-details">
      <h5>Developed My College's official website—A Live Website!</h5>
        {/* <p>A web application that helps users track their daily tasks and manage productivity.</p> */}
      </div>
      <div className="card">
        <img src={Project1} alt="Project 1" />
      </div>
    </div>
    <div className="project-item">
      <div className="project-details">
      <h5>EARK International School—A live website !</h5>
        {/* <p>"Bringing EARK International School online—designed, developed, and launched!".</p> */}
      </div>
      <div className="card">
        <img src={Project2} alt="Project 2" />
      </div>
    </div>
    <div className="project-item">
      <div className="project-details">
      <h5>LeetCode Champion - 100+ Problems Solved</h5>
        {/* <p>A portfolio website showcasing my skills, projects, and achievements.</p> */}
      </div>
      <div className="card">
        <img src={Project4} alt="Project 3" />
      </div>
    </div>
  </div>
</section>



<section id="projects" className="achievements-section">
  <h2>PROJECTS</h2>
  <div className="achievements-grid">
    <div className="achievement-item">
  
      <div className="achievement-card">
        <img src={Project5} alt="Achievement 3" className="achievement-img" />
        <div className="achievement-details">
         
          <p>Our college's EEE department symposium website features a freelancer project developed using React.js  </p>
        </div>
      </div>
    </div>
    <div className="achievement-item">
  {/* <h5><strong>Developed My College's Official Website</strong></h5> */}
  <div className="achievement-card">
    <img src={Project1} alt="Achievement 1" className="achievement-img" />
    <div className="achievement-details">
      <p>
        Our college official website is developed and maintained using React.js and Express.js <br />
        Live At: <a href="https://accet.ac.in/" target="_blank" rel="noopener noreferrer">ACGCET</a>
      </p>
    </div>
  </div>
</div>

    <div className="achievement-item">
      <div className="achievement-card">
        <img src={Project2} alt="Achievement 2" className="achievement-img" />
        <div className="achievement-details">
          {/* <h5><strong>EARK International School – A Live Website</strong></h5> */}
          <p>A freelance project for the Eark International School website in Africa, developed using React.js.<br /> Live At: <a href="https://www.earkinternationalschool.org" target="_blank" rel="noopener noreferrer">EARK</a></p>
        </div>
      </div>
    </div>
    <div className="achievement-item">
      <div className="achievement-card">
        <img src={Project6} alt="Achievement 4" className="achievement-img" />
        <div className="achievement-details">
          
          <p>The Cognablaze CSE Department Symposium website, developed using React.js and Express.js. <br />Live At: <a href="https://celebrated-gnome-a7f7a9.netlify.app/" target="_blank" rel="noopener noreferrer">COGNABLAZE</a></p>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="skill-section" className="skill">
  <h2>TECHNICAL SKILLS</h2>


  <div className="skill-container">
    {[
      { name: "HTML5", img: pic5 },
      { name: "CSS3", img: pic3 },
      { name: "Java", img: pic6 },
      { name: "C - LANG", img: pic1 },
      { name: "GitHub", img: pic4 },
      { name: "MySQL", img: pic7 },
      { name: "Node.js", img: pic8 },
      { name: "React js", img: pic2 },
      { name: "JavaScript", img: pic9 },
     
    ].map((skill, index) => (
      <div key={index} className="flex flex-col items-center">
        <img src={skill.img} alt={skill.name} className="skill-img" />
        <p className="mt-2 font-medium">{skill.name}</p>
      </div>
    ))}
  </div>
</section>


        
<section id="contact" className="contact-section">
  <h2>CONTACT ME</h2>
  <p>
    
    <a href="mailto:kanishkamnkl@gmail.com" className="contact-link">
      kanishkamnkl@gmail.com
    </a>{" "}
    <br />
    
    <a href="tel:+918248613407" className="contact-link">
      8248613407
    </a>
  </p>
</section>


      </div>
    </div>
  );
}

export default StartPage;