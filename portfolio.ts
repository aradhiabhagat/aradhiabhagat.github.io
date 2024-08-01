import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  ProjectType,
  SkillsSectionType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Aradhia Bhagat",
  title: "Aradhia Bhagat",
  description:
    "I'm a rising junior at UW Madison pursuing a Bachelors of Science in Computer and Data Science, with a certificate in Digital Studies. I have 3+ years of project experience in various areas, ranging from full-stack development to machine learning development. I am undergraduate researcher at Informatics Skunkworks, working on LLM based projects.",
  styles: {
    fontFamily: "'Merriweather', serif",
  },
};

export const openSource = {
  githubUserName: "aradhiabhagat",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "mailto:aradhia.bhagat@gmail.com",
  linkedin: "https://www.linkedin.com/in/aradhia-bhagat-2b4229215/",
  github: "https://github.com/aradhiabhagat",
};

export const educationDeets: EducationType[] = [
  {
    schoolName: "University of Wisconsin-Madison",
    subHeader: "Bachelor of Science in Computer Science and Data Science",
    date: "May 2022 - May 2026",
    degree: "Bachelors of Science",
    coursework: [
      "Advanced Algorithms",
      "Data Structure",
      "Machine Organisation Using C",
      "Artificial Intelligence",
      "Java/Python Programming",
      "OOP",
      "Data Science Modeling",
      "Discrete Mathematics",
      "Linear Algebra",
    ],
    activities: [
      "ISA (Indian Student Association) Board Member",
      "WACM",
      "Girls Who Code - Madison",
    ],
  },
  {
    schoolName: "DPS International",
    subHeader: "High School (IB) Diploma",
    date: "2022",
  },
];

export const skillsSection: SkillsSectionType = {
  title: "My SkillSet",
  subTitle: "",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json",
      skills: [
        emoji(
          "⚡ Developing dynamic and interactive web applications using React.js, Vue.js, and Next.js"
        ),
        emoji(
          "⚡ Creating and maintaining robust backend systems with Django and Django REST Framework"
        ),
        emoji(
          "⚡ Deploying and managing scalable cloud infrastructure with AWS and Docker"
        ),
      ],
      softwareSkills: [
        {
          skillName: "Python",
          iconifyTag: "devicon:python-wordmark",
        },
        {
          skillName: "Java",
          iconifyTag: "vscode-icons:file-type-java",
        },
        {
          skillName: "HTML",
          iconifyTag: "vscode-icons:file-type-html",
        },
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "C/C++",
          iconifyTag: "vscode-icons:file-type-cpp3",
        },
        {
          skillName: "Linux",
          iconifyTag: "logos:linux-tux",
        },
        {
          skillName: "Reactjs",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "NextJS",
          iconifyTag: "vscode-icons:file-type-light-next",
        },
        {
          skillName: "VueJS",
          iconifyTag: "devicon:vuejs-wordmark",
        },
        {
          skillName: "Django",
          iconifyTag: "logos:django-icon",
        },
        {
          skillName: "MYSQL",
          iconifyTag: "logos:mysql",
        },
        {
          skillName: "Postman",
          iconifyTag: "devicon:postman",
        },
        {
          skillName: "Git",
          iconifyTag: "skill-icons:git",
        },
        {
          skillName: "AWS",
          iconifyTag: "logos:aws",
        },
        {
          skillName: "Github",
          iconifyTag: "akar-icons:github-fill",
        },
        {
          skillName: "Docker",
          iconifyTag: "logos:docker-icon",
        },
      ],
    },
  ],
};

export const experience: ExperienceType[] = [
  {
    company: "TRAD DoIT Academic Technology",
    date: "May 2024 - Present",
    description: "I crafted backends for diverse web apps, APIs, and WebSockets in e-commerce, podcasts, and property management. Managed server upkeep, deployments on Linux, Heroku, and AWS S3. Implemented PyTest for automated unit and integration testing, slashing 4 hours of manual testing each sprint, fortifying a dependable and flawless code foundation.",
  },
  {
    company: "Informatics Skunkworks",
    date: "August 2023 - Present",
    description: "Crafted robust mobile application backends employing Django, Python, and REST APIs. Leveraged Django REST Framework, PostgreSQL, AWS, Firebase, Stripe, and WebSocket for efficient development. Collaborated across teams to surpass client expectations. Designed intuitive UIs, empowering clients to effortlessly manage their applications with a visually captivating interface.",
  },
  {
    company: "Siemens Energy",
    date: "Aug 2022 - Jun 2023",
    description: "Crafting diverse web applications, I've elevated functionality and user engagement. Spearheaded Visual Portfolio, leveraging AI for captivating presentations from parsed text. Proficiently set up and optimized applications on Linux servers, guaranteeing smooth scalability and top-notch performance for seamless user experiences.",
  },
];

export const projects: ProjectType[] = [
  {
    name: "Pure Hearts Website",
    desc: "Led the development of a local NGO website using ReactJs and Bootstrap, implementing features such as dynamic content rendering, a search bar, and a donate page. Additionally, conducted Search Engine Optimization (SEO) for the site by hosting it on Nestify and utilizing Google Analytics, resulting in a 70% improvement in site traffic.",
    github: "https://github.com/aradhiabhagat/Pure-Hearts-Club-Site",
  },
  {
    name: "KnowYourMajor",
    desc: "Developed a web application to inform students about potential major choices based on their high-school classes, using NodeJs and ReactJs to graph statistics about various majors. Collaborated on developing a major recommendation ML algorithm utilizing the ReLU activation function with optimizers like Adam to enhance efficiency. Additionally, used Flask to establish the application server, ensuring a seamless and responsive user experience.",
    github: "https://github.com/aradhiabhagat/know-your-major",
  },
  {
    name: "StockSimplified",
    desc: "I developed a chatbot for students to track expenses, set budgets, and receive financial advice using Python, Flask, and Dialogflow. By implementing a machine learning model with scikit-learn to analyze spending patterns, I achieved an 85% accuracy in predicting expense categories and budget adherence.",
    github: "https://github.com/aradhiabhagat/know-your-major",
  },
];

export const seoData: SEODataType = {
  title: "Aradhia Bhagat",
  description: greetings.description,
  author: "Aradhia Bhagat",
  image: "https://avatars.githubusercontent.com/u/59178380?v=4",
  url: "https://developer-portfolio-1hanzla100.vercel.app",
  keywords: [
    "Aradhia",
    "Aradhia Bhagat",
    "@aradhiabhagat",
    "aradhiabhagat",
    "Portfolio",
    "Aradhia Portfolio",
    "Aradhia Bhagat Portfolio",
  ],
};
