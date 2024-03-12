import React from 'react';
import './ProfilePage.css';

function ProfilePage() {
  return (
    <div className="resume-container">
      <header>
        <div className="header-left">
          <h1 className="name">Laxmi Singh</h1>
          <p className="subtitle">Full-Stack Web Developement Intern at BitsGate</p>
        </div>
        <div className="header-right">
          <p className="contact"><strong>Contact:</strong> +91 8252375837</p>
          <p className="contact"><strong>Email:</strong> Singhlaxmi1232@gmail.com</p>
          <p className="contact"><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/laxmi-singh-087795233">laxmi-singh-087795233</a></p>
          <p className="contact"><strong>Location:</strong> Mandya, Karnataka</p>
        </div>
      </header>

      <section className="work-experience">
        <h2>Work Experience</h2>
        

        <div className="item">
          <h3>Full Stack Web Development Intern, Bharat Intern (Remote)</h3>
          <p className="sub">January 2024 - February 2024</p>
          <ul>
            <li>Assisted in designing and implementing user interfaces, enhancing website functionality, and troubleshooting technical issues.</li>
            <li>Collaborated with cross-functional teams to ensure alignment with project deadlines.</li>
          </ul>
        </div>

        <div className="item">
          <h3>Web Development Intern, Rareminds Pvt. Ltd. (Bengaluru)</h3>
          <p className="sub">July 2023 - September 2023</p>
          <ul>
            <li>Contributed to designing and implementing web solutions, gaining hands-on experience with various technologies.</li>
            <li>Collaborated with the team to deliver high-quality projects within specified timelines.</li>
          </ul>
        </div>
      </section>

      <section className="education">
        <h2>Education</h2>
        <div className="item">
          <h3>B.E. in Computer Science and Engineering, P.E.S. College Of Engineering (Mandya, Karnataka)</h3>
          <p className="sub">December 2021 - August 2025 (Expected)</p>
          <p>GPA: 8.5 (Till 2nd year)</p>
        </div>
      </section>

      <section className="skills">
        <h2>Technical Skills</h2>
        <ul>
          <li>HTML, CSS, JavaScript</li>
          <li>Node.js, Express.js</li>
          <li>React.js</li>
         
          
        </ul>
      </section>

      <section className="certifications">
        <h2>Certifications</h2>
        <ul>
          <li>Web Development (Udemy)</li>
          <li>TCS iON Career Edge - Young Professionals (TCS ION)</li>
          <li>Career Essentials in Generative AI by Microsoft and LinkedIn</li>
          <li>Project Sunshine (HCL Tech)</li>
        </ul>
      </section>

      <section className="activities">
        <h2>Awards/Activities</h2>
        <ul>
          <li>Finalist in Smart India Hackathon 2022</li>
          <li>Completed Microsoft's AI Skills Challenge 2024</li>
        </ul>
      </section>

      <footer>
        <p>© 2024 Laxmi Singh. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default ProfilePage;
