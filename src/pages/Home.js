import React from 'react';
import Summary from '../components/Summary';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';

const Home = () => {
  return (
    <div>
      <Summary />
      <Education />
      <Skills />
      <Projects />
      <Experience />
    </div>
  );
};

export default Home;
