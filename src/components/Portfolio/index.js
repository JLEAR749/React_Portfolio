import React from "react";
import Project from "Project";

const Portfolio = () => {
return 

   const Project = [
    {
      id: 0,
      title:'Note-Taker',
      languages:'JavaScript, HTML, CSS',
      image:'',
      description:'This project is an application called Note Taker that can be used to write and save notes. This application uses an Express.js back end and will save and retrieve note data from a JSON file. This application will also be deployed to Heroku.',
      repo:'https://git.heroku.com/floating-wave-30276.git',
      live:' https://jlear749.github.io/Note-Taker/',
    },

    {
      id: 1,
      title:'reelzgoodreviews',
      languages:'CSS, JavaScript, Handlebars',
      image:'',
      description:'AS a group that loves movies we wanted to be able to share our love of movies with the world by writing reviews and sharing our ratings. We created an app that allows a user to create an account and login using that account. Once that user is logged in they have the ability to see the top 50 rated movies on IMDB. They also have the ability to write/store/ delete reviews on the top 50 movies as well as any movie they would like. The user will also have the ability to create a profile page where they can upload a picture and their reviews will be stored.  Create a user, login and write some reviews.  We would love to hear your movie thoughts!!',
      repo:'https://github.com/JLEAR749/reelzgoodreviews',
      live:'https://git.heroku.com/peaceful-plateau-13571.git',
    },

    {
      id:2,
      title:'Employee-tracker',
      languages:'JavaScript',
      image:'',
      description:'Developers frequently have to create interfaces that allow non-developers to easily view and interact with information stored in databases. These interfaces are called content management systems (CMS). Your assignment this week is to build a command-line application from scratch to manage a companys employee database, using Node.js, Inquirer, and MySQL.',
      repo:'https://github.com/JLEAR749/Employee_Tracker',
      live:'https://drive.google.com/file/d/13J5me0BIkAbd-wtzPFlIs8hmjwKU8vw9/view',
    },
    {
      id:3,
      title:'README_Generator',
      languages:'JavaScript',
      image:'',
      description:'Your GitHub profile is an essential part of your public identity as a devloper. A well-tuned one allows you to show case your work to other developers as well as potential employers. An important component of your GitHub profile—and one that many new developers often overlook—is the README file. The quality of a README often discerns a good project over a bad project. A good one is an valueable opportunity to explain and display what your application does. It also justifies the technologies used and allows youto have the opportuntiy to explain some challenges you faced/ features that you hope to implement in the future. A good README helps the you excel over other developers putting their work on GitHub.  There is no one right way to structure a good README. There is one very wrong way, however, and that is to not include a README at all.  With this README generator, you no longer need to create a professional README from scratch. Simply answer a few questions and watch as a README is created before your very eyes.',
      repo:'https://github.com/JLEAR749/README_Generator',
      live:'',
    },

    {
      id:4,
      title:'NBA-Fantasy-Football',
      languages:'JavaScript, HTML, CSS',
      image:'',
      description:'As new developers, we wanted to showcase and practice our skills by creating a website that utilizes the programming languages we have been learning. To do this, we decided to create a website for users that play in fantasy basketball leagues. It utilizes HTML, CSS, Javascript and Semantic-UI to give statistics that will help users gain a competitive edge in their fantasy leagues.',
      repo:'https://github.com/JLEAR749/NBA-Fantasy-Football',
      live:'https://jlear749.github.io/NBA-Fantasy-Football/',
    },

    {
      id:5,
      title:'Social_Network_API',
      languages:'JavaScript',
      image:'https://github.com/JLEAR749/Social_Network_API',
      description:'',
      repo:'',
      live:''
    }
     
  ]

  function Portfolio() {
    return <List Project={Project} />
  }
  
  export default Portfolio;