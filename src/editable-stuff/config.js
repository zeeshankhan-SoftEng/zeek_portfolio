// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Muhammad",
  middleName: "",
  lastName: "Zeeshan Khan",
  message: " Dedicated to using the art of programming to change the future. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/zeeshankhan-SoftEng",
    },
  
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/khan_zeeshan_se/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/zeeshan-khan-34009a228/",
    },
    {
      image: "fa-twitter",
      url: "https://twitter.com/ZeeshanKha_SE",
    },
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
  imageLink: require("../editable-stuff/zeeshankhan_img.jpeg"),
  imageSize: 375,
  message:
    "My name is Muhammad Zeeshan Khan. I received a master's degree in computer science in 2023 from PIEM . My goal is to follow my enthusiasm for giving back to the community within the field of software engineering. This is my greatest area of passion. I enjoy working on open source projects in my spare time. ",
  resume: "https://drive.google.com/file/d/1-fNcbbQH1zZo4v7eeH6xvrwcuzmxruBf/view",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "zeeshankhan-SoftEng", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "PostgreSQL", value: 75 },
    { name: "Nodejs", value: 80 },
    { name: "Data Structures", value: 80 },
    { name: "JavaScript", value: 90 },
    { name: "React", value: 85 },
    { name: "HTML/CSS", value: 95 },
    { name: "Django", value: 80 },
    
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration and Teamwork", value: 90 },
    { name: "Time management", value: 80 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 80 },
    { name: "Empathy", value: 90 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering! If you know of any positions available, if you have any questions, please feel free to email me at",
  email: "zeeshankhan.softeng@gmail.com",
};


export { navBar, mainBody, about, repos, skills, getInTouch};
