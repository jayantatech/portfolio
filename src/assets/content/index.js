import {
  jsIcon,
  reactIcon,
  telwindCss,
  git,
  Twitter,
  linkedin,
  github,
  css,
  bootstrap,
  html,
  wordpress,
  bgshape,
  bgshape2,
  bgshape3,
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
  NpmLogo,
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
              "Developing this app provided valuable insights into frontend development, API integration, and UI/UX design. .",
          },

          {
            content:
              "Working with React enhanced my understanding of component-based architecture and state management. ",
          },
          {
            content:
              "Utilizing Tailwind CSS facilitated rapid styling and responsiveness, optimizing development efficiency. Moreover, integrating and handling data from the TMDB API improved my skills in asynchronous programming and data manipulation.",
          },
        ],
      },
      {
        secTitle: "Challenges & Solutions",
        secDescription: [
          {
            content:
              "One significant challenge was managing asynchronous operations and handling API responses efficiently. Implementing asynchronous functions and using promises helped streamline data fetching and processing. ",
          },
          {
            content:
              "Additionally, styling and maintaining a consistent UI across various screen sizes posed a challenge, which was addressed by leveraging Tailwind CSS utility classNamees for responsive design. ",
          },
          {
            content:
              "Collaborating with npm libraries for additional functionalities, such as routing and state management, further enriched the app's capabilities while maintaining code modularity.",
          },
        ],
      },
    ],
    technologies: [
      { img: html, tech: "HTML" },
      { img: css, tech: "CSS" },
      { img: jsIcon, tech: "Javascript" },
      { img: reactIcon, tech: "React" },
      { img: telwindCss, tech: "Tailwind" },
      { img: git, tech: "Git" },
      { img: github, tech: "Github" },
      { img: TMDB, tech: "TMDB Movie API" },
      { img: Vercel, tech: "Vercel Host" },
      { img: Redux, tech: "Redux Toolkit" },
      { img: NpmLogo, tech: "Npm  libraries" },
    ],
  },
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
];

export const headersSection = {
  home: ["Home", "About", "Experience", "Projects", "Contact"],
  portfolio: ["Home", "Project", "Info", "Contact"],
};

export default home;
