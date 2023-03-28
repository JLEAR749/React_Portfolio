import React from "react";

const Portfolio = () => {

   const Portfolio = [
    {
      id: 0,
      title:'Note-Taker',
      languages:'JavaScript, HTML, CSS',
      repo:'https://git.heroku.com/floating-wave-30276.git',
      live:' https://jlear749.github.io/Note-Taker/',
    },

    {
      id: 1,
      title:'reelzgoodreviews',
      languages:'CSS, JavaScript, Handlebars',
      repo:'https://github.com/JLEAR749/reelzgoodreviews',
      live:'https://git.heroku.com/peaceful-plateau-13571.git',
    },

    {
      id:2,
      title:'Employee-tracker',
      languages:'JavaScript',
      repo:'https://github.com/JLEAR749/Employee_Tracker',
      live:'https://drive.google.com/file/d/13J5me0BIkAbd-wtzPFlIs8hmjwKU8vw9/view',
    },
    {
      id:3,
      title:'README_Generator',
      languages:'JavaScript',
      repo:'https://github.com/JLEAR749/README_Generator',
      live:'',
    },

    {
      id:4,
      title:'NBA-Fantasy-Football',
      languages:'JavaScript, HTML, CSS',
     repo:'https://github.com/JLEAR749/NBA-Fantasy-Football',
      live:'https://jlear749.github.io/NBA-Fantasy-Football/',
    },

    {
      id:5,
      title:'Social_Network_API',
      languages:'JavaScript',
      repo:'',
      live:''
    },
  ];

return(
<div
  name="portfolio"
  className="bg-gradient-to-b from black to-gray-800 w-full text-white md:h-screen portfolio"
  >
    <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify- center w-full h-full">
      <div className="pb-8">
        <p className="text-4xl font-bold inline border b-4 border-gray-500">
          Portfolio
        </p>
        <p className="py-6">Previous Projects</p>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          Portfolio.map(({ id, title, languages, repo, live }) => {
        <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
        <img
        src={src}
        alt="projects"
        className="rounded-md duration-200 hover:scale-105"
        />
        <div className="flex items-center justify-center">
          <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={() => window.open(link,'_blank')}>
            Demo
            </button>
            <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={() => window.open(repo, '_blank')}>
              GitHub
          </button>
        </div>
      </div>
    </div
  </div>
  </div>
);
};
  
  export default Portfolio;