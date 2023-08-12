
  import tripguide from "../assets/tripguide.png";
  import carrent from "../assets/carrent.png";
  import jobit from "../assets/jobit.png"
  import passwordgen from '../assets/passwordgen.png';
  import employee from '../assets/employee.png';
  import cbanking from '../assets/cbanking.png';
  import dukabit from '../assets/dukabit.png';
  import sgr from '../assets/sgr.jpg';
  import sbk from '../assets/sbk.png';
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "portfolio",
      title: "Portfolio",
    },
    {
      id: "resume",
      title: "Resume",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  
  const experiences = [
    
    {
      title: "ATCAS",
      tech: "Java, Spring Boot, React, Leaflet",
      points: [
        "Designed and implemented the prototype for the Automatic Train Collision and Avoidance System(ATCAS) for the Kenya Railways Corporation ",
        "Implemented real time directional train monitoring using GPS, Point in polygon to triangulate and monitor train locations to up to 10 meters.",
        "Liaised with the front end team in developing the dispatch tracking and monitoring interface using react and leaflet JS for generating of train movement and locations graphics.",
      ],
      link: "#",
      live: "#",
      image: sgr,
    },
    {
      title: "TARIDI BANKING",
      tech: "PYTHON DJANGO",
      points: [
        "Developed Taridi Banking System including its wallet system.",
        "Developed the transaction System, ensuring Atomic transactions that are secure and enforce balanced double entries.",
        "Developed the Maker checker system, ensuring actions are user attributable.",
      ],
      link: "https://github.com/wencharles/cbanking",
      live: "#",
      image: cbanking,
    },
    {
      title: "DUKABIT",
      tech: "React Native, Firebase, Tailwind",
      points: [
        "Implemented shop listing for SMEs",
        "Implemented instant in app chat for users",
        "Used firebase as the backend.",
        "Implemented email and google auth for authentication, with the options to add other auth providers."

      ],
      link: "#",
      live: "#",
      image: dukabit,
    },
    {
      title: "SBK Blaze",
      tech: "React Native, Firebase, Tailwind",
      points: [
        "An app for SBK members to showcase information that they can use",
        "The app can be used to view events that are past and upcoming",
      ],
      link: "#",
      live: "#",
      image: sbk,
    },
    // {
    //   title: "SocioSinergy",
    //   tech: "JavaScript Handlebars HTML CSS Boostrap Node.js Express.js MySQL Sequelize",
    //   points: [
    //     "Designed for individuals to connect and share their thoughts, ideas, and experiences with the world.",
    //     "This social media platform includes features like allowing users to sign up, edit their profile, update a profile picture, create, edit, comment and delete posts.",
    //     "It also allows send direct messages to other users,a among other characteristics.",
    //     "Our user story is to provide a simple and easy-to-use platform that allows people to express themselves and connect with others on a global scale.",
    //   ],
    //   link: "https://github.com/Ze7Hu/SocioSynergy",
    //   live: "https://sociosynergy1.herokuapp.com/",
    //   image: socio,
    // },
    // {
    //   title: "Express.js: Note Taker",
    //   tech: "JavaScript Node.js Express.js Npm modules",
    //   points: [
    //     "Note Taker application allows users to write, save and delete notes so that they can organise their work and keep track of the tasks that they have conpleted.",
    //     "When the user will open this application, they will be presented with a page whereby when they write their notes, a save icon will then appear on the right-hand side which will allow them to save their input.",
    //     "Saved notes will appear on the left-hand side along side a delete icon, which users can click on to delete their notes when needed."
    //   ],
    //   link: "https://github.com/Ze7Hu/Note-Taker-App",
    //   live: "https://note-taker-appl.herokuapp.com/",
    //   image: note,
    // },
  ];
  
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export {  experiences, projects };
