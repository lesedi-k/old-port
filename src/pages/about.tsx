
import styles from "../page.module.css"
import { Bubble } from "../components/bubbles";
import headshot from "../assets/headshot.png"
import githubIcon from "../assets/github.png"
import LinkedInIcon from "../assets/linkedin.webp"
import MailIcon from "../assets/mail.png"


export default function About() {
    const skills : string[] = [
        "Frontend Development", 
        "Backend Development",
        "Full-stack Development", 
        "Distributed Web Systems Design",
        // "Cross-platform application development", 
        "Figma",
        "UI/UX Design",
        "Java", "Python", "JavaScript", "TypeScript", "HTML", "CSS", "C, C++ & C#", "Kotlin",
        "Next.js", "Node.js", "OCaml", "UPPAAL", 
]

    return (
        <div style={{marginTop:"16vh", alignItems: "center", textAlign:"center", paddingInline:"10vw", height: "70vh"}}>
            <h1 className={styles.h1} style={{marginBottom:"2vh"}}>Software Engineer</h1>
            {/* <div style={{
                    overflow:"auto", textWrap:"wrap", marginInline: "7vw", marginTop:"5vh",
                    display: "flex", justifyItems: "center"
                }}
            >
                <Image
                    src={headshot}
                    width={200}
                    alt="Picture of the author"
                />               
            </div> */}

            <h2 style={{fontSize: "50pt", color:"grey"}}>Lesedi Kereteletswe</h2>
            <div style={{marginBottom: "4vh"}}>
                <a
                    href="https://www.linkedin.com/in/lesedi-kereteletswe/"
                    style={{ display: 'inline-flex', alignItems: 'center' , fontSize: "16pt"}}
                >
                    <img
                    src={LinkedInIcon}
                    width={40}
                    alt="LinkedIn Icon"
                    style={{marginRight:10}}
                   />
                   LinkedIn
                </a>
                <a 
                    href="https://github.com/lesedi-k"
                    style={{ display: 'inline-flex', alignItems: 'center' , fontSize: "16pt"}}
                >
                   <img
                   src={githubIcon}
                   width={40}
                   alt="Github Icon"
                   style={{marginLeft: 30, marginRight:10, filter:"invert(100%)"}}
                   />
                   Github
                </a>

                <a 
                    href="mailto:lesedi.kereteletswe@gmail.com"
                    style={{ display: 'inline-flex', alignItems: 'center' , fontSize: "16pt"}}
                >
                   <img
                   src={MailIcon}
                   height={40}
                   alt="mail"
                   style={{marginLeft: 30, filter:"invert(100%)"}}
                   />
                    Email
                </a>
            </div>

              
            
            <div style={{
                display: "flex", 
                flexDirection: 'row', 
                flexWrap: "wrap", 
                justifyContent:"center",
                marginTop:"2vh",
                marginInline: "7vw"
            }}>
                {skills.map((s) => (
                    <Bubble key={s+"_id"} Skill={s} link={""}/>
                ))}
            </div>
            
        </div>
    );
}