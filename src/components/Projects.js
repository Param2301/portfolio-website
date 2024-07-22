import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="container my-5">
      <h2 className="text-center mb-4">Project Experience</h2>
      <div className="card mb-3">
        <div className="card-body">
          <h3 className="card-title">Front End (JavaScript, HTML, CSS)</h3>
          <p className="card-text"><strong>Flight Check Website</strong> 09/2023 – 12/2023, Halifax, NS</p>
          <ul>
            <li>Designed and implemented a comprehensive search engine for displaying real-time flight data, handling 1000 simultaneous queries per second.</li>
            <li>Created 10 HTML prototypes and integrated 15 XHTML documents with CSS style sheets to improve the user interface.</li>
            <li>Implemented JavaScript functionality resulting in a 50% faster data retrieval and display for users.</li>
            <li>Streamlined integration of flight information, leading to a 60% increase in user satisfaction.</li>
          </ul>
        </div>
      </div>
      <div className="card mb-3">
        <div className="card-body">
          <h3 className="card-title">Full Stack Developer (PHP, MySQL, Bootstrap)</h3>
          <p className="card-text"><strong>Development Authentication Page Development</strong> 04/2023 – 08/2023, Halifax, NS</p>
          <ul>
            <li>Developed a secure authentication page using PHP, ensuring the confidentiality of user data for 100,000 users.</li>
            <li>Implemented user-friendly front-end login and registration pages in PHP, resulting in a 70% faster user registration and Utilized PDO class to securely connect to the database and validate user credentials for 500 accounts on the login page.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Projects;
