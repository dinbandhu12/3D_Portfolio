import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Java Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Java Developer",
    company_name: "Internshala",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Feb 2020 - April 2020",
    points: [
      "Java Classes and Objects with Interfaces and all Object-Oriented Programming methods using and design a game with back-end developer",
      "Working as a backend developer to maintain the functionality of the game.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "IT Support Specialist",
    company_name: "Google - Coursera",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "July 2021 - Dec 2021",
    points: [
      "Networking, Programming, Problem solving, Critical Thinking, Team Leadership, Team Management, and other IT tools and fundamentals",
      "Participating in the events managing the task leading the team and getting feedback to other team members and developers.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "JPMorgan Chase & Co.",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Feb 2023",
    points: [
      "Back-end Development, Python Programming, GitHub",
      "Manage with a stock price data feed, Framework, and Tools",
      "Display data visually for traders, and Contribution to open-source projects.",
      "Live data managing and maintaining the data of the company and the clients.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full Stack Java Developer",
    company_name: "Private Comp",
    icon: shopify,
    iconBg: "#383E56",
    date: "Apr 2023 - Present",
    points: [
      "Developing and maintaining web applications using Core Java and other backend technologies.",
      "Using Java, Spring Framework, Hibernate, and other related frameworks to create server-side logic, handle requests, and communicate with databases. ",
      "Using various development tools, such as IntelliJ IDEA, Git, and other version control systems to write, test, debug, and deploy my code. I also use automated testing tools, such as JUnit, or Selenium, to ensure the quality of my code.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but DBS proved me wrong.",
    name: "Name",
    designation: "CFO",
    company: "Acme Co",
    image:
      "https://thumbs.dreamstime.com/b/concept-career-prospective-female-employee-photo-blank-space-closeup-face-woman-employee-office-112460294.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like DBS does.",
    name: "Name",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After DBS optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Name",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Expanse Manager App",
    description:
      "It is a Java application to run on Smartphones and PC devices. The application can store the expense of users and features for sending a notification and reminder for users to their expenses and payments etc. It store the data in google cloud. User verifications.",
    tags: [
      {
        name: "corejava",
        color: "blue-text-gradient",
      },
      {
        name: "j2ee",
        color: "green-text-gradient",
      },
      {
        name: "oop",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/dinbandhu12?tab=repositories",
  },
  {
    name: "Fake News Detection",
    description:
      "It Detecting Fake News by using Machine Learning Algorithms, Support Vectors, Logistic Regression, and Supervised Learning. It detects fake and true news by using these algorithms. It shows the accuracy of news with new UI Design. New (UI for easily detecting and better understanding).",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "machinelearning",
        color: "green-text-gradient",
      },
      {
        name: "webdesign",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/dinbandhu12/fake_news_detection",
  },
  {
    name: "SEHD",
    description:
      "It This is the Android Application for detecting the health of eyes by scanning the valid uploaded eyes image. Using Machine Learning, and other technologies. It shows the accuracy of eyes health by percentage (if it is a major problem, it recommends visiting a doctor).",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "androidstudio",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/dinbandhu12/SEHD_Application",
  },
];

export { services, technologies, experiences, testimonials, projects };
