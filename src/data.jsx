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
    title: "Dashboard para Microcrédito",
    image: project1,
    category: "UI/UX",
    description: `Desenvolvimento de um dashboard intuitivo e eficiente para uma empresa de microcrédito. 
                  O design foi criado para facilitar a visualização de dados financeiros e a gestão de empréstimos, 
                  proporcionando uma experiência de usuário otimizada.`,
    demoLink: "#",
    stacks: [
      {
        name: "Figma",
        logo: figma,
      },
    ],
  },
  {
    title: "Aplicativo de Requisição de Músicas - Play4Me",
    image: project2,
    category: "Web",
    description: `Desenvolvimento de um aplicativo de requisição de músicas chamado Play4Me. 
                  O aplicativo permite que os usuários solicitem músicas em tempo real durante eventos. 
                  Utilizando tecnologias modernas para garantir uma experiência de usuário fluida e responsiva.`,
    demoLink: "https://play4me.vercel.app/home",
    stacks: [
      {
        name: "ReactJs",
        logo: react,
      },
      {
        name: "Node.js",
        logo: nodejs,
      },
      {
        name: "MySQL",
        logo: mysql,
      },
    ],
  },
  {
    title: "Desenvolvimento do Site Oficial da IkarusTech",
    image: project3,
    category: "Web",
    description: `Desenvolvimento do site oficial da IkarusTech. O projeto foi desenhado inicialmente no Figma 
                  e implementado utilizando HTML, CSS e JavaScript para criar uma presença online profissional 
                  e atraente.`,
    demoLink: "https://google.com/",
    stacks: [
      {
        name: "Figma",
        logo: figma,
      },
      {
        name: "HTML",
        logo: html,
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
    title: "E-commerce",
    image: project4,
    category: "UI/UX",
    description: `Desenvolvimento de um design de E-commerce no Figma. O projeto foi focado em criar uma interface 
                  intuitiva e atraente para melhorar a experiência de compra online dos usuários.`,
    demoLink: "https://google.com/",
    stacks: [
      {
        name: "Figma",
        logo: figma,
      },
    ],
  },
  // {
  //   title: "Mobile bank - App Design",
  //   image: project5,
  //   category: "UI/UX",
  //   description: `Experience banking at your fingertips with our sleek Mobile Bank app design. Seamlessly manage your finances on-the-go with intuitive navigation, secure transactions, and personalized insights. Enjoy a modern interface that prioritizes convenience and accessibility, revolutionizing your banking experience.`,
  //   demoLink: "https://google.com/",
  //   stacks: [
  //     {
  //       name: "Figma",
  //       logo: figma,
  //     },
  //   ],
  // },
  // {
  //   title: "Quiz App Development",
  //   image: project6,
  //   category: "Apps",
  //   description: `Elevate engagement and knowledge retention with our Quiz App 
  //                   Development project. Seamlessly crafted for interactive learning 
  //                   experiences, our app offers customizable quizzes, real-time feedback, 
  //                   and captivating visuals. Empower users to test their knowledge anytime,
  //                    anywhere, fostering a dynamic learning environment tailored to their 
  //                    needs.`,
  //   demoLink: "https://google.com/",
  //   stacks: [
  //     {
  //       name: "React Native",
  //       logo: reactnative,
  //     },
  //     {
  //       name: "Figma",
  //       logo: figma,
  //     },
  //     {
  //       name: "XD",
  //       logo: figma,
  //     },
  //     {
  //       name: "Bootstrap",
  //       logo: bootstrap,
  //     },
  //   ],
  // },
];

export const skills = [
  {
    title: "UI/UX",
    data: [
      {
        skill: "Figma",
        level: "Experiente",
        logo: figma,
      },
      {
        skill: "Photoshop",
        level: "Experiente",
        logo: photoshop,
      },
      {
        skill: "Illustrator",
        level: "Intermediário",
        logo: ilustrador,
      },
    ],
  },
  {
    title: "Desenvolvimento Frontend",
    data: [
      {
        skill: "HTML",
        level: "Experiente",
        logo: html,
      },
      {
        skill: "CSS",
        level: "Experiente",
        logo: css,
      },
      {
        skill: "JavaScript",
        level: "Experiente",
        logo: javascript,
      },
      {
        skill: "Tailwind",
        level: "Intermediário",
        logo: tailwind,
      },
      {
        skill: "Bootstrap",
        level: "Intermediário",
        logo: bootstrap,
      },
      {
        skill: "React",
        level: "Experiente",
        logo: react,
      },
    ],
  },
  {
    title: "Desenvolvimento Backend",
    data: [
      {
        skill: "Node.js",
        level: "Intermediário",
        logo: nodejs,
      },
      {
        skill: "Java",
        level: "Experiente",
        logo: java,
      },
      {
        skill: "Python",
        level: "Experiente",
        logo: python,
      },
      {
        skill: "MySQL",
        level: "Experiente",
        logo: mysql,
      },
    ],
  },
];

export const contactInfo = [
  {
    name: "Email",
    value: "felizardopaulo40@gmail.com",
    link: "mailto:felizardopaulo40@gmail.com",
    icon: emailicon,
    btnIcon: <MdOutlineEmail />,
    color: "rgb(56,115,205)",
  },
  {
    name: "WhatsApp",
    value: "+258878928346",
    link: "https://api.whatsapp.com/send?phone=+258878928346",
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
