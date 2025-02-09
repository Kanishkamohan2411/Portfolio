import React, { useState } from "react";
import { User, Award, Folder, Star, Mail } from "lucide-react"; 
import "./SideBar.css";
import Myphoto from "../../assets/KaniWebPhoto.webp";

function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isOpen && <div className="overlay" onClick={toggleSidebar}></div>}

      <div className="menu-icon" onClick={toggleSidebar}>
        &#9776;
      </div>

      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={toggleSidebar}>&times;</button>

        <div className="profile-img">
          <img src={Myphoto} alt="Profile" />
        </div>
        <h5 className="profile-name">KANISHKA M</h5>

        <nav>
          <ul>
            <li>
              <a href="#about" onClick={toggleSidebar}>
                <User size={18} /> About
              </a>
            </li>
            <li>
              <a href="#achievement" onClick={toggleSidebar}>
                <Award size={18} /> Achievements
              </a>
            </li>
            <li>
              <a href="#projects" onClick={toggleSidebar}>
                <Folder size={18} /> Projects
              </a>
            </li>
            <li>
              <a href="#skill-section" onClick={toggleSidebar}>
                <Star size={18} /> Skills
              </a>
            </li>
            <li>
              <a href="#contact" onClick={toggleSidebar}>
                <Mail size={18} /> Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default SideBar;
