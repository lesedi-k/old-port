import React, { useState, useEffect, HtmlHTMLAttributes } from 'react'
import styles from "./page.module.css";



import { Header } from './components/headerBar';
import About from './pages/about';
import Experience from './pages/experience';
import Projects from './pages/projects';
import Education from './pages/education';

export default function Home() {
  const [selected, setSelected] = useState("About");
  const [sections, setSections] = useState <NodeListOf<HTMLElement>>();
  const [slider, setSlider] = useState<HTMLElement | null>(null);
  const [headerBar, setHeaderBar] = useState<HTMLElement | null>(null);


  const Items = ["About", "Experience", "Projects", "Education"];

  function scrollToSection(sectionId: string) {
    const targetHeading = document.getElementById(sectionId+"_heading");
    const targetSection = document.getElementById(sectionId);

    if (slider && targetHeading && headerBar) {
      //adjust slider position
      const leftOffest = targetHeading.getBoundingClientRect().left - headerBar.getBoundingClientRect().left - 20;
      slider.style.left = leftOffest + "px";

      //adjust slider width
      slider.style.width = (targetHeading.getBoundingClientRect().width + 40) + "px";
    }
    
    if (targetSection) {
      const targetOffset = targetSection.offsetTop - 60;

      if (targetOffset) {
        const scrollOptions : ScrollToOptions  = {
          top: targetOffset,
          behavior: 'smooth'
        };
        window.scrollTo(scrollOptions);
      }
    }
    
    setSelected(sectionId)
  }

  function onScroll() {
    const currentPosition = window.scrollY; 
    
    //moves slider
    if (sections && slider) {
      sections.forEach((section: HTMLElement) => {
        const sectionTop = section.offsetTop - 100;
        const sectionBottom = sectionTop + section.offsetHeight;

        //section actinations
        if (currentPosition >= sectionTop - 1000 ) {
          const sectionId = section.getAttribute('id');
          if (sectionId !== "About") {
            section.classList.add(styles.slideUpHalf);
          }
          

        }
    
        //pick section
        if (currentPosition >= sectionTop && currentPosition <= sectionBottom) {
          const sectionId = section.getAttribute('id');
          
          //move slider
          const targetHeading = document.getElementById(sectionId+"_heading");
          if (targetHeading && headerBar) {
            const leftOffest = targetHeading.getBoundingClientRect().left - headerBar.getBoundingClientRect().left - 20;
            slider.style.transition = 'left 0.3s ease, width 0.3s ease';
            slider.style.left = leftOffest + "px";
            slider.style.width = (targetHeading.getBoundingClientRect().width + 40) + "px";
          }
        }
      })
    }
  }

  window.addEventListener('scroll', () => {
    onScroll();
  });

  useEffect(() => {
    setSections(document.querySelectorAll('section'));
    setSlider(document.getElementById("slider"));
    setHeaderBar(document.getElementById("headerBar"))
  },[])


  useEffect(() => {
  },[selected])

  return (
    <main className={styles.main}>
      <Header Items={Items} onClick={(event) => scrollToSection(event)}/>
              
      <div className={styles.center}>
        <section id="About" className={styles.section}>
          <About />
        </section>

        <section id="Experience" className={styles.section}>
          <Experience/>
        </section>

        <section id="Projects" className={styles.section}>
          <Projects/>
        </section>

        <section id="Education" className={styles.section}>
          <Education/>
        </section>
      </div>
    </main>    
  );
}
