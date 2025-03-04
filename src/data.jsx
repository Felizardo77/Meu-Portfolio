import { FaPaintBrush } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { FaCodeCompare } from "react-icons/fa6";
import { GiIdea } from "react-icons/gi";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import {
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  profile3,
  profile4,
  profile5,
  profile6,
  figma,
  photoshop,
  ilustrador,
  css,
  html,
  javascript,
  tailwind,
  bootstrap,
  react,
  reactnative,
  nodejs, // Certifique-se de que nodejs está sendo importado
  java, // Certifique-se de que java está sendo importado
  python, // Certifique-se de que python está sendo importado
  //opencv, // Certifique-se de que opencv está sendo importado
  mysql, // Certifique-se de que mysql está sendo importado
  emailicon,
  messengericon,
  whatsappicon,
} from "./assets";

export const menu = [
  { name: "Sobre mim", nameClass: "about" },
  { name: "Serviços", nameClass: "services" },
  { name: "Skills", nameClass: "skills" },
  { name: "Projectos", nameClass: "projects" },
];

export const services = [
  {
    title: "Design UI/UX",
    icon: <FaPaintBrush />,
    description: `Criando designs visualmente impressionantes e centrados no usuário que garantem experiências de usuário perfeitas. 
                  Desde wireframes até protótipos de alta fidelidade, foco em criar interfaces intuitivas que 
                  combinam criatividade e funcionalidade, aumentando o engajamento e a usabilidade.`,
  },
  {
    title: "Desenvolvimento Web",
    icon: <FaCodeCompare />,
    color: "blueviolet",
    colorRGB: "138, 43, 226",
    description: `Construindo sites responsivos, dinâmicos e de alto desempenho, adaptados às suas necessidades. 
    Usando tecnologias modernas como React, Node.js e mais, garanto que seu site seja otimizado 
    para velocidade, escalabilidade e acessibilidade, oferecendo uma presença online robusta.`,
  },
  {
    title: "Desenvolvimento de Aplicativos Desktop",
    icon: <GiIdea />,
    color: "var(--color-success)",
    colorRGB: "var(--color-success-rgb)",
    description: `Desenvolvendo aplicativos de desktop robustos e eficientes que atendem às suas necessidades empresariais. 
                  Desde a concepção até a implementação, foco em criar soluções de software que sejam escaláveis, 
                  seguras e fáceis de usar, garantindo uma experiência de usuário superior.`,
  },
];

export const projects = [
  {
    title: "AI Powered School",
    image: project1,
    category: "UI/UX",
    description: `Transforming education with AI, our School UI Design project revolutionizes the 
                     learning experience. Seamlessly integrating intelligent features, personalized interfaces, 
                     and intuitive navigation, our design empowers educators and students alike. Experience 
                     innovation at its finest as we pave the way for a smarter, more efficient educational 
                     journey.`,
    demoLink: "https://google.com/",
    stacks: [
      {
        name: "XD",
        logo: figma,
      },
    ],
  },
  {
    title: "E-Commerce Application",
    image: project2,
    category: "Web",
    description: `Enhance your online shopping experience with our E-Commerce Application 
      UI design project. Seamlessly blending aesthetics with functionality, our intuitive 
      interface offers easy navigation, personalized recommendations, and secure 
      transactions. Elevate your digital storefront and captivate customers with a visually 
      stunning design tailored to your brand`,
    demoLink: "https://google.com/",
    stacks: [
      {
        name: "ReactJs",
        logo: react,
      },
      {
        name: "XD",
        logo: figma,
      },
      {
        name: "CSS",
        logo: css,
      },
      {
        name: "JavaScript",
        logo: javascript,
      },
    ],
  },
  {
    title: "Robotic Engineering Web Application",
    image: project3,
    category: "Web",
    description: `Unlock the future of robotics with our Robotic Engineering Web Application
      project. Seamlessly integrating cutting-edge technology, data analytics, 
      and collaborative tools, our platform empowers engineers to design, simulate, 
      and optimize robotic systems. Experience innovation at its peak as we redefine the 
      boundaries of robotic engineering.`,
    demoLink: "https://google.com/",
    stacks: [
      {
        name: "ReactJs",
        logo: react,
      },
      {
        name: "Figma",
        logo: figma,
      },
      {
        name: "Tailwind",
        logo: tailwind,
      },
    ],
  },
  {
    title: "Project Management application",
    image: project4,
    category: "Apps",
    description: `Simplify project coordination with our intuitive Project Management application. Track tasks, collaborate in real-time, and streamline workflows effortlessly. With customizable features and robust reporting, stay organized and efficient.
                     Elevate your project management experience and achieve success with ease.`,
    demoLink: "https://google.com/",
    stacks: [
      {
        name: "React Native",
        logo: reactnative,
      },
      {
        name: "XD",
        logo: figma,
      },
      {
        name: "CSS",
        logo: css,
      },
    ],
  },
  {
    title: "Mobile bank - App Design",
    image: project5,
    category: "UI/UX",
    description: `Experience banking at your fingertips with our sleek Mobile Bank app design. Seamlessly manage your finances on-the-go with intuitive navigation, secure transactions, and personalized insights. Enjoy a modern interface that prioritizes convenience and accessibility, revolutionizing your banking experience.`,
    demoLink: "https://google.com/",
    stacks: [
      {
        name: "Figma",
        logo: figma,
      },
    ],
  },
  {
    title: "Quiz App Development",
    image: project6,
    category: "Apps",
    description: `Elevate engagement and knowledge retention with our Quiz App 
                    Development project. Seamlessly crafted for interactive learning 
                    experiences, our app offers customizable quizzes, real-time feedback, 
                    and captivating visuals. Empower users to test their knowledge anytime,
                     anywhere, fostering a dynamic learning environment tailored to their 
                     needs.`,
    demoLink: "https://google.com/",
    stacks: [
      {
        name: "React Native",
        logo: reactnative,
      },
      {
        name: "Figma",
        logo: figma,
      },
      {
        name: "XD",
        logo: figma,
      },
      {
        name: "Bootstrap",
        logo: bootstrap,
      },
    ],
  },
];

export const skills = [
  {
    title: "UI/UX",
    data: [
      {
        skill: "Figma",
        level: "Experienced",
        logo: figma,
      },
      {
        skill: "Photoshop",
        level: "Intermediate",
        logo: photoshop,
      },
      {
        skill: "Illustrator",
        level: "Intermediate",
        logo: ilustrador,
      },
    ],
  },
  {
    title: "Frontend Development",
    data: [
      {
        skill: "HTML",
        level: "Experienced",
        logo: html,
      },
      {
        skill: "CSS",
        level: "Experienced",
        logo: css,
      },
      {
        skill: "JavaScript",
        level: "Experienced",
        logo: javascript,
      },
      {
        skill: "Tailwind",
        level: "Intermediate",
        logo: tailwind,
      },
      {
        skill: "Bootstrap",
        level: "Experienced",
        logo: bootstrap,
      },
      {
        skill: "React",
        level: "Experienced",
        logo: react,
      },
    ],
  },
  {
    title: "Backend Development",
    data: [
      {
        skill: "Node.js",
        level: "Experienced",
        logo: nodejs,
      },
      {
        skill: "Java",
        level: "Intermediate",
        logo: java,
      },
      {
        skill: "Python",
        level: "Experienced",
        logo: python,
      },
      {
        skill: "MySQL",
        level: "Experienced",
        logo: mysql,
      },
    ],
  },
];
export const contactInfo = [
  {
    name: "Email",
    value: "mradinuba@gmail.com",
    link: "mailto:mradinuba@gmail.com",
    icon: emailicon,
    btnIcon: <MdOutlineEmail />,
    color: "rgb(56,115,205)",
  },
  {
    name: "Messenger",
    value: "Emmanuel Eze",
    link: "http://m.me/profile?id=profile-i",
    icon: messengericon,
    btnIcon: <RiMessengerLine />,
    color: "rgb(139,74,251)",
  },
  {
    name: "WhatsApp",
    value: "+2348149121918",
    link: "https://api.whatsapp.com/send?phone=+2348149121918",
    icon: whatsappicon,
    btnIcon: <BsWhatsapp />,
    color: "rgb(38,234,112)",
  },
];
export const socialHandles = [
  {
    name: "Fiverr",
    icon: <SiFiverr />,
    link: "https://www.fiverr.com/felizardopaulo7",
  },
  {
    name: "Github",
    icon: <AiFillGithub />,
    link: "https://github.com/Felizardo77",
  },
  {
    name: "LinkedIn",
    icon: <AiFillLinkedin />,
    link: "https://linkedin.com/in/felizardo77",
  },
  /*{
    name: "Face",
    icon: <AiFillYoutube />,
    link: "https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1",
  },*/
];

export const testimonials = [
  {
    avatar: profile3,
    name: "Samuel Eze",
    review: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`,
  },
  {
    avatar: profile4,
    name: "Emmanuel Joseph",
    review: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`,
  },
  {
    avatar: profile5,
    name: "Gloria Chiwendu",
    review: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`,
  },
  {
    avatar: profile6,
    name: "Precious Stone",
    review: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
           veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`,
  },
];
