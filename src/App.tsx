import React, { useState, useEffect, HtmlHTMLAttributes } from 'react'
import styles from "./page.module.css";



import { Header } from './components/headerBar';
import About from './pages/about';
import Experience from './pages/experience';
import Projects from './pages/projects';
import Education from './pages/education';

export default function Home() {
  const [listenerDisabled, setListenerDisabled] = useState(false)
  const [selected, setSelected] = useState("About");
  const [sections, setSections] = useState <NodeListOf<HTMLElement>>();
  const [slider, setSlider] = useState<HTMLElement | null>(null);
  const [headerBar, setHeaderBar] = useState<HTMLElement | null>(null);


  const Items = ["About", "Experience", "Projects", "Education"];

  function scrollToSection(sectionId: string) {
    setListenerDisabled(true);

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
    setListenerDisabled(false);
  }

  function onScroll(direction : string) {
    const currentPosition = window.scrollY;  
    if (sections && slider) {

      sections.forEach((section: HTMLElement) => {
        const sectionTop = section.offsetTop - 100;
        const sectionBottom = sectionTop + section.offsetHeight;
    
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
          

          //move section
          // sectionOnScroll(direction);
        }
      })
    }

  }

  // function sectionOnScroll(direction : string) {
  //   if (direction === "down") {
  //     sectionScrollDown();
  //   } else {
  //     sectionScrollUp();
  //   }
  // }

  // function sectionScrollUp() {
  //   const currPosition = window.scrollY; 

  //   if (sections) {
  //     for (const section of sections) {
  //       const sectionTop = section.offsetTop;
  //       const sectionBottom = sectionTop + section.offsetHeight - 10;
        
  //       if (currPosition < sectionBottom && currPosition > sectionTop) {
  //         const sectionId = section.getAttribute('id');
          
  //         if (sectionTop) {
  //           const scrollOptions : ScrollToOptions = {
  //             top: sectionTop,
  //             behavior: 'smooth'
  //           };
  //           window.scrollTo(scrollOptions);
  //         }

  //       }
  //     }
  //   }
  // }

  // function sectionScrollDown() {
  //   const currPosition = window.scrollY; 
  //   const bottom = currPosition + window.innerHeight - 50;

  //   if (sections) {
  //     for (const section of sections) {
  //       const sectionTop = section.offsetTop + 10;
  //       const sectionBottom = sectionTop + section.offsetHeight;
        
  //       if (bottom > sectionTop && bottom < sectionBottom) {
  //         if (sectionTop) {
  //           const scrollOptions : ScrollToOptions = {
  //             top: sectionTop,
  //             behavior: 'smooth'
  //           };
  //           window.scrollTo(scrollOptions);
  //         }
  //       }
  //     }
  //   }
  // }

  let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
  window.addEventListener('scroll', () => {

      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollTop > lastScrollTop) {
        onScroll("down");
      } else {
        onScroll("up");
      }
      lastScrollTop = currentScrollTop;
  });

  useEffect(() => {
    setSections(document.querySelectorAll('section'));
    setSlider(document.getElementById("slider"));
    setHeaderBar(document.getElementById("headerBar"))
  },[])


  useEffect(() => {
  },[selected])

  // useEffect(() => {
  //   sectionOnScroll("up")
  // },[currSection])

  


  return (
    <>
    <main className={styles.main}>
      <Header Items={Items} 
          onClick={(event) => scrollToSection(event)}
      />
      
      
      
        
      <div className={styles.center}>
        <section id="About" className={styles.section}>
          <About/>
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
    </>
    
  );
}
