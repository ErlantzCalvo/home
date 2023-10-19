// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Erlantz",
  middleName: "",
  lastName: "Calvo",
  message: " Seeking to improve lives through the use of technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/ErlantzCalvo",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/erlantzcalvo/",
    },
    // {
    //   image: "fa-twitter",
    //   url: "https://www.twitter.com/hashirshoaeb/",
    // },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/erlantzcalvo.webp"),
  imageSize: 275,
  message:
    "My name is Erlantz Calvo. I’m a graduate of 2021 from University of the Basque Country with a degree in Computer Science. I am passionate about all fields of computer science, currently working as fullstack developer.",
  resume: require("../editable-stuff/resume.pdf"),
};

const projects = {
  show: true,
  heading: "Projects", 
  projectsDetails: [
    {
      name: "HayQueVivir",
      url: "https://hay-que-vivir.vercel.app",
      image: "HayQueVivir.jpg",
      stack: ["Go", "Next.js", "Tailwind", "Firebase"],
      description: "Follow the house prices in the different provinces of Spain with daily updated prices.",
      technical_details: "This project is separated into two different parts:\n\nOn the one hand there is a process made with Golang that is in charge of obtaining the statistics of the daily house prices as well as the Euribor. Both data are obtained through the use of webscraping and are stored in Firestore.\nOn the other hand, there is the web that users see, which is a web application created with Next.js that obtains the data saved by the webscraper in Firestore."
    }
  ],
};

// GITHUB SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Github Projects",
  gitHubUsername: "ErlantzCalvo", 
  reposLength: 4,
  specificRepos: [],
};

// SKILLS SECTION
const skills = {
  show: false,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "SQL", value: 70 },
    { name: "Data Structures", value: 80 },
    { name: "C/C++", value: 45 },
    { name: "JavaScript", value: 85 },
    { name: "React", value: 40 },
    { name: "HTML/CSS", value: 85 },
    { name: "C#", value: 85 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 80 },
    { name: "Empathy", value: 90 },
    // { name: "Organization", value: 60 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "You can contact me via email: ",
  email: "erlantzcalvocarrillo@gmail.com",
};


export { navBar, mainBody, about, projects, repos, skills, /*leadership,*/ getInTouch/*, experiences*/ };
