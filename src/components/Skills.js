import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="container my-5">
      <h2 className="text-center mb-4">Skills</h2>
      <ul className="list-group">
        <li className="list-group-item"><strong>Programming Languages:</strong> JavaScript, HTML5, CSS3, PHP, SQL, Python, WordPress, Java</li>
        <li className="list-group-item"><strong>Developer Tools:</strong> Git, VS Code, Visual Studio, IntelliJ, Linux</li>
        <li className="list-group-item"><strong>Frameworks:</strong> jQuery, ReactJS</li>
        <li className="list-group-item"><strong>Analytical Tools:</strong> PowerBI, Tableau, Excel, PowerShell, Power BI, SQL Server, Oracle, financial analysis, Microsoft Office, Pivot Tables</li>
        <li className="list-group-item"><strong>Soft skills:</strong> Leadership, team collaboration, effective communication, adaptability, project management, problem-solving, relationship-building, enthusiasm, flexibility</li>
      </ul>
    </section>
  );
};

export default Skills;
