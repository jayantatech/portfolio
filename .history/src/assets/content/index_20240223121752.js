import {
  jsIcon,
  reactIcon,
  telwindCss,
  git,
  twitter,
  linkedin,
  github,
  css,
  bootstrap,
  html,
  wordpress,
  BgShape,
  BgShape2,
  BgShape3,
  DeskCalendar,
  Success,
  Book,
  Bullseye,
  Elementor,
  Rankmath,
  TMDB,
  Vercel,
  Hostinger,
  Redux,
  Sukrahod,
  ScssLogo,
  searchConsole,
  googleAnalytics,
} from "../icons/index";
import { botwavetech, movieHome, projectImg } from "../images";

const home = {
  heroSection: {},
  WhyMe: [
    {
      title: "Problem-solving",
      description:
        "I'm not afraid to roll up my sleeves and tackle challenges, finding creative solutions even when things get tricky",
      img: Bullseye,
    },
    {
      title: "Team Player",
      description:
        "Together, we achieve more! I flourish in collaborative environments, building trust and supporting my team to succeed",
      img: Success,
    },
    {
      title: "Time Management",
      description:
        "Master of my schedule, I ensure deadlines are met, priorities are juggled, and every minute counts. No project left behind!",
      img: DeskCalendar,
    },
    {
      title: "Continuous Learning",
      description:
        "Curiosity fuels my fire! I'm always keen to learn new things, adapt to change, and grow along with the company",
      img: Book,
    },
  ],
};

export const projectSection = [
  {
    title: "AI Technology Solutions",
    site: "botwavetech",
    img: botwavetech,
    siteLink: "https://botwavetech.com/",
    siteInfo: [
      { title: "Title:", description: "AI Technology Solutions" },
      {
        title: "Website:",
        description: "botwavetech.com",
        link: "http://botwavetech.com/",
      },
      { title: "Client Location:", description: "New zeland" },
    ],
    siteServices: ["Ai services", "IT services", "Chatbot", "Web services"],
    description: [
      {
        secTitle: "Project Introduction",
        secDescription: [
          {
            content:
              "This project is a website I developed for Bot Wave Technologies, an AI and IT solutions company specializing in AI services and IT solutions. During my tenure as a WordPress developer there, I crafted this dynamic website to showcase their offerings. ",
          },
          {
            content:
              "Technologies focuses on AI-driven solutions and comprehensive IT services. The platform serves as a digital gateway for users to explore their AI services, IT solutions, chatbots, and web services.",
          },
          {
            content:
              "It was a collaborative effort where I utilized my WordPress development skills to create an intuitive and informative online presence for the company.",
          },
        ],
      },
      {
        secTitle: "Challenges & Solutions",
        secDescription: [
          {
            content:
              "While developing Bot Wave Technologies' website, I tackled diverse hurdles in WordPress customization. ",
          },
          {
            content:
              "Overcoming plugin conflicts and optimizing site performance were key challenges. Innovative solutions involved custom coding and strategic plugin selection, ensuring a seamless and efficient digital platform.",
          },
          {
            content:
              "It was a collaborative effort where I utilized my WordPress development skills to create an intuitive and informative online presence for the company.",
          },
        ],
      },
      {
        secTitle: "Challenges & Solutions",
        secDescription: [
          {
            content:
              "Crafting the Bot Wave Technologies site honed my skills in WordPress customization, handling plugin conflicts, and optimizing website performance. .",
          },
          {
            content:
              "This project highlighted the importance of tailored coding solutions and strategic plugin usage for a streamlined and effective online presence",
          },
        ],
      },
    ],

    technologies: [
      { img: html, tech: "HTML" },
      { img: css, tech: "CSS" },
      { img: jsIcon, tech: "Javascript" },
      { img: wordpress, tech: "Wordpress" },
      { img: Elementor, tech: "Elementor" },
      { img: Elementor, tech: "Elementor Theme" },
      { img: Rankmath, tech: "Rankmath" },
      { img: Hostinger, tech: "Hostinger Host" },
      { img: searchConsole, tech: "Search Console" },
      { img: googleAnalytics, tech: "Google Analytics" },
    ],
  },
  {
    title: "Healthcare Solutions",
    site: "sukrahod",
    img: Sukrahod,
    siteLink: "https://sukrahod.com/",
    siteInfo: [
      { title: "Title:", description: "Healthcare Solutions" },
      {
        title: "Website:",
        description: "sukrahod.com",
        link: "https://sukrahod.com/",
      },
      { title: "Client Location:", description: "Nepal" },
    ],
    description: [
      {
        secTitle: "Project Introduction",
        secDescription: [
          {
            content:
              "Sukrahod.com: Designed a health lab's WordPress site in Nepal using Elementor. Faced JavaScript issues, resolved via extensive research. ",
          },
          {
            content:
              "Enhanced expertise in WordPress and Elementor, emphasizing troubleshooting skills. Delivered a functional platform, showcasing problem-solving abilities in web development. ",
          },
        ],
      },
      {
        secTitle: "Challenges & Solutions",
        secDescription: [
          {
            content:
              "Developing sukrahod.com, a health lab and diagnostic center's website in Nepal, introduced JavaScript-related hurdles in WordPress and Elementor.  ",
          },
          {
            content:
              "Through extensive research and problem-solving, I successfully resolved these issues, ensuring a smooth website functioning. ",
          },
          {
            content:
              " Addressing JavaScript complexities and troubleshooting in WordPress and Elementor were key challenges overcome for this project's success. ",
          },
        ],
      },
      {
        secTitle: "Lessons Learned",
        secDescription: [
          {
            content:
              "Building sukrahod.com enhanced my proficiency in WordPress and Elementor, emphasizing the importance of troubleshooting JavaScript intricacies.  ",
          },
          {
            content:
              "This project reinforced my problem-solving skills and showcased the significance of thorough research in overcoming coding challenges within website development, ultimately delivering a functional and client-satisfying platform.",
          },
        ],
      },
    ],
    technologies: [
      { img: html, tech: "HTML" },
      { img: css, tech: "CSS" },
      { img: jsIcon, tech: "Javascript" },
      { img: wordpress, tech: "Wordpress" },
      { img: Elementor, tech: "Elementor" },
      { img: Elementor, tech: "Elementor Hello" },
      { img: Rankmath, tech: "Rankmath" },
    ],
    siteServices: ["Healthcare Solutions", "OPD Services", " Medical Care"],
  },
  {
    title: "Movie Review Project",
    site: "FrameFlick",
    img: movieHome,
    siteLink: "https://frame-flick.vercel.app/",
    gitLing: "https://github.com/jayantatech/FrameFlick",
    siteInfo: [
      { title: "Title:", description: "Movie Review Project" },
      {
        title: "Website:",
        description: "FrameFlick",
        link: "https://frame-flick.vercel.app/",
      },
      // { title: "Client Location:", description: "New zeland" },
    ],
    siteServices: [
      "Explore Films",
      "Discover Ratings",
      "Movie Reviews",
      "Tv series Review",
    ],
    description: [
      {
        secTitle: "Project Introduction",
        secDescription: [
          {
            content:
              "The Movie Review App is an innovative platform crafted using the TMDB API, designed to provide users with comprehensive insights and reviews about their favorite movies.",
          },
          {
            content:
              "Powered by the TMDb film API, it provides an immersive experience with a vast movie database. Effortless navigation through concise film details, insightful ratings, and discovering hidden cinematic gems defines this project.",
          },
        ],
      },
      {
        secTitle: "Lessons Learned",
        secDescription: [
          {
            content:
              "Throughout the development process, numerous invaluable lessons were gleaned. Firstly, integrating third-party APIs, such as TMDB, demanded a solid understanding of asynchronous JavaScript and handling API responses effectively. ",
          },

          {
            content:
              "Secondly, employing React hooks significantly enhanced code organization and modularity, facilitating smoother development workflows. ",
          },
          {
            content:
              "Additionally, utilizing Tailwind CSS expedited UI development by enabling rapid prototyping and responsive design implementation. Moreover, managing state efficiently with Redux proved instrumental in maintaining application scalability and performance. ",
          },
        ],
      },
      {
        secTitle: "Challenges & Solutions",
        secDescription: [
          {
            content:
              "One significant challenge encountered was managing state and data flow within the React application. Implementing state management solutions like Redux aided in centralizing application state and simplifying complex data interactions. ",
          },
          {
            content:
              "To address these challenges, I implemented state management techniques such as Redux to streamline data flow and improve application performance. ",
          },
          {
            content:
              "Furthermore, I utilized techniques like pagination and lazy loading to efficiently manage and display large datasets fetched from the TMDB API. Additionally, I employed media queries and flexbox to create a responsive layout that adapts seamlessly to various screen sizes, ensuring an optimal user experience across devices. Overall, overcoming these challenges has not only enhanced the functionality and performance of the Movie Review App but also enriched my skills as a developer.",
          },
        ],
      },
    ],
    technologies: [
      { img: html, tech: "HTML" },
      { img: ScssLogo, tech: "Sass" },
      { img: css, tech: "CSS" },
      { img: jsIcon, tech: "Javascript" },
      { img: reactIcon, tech: "React" },
      { img: telwindCss, tech: "Tailwind" },
      { img: git, tech: "Git" },
      { img: github, tech: "Github" },
      { img: TMDB, tech: "TMDB Movie API" },
      { img: Vercel, tech: "Vercel Host" },
      { img: Redux, tech: "Redux Toolkit" },
    ],
  },
];

export const headersSection = {
  home: ["Home", "About", "Experience", "Projects", "Contact"],
  portfolio: ["Home", "Project", "Info", "Contact"],
};

export default home;
