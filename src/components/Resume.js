import '../index.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function Resume(){

    useEffect(() => {
        document.title = "Resume";
      }, []);

    return(
        <div className="resume">
            <h1>Tracy Chiang</h1>
            <div className="contactInfo">
                <div className="contact">
                    <p>hsinyen19@gmail.com | 0435883625 |</p>
                    <Link to="https://www.linkedin.com/in/tracy-chiang-620b46177/">Linkedin</Link>
                </div>
            </div>
            <br />
            <h3>Summary</h3>
            <p>An I.T. enthusiast with business experiences transitioning into the I.T. field driven by a
            passion for continuous learning and growth. A scholarship recipient and a selfmotivated
            person. Focus on web and application development, supplemented by
            knowledge in networking and cyber security management. Passionate about exploring
            diverse domains within the I.T. industry.</p><br />
            <h3>PROJECTS</h3>
            <p>
            • SOS and ConnectFour board games (C#)<br />
            • Data mining for decision-making (Python)<br />
            • E-commerce website (HTML, CSS, JavaScript, Bootstrap)<br />
            • Personal Website (React)<br />
            • Sports Mobile application (React Native)</p><br />
            <h3>TECH SKILLS/TOOLS</h3>
            <p>
            • Front-end: JavaScript (React, React Native), HTML, CSS<br />
            • Back-end: C#, Python<br />
            • Data: SQLite, Tableau<br />
            • Networking: Cisco Packet Tracer, Wire Shark<br />
            • Project management: Microsoft 365, Notion</p><br />
            <h3>SOFT SKILLS</h3>
            <p>
            Project management, customer service, multitasking, problem-solving, time
            management, communication skill, team-working skill </p><br />
            <h3>WORK EXPERIENCE</h3>
            <h4>Depo Racing Technology | Sales representative<br /></h4>
            <h5>Jan 2021 – Apr 2022</h5>
            <p>• Maintained 100+ clients including both B2B and B2C.<br />
            • Was in charge of the VIP client, and oversaw both its sales and projects.<br />
            • Grew social media engagement by 30% through the creation of original content.<br />
            • Increased B2B partners by 10% from 2021 to 2022, resulting in $20k revenue.<br />
            • Increased B2C clients by 30% from 2021 to 2022.<br />
            • Won Alibaba E-commerce competition for best online store. </p> <br />
            <h4>AirAsia X Berhad | Ground staff</h4>
            <h5>Jul 2019 – Dec 2020</h5>
            <p> • Assisted 100+ passengers with check-in and boarding procedures daily.<br />
            • Earned additional responsibilities within 2 months of employment.<br />
            • Worked as a team member, ensuring smooth and efficient operations.<br />
            • Proactively addressed passenger inquiries and effectively resolved issues,
            showcasing strong problem-solving abilities.</p> <br />
            <h4>China Airlines | Intern</h4>
            <h5>Aug 2018 – Jan 2019</h5>
            <p>• Guided passengers through the self-check-in system, ensuring smooth
            navigation.<br />
            • Assisted and resolved passenger inquiries promptly.</p><br />
            <h3>EDUCATION</h3>
            <h4>Queensland University of Technology Feb 2023 – Present</h4>
            <p>&nbsp;&nbsp;&nbsp;Master of Information Technology (Majoring in Computer Science)</p><br />
            <h3>VOLUNTEERING & CLUBS</h3>
            <h4>QUT Connect Nov 2023 – Present</h4>
            <p>• Facilitated welcome sessions during welcome week, delivered engaging
            presentations to large groups of new students, and provided information about
            campus resources.</p><br />
            <h4>College of Excellent Feb 2023 – Present</h4>
            <p>• International Merit Scholarship holder.</p> <br />
        </div>






    );


}

export default Resume;