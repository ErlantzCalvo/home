import React, {lazy} from "react";
import { BrowserRouter, Route } from "react-router-dom";
import {
  navBar,
  mainBody,
  about,
  projects,
  repos,
  skills,
  getInTouch,
} from "./editable-stuff/config.js";

const MainBody = lazy(()=> import('./components/home/MainBody'))
const AboutMe = lazy(()=> import('./components/home/AboutMe'))
const Project = lazy(()=> import('./components/home/Project.jsx'))
const Github = lazy(()=> import('./components/home/Github.jsx'))
const Footer = lazy(()=> import('./components/Footer'))
const Navbar = lazy(()=> import('./components/Navbar'))
const Skills = lazy(()=> import('./components/home/Skills'))
const GetInTouch = lazy(()=> import('./components/home/GetInTouch.jsx'))

const Home = React.forwardRef((props, ref) => {
  return (
    <>
      <MainBody
        gradient={mainBody.gradientColors}
        title={`${mainBody.firstName} ${mainBody.middleName} ${mainBody.lastName}`}
        message={mainBody.message}
        icons={mainBody.icons}
        ref={ref}
      />
      {about.show && (
        <AboutMe
          heading={about.heading}
          message={about.message}
          link={about.imageLink}
          imgSize={about.imageSize}
          resume={about.resume}
        />
      )}
      {projects.show && (
        <Project
          heading={projects.heading}
          // length={projects.reposLength}
          projects={projects.projectsDetails}
        />
      )}
      {repos.show && (
        <Github
          heading={repos.heading}
          username={repos.gitHubUsername}
          length={repos.reposLength}
          specfic={repos.specificRepos}
        />
      )}
      {skills.show && (
        <Skills
          heading={skills.heading}
          hardSkills={skills.hardSkills}
          softSkills={skills.softSkills}
        />
      )}
      </>
  );
});

const App = () => {
  const titleRef = React.useRef();

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL + "/"}>
      {navBar.show && <Navbar ref={titleRef} />}
      <Route path="/" exact component={() => <Home ref={titleRef} />} />
      <Footer>
        {getInTouch.show && (
          <GetInTouch
            heading={getInTouch.heading}
            message={getInTouch.message}
            email={getInTouch.email}
          />
        )}
      </Footer>
    </BrowserRouter>
  );
};

export default App;
