import './App.css'
import HeaderSection from './body/HeaderSection'
import HeroSection from './body/HeroSection'
import AboutSection from './body/AboutSection'
import ProjectsSection from './body/ProjectsSection'
import ContactSection from './body/ContactSection'
import FooterSection from './body/FooterSection'

import project1 from './assets/project1.png'
import project2 from './assets/project2.png'
import project3 from './assets/project3.png'
import project4 from './assets/project4.png'

import emailPic from './assets/ic_round-email.png'
import linkedInPic from './assets/mingcute_linkedin-fill.png'
import githubPic from './assets/mdi_github.png'
import instagramPic from './assets/mingcute_instagram-fill.png'

function App() {
  const handleStartClick = () => {
    const section = document.getElementById('about');
    section?.scrollIntoView({behavior: 'smooth'});
  }
  const navItems = [
    {label: 'About', href: '#about'},
    {label: 'Projects', href: '#projects'},
    {label: 'Contact', href: '#contact'},
  ]

  const projectData = [
    {
      title: "Movies Web",
      desc: "The very first webpage that i tried to build. It took 3 days to complete it because i haven't learn HTML and CSS.",
      image: project1,
      figma: "https://www.figma.com/design/1pnmOJeVSq3OLXLuUU4D4p/Movie-Web?node-id=3-51&t=v1eEZrHqbjK3PySU-1",
      code: "https://github.com/Diananang/Dibimbing/tree/main/Web%20Movie"
    },
    {
      title: "Dibimbing Article Blog",
      desc: "This webpage was my assignment from Dibimbing bootcamp that i had to slice the design from figma to HTML and CSS.",
      image: project2,
      figma: "https://www.figma.com/design/n5GS0kSmiwyiCHnYHRA2A2/Bootcamp-Front-End?node-id=5-12343&t=slzRab5kL4Jm8tTV-1",
      code: "https://github.com/Diananang/Day18"
    },
    {
      title: "Cafe Web",
      desc: "This project was my first mini project from Dibimbing bootcamp that i had to make cafe or restaurant landing page using HTML and Tailwind CSS with responsive design.",
      image: project3,
      figma: "https://www.figma.com/design/khkpXYkZivXnS8qdksykMg/Web-Coffee-Shop?node-id=4-24&t=CMY36yIhXFKNNOFR-1",
      code: "https://github.com/Diananang/Dibimbing/tree/main/Mini%20Project"
    },
    {
      title: "This Portfolio",
      desc: "This portfolio can be one of my projects too, right?",
      image: project4,
      figma: "https://www.figma.com/design/z1g208AEqvRuYuX3L465TF/Portofolio?node-id=1-2&t=sFDEd7r3BlTiYlq5-1",
      code: "https://github.com/Diananang/Dibimbing/tree/main/Assignments/Day23"
    },
  ]

  const contactData = [
    {
      image: emailPic,
      type: "Email",
      link: "https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRlRQckQcNDLcPcKFpXxPJHHrnZCLZDgBGnDJxxrczmCFdBzfHvBDwSHnLLjdbpQrrCkzZv",
    },
    {
      image: linkedInPic,
      type: "LinkedIn",
      link: "https://linkedin.com/in/try-diana-yunita",
    },
    {
      image: githubPic,
      type: "Github",
      link: "https://github.com/Diananang",
    },
    {
      image: instagramPic,
      type: "Instagram",
      link: "https://www.instagram.com/dhiana_yunita/",
    },
  ]

  return (
    <div>
      <HeaderSection name= "Diana" navLinks={navItems}/>
      <main>
        <HeroSection 
        title= "Hi, I'm Try Diana Yunita"
        field= "Front End Developer"
        desc= "I build responsive and user-friendly websites and this is my portfolio."
        onStart={handleStartClick}
        />
        <AboutSection 
        subTitle="About Me"
        aboutText="A graduate in Computer Engineering with strong experience in system analysis, technical design, information system development, and programming using C++, HTML, CSS, and Kotlin. Experienced as a laboratory assistant in embedded systems and robotics. Committed to deepening knowledge in Database and Front-End Web Development to gain further insights in the field of information technology."
        />
        <ProjectsSection projects={projectData}/>
        <ContactSection contacts={contactData}/>
      </main>
      <FooterSection />
    </div>
  )
}

export default App
