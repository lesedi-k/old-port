
import "../page.module.css"
import "../App.css";
import styles from "../page.module.css"
import { Bubble } from "../components/bubbles";
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
        <div 
            className={styles.aboutGrad}
            style={{paddingTop:160, alignItems: "center", 
                    textAlign:"center", paddingInline:80, height: 760, zIndex: 1,
                    // borderBottomLeftRadius: "30px", borderBottomRightRadius: "30px",
                    }}
        >
            <div className={styles.slideUp2}>
                <h1 className={styles.h1}>Lesedi Kereteletswe</h1>
                <h2 style={{fontSize: "50pt", color:"grey", marginBottom:20}}>Software Engineer</h2>
                <div style={{marginBottom: 40}}>
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
                    style={{marginLeft:30, marginRight:10, filter:"invert(100%)"}}
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

                

                <div 
                    className={styles.dotAppear}
                    style={{
                        display: "flex", 
                        flexDirection: 'row', 
                        flexWrap: "wrap", 
                        justifyContent:"center",
                        marginTop:20,
                        marginInline: 70
                    }}
                >
                    {skills.map((s) => (
                        <Bubble key={s+"_id"} Skill={s} link={""}/>
                    ))}
                </div>
                
            </div>
            
            
        </div>
    );
}