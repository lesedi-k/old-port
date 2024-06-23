
import "../page.module.css"
import "../App.css";
import styles from "../page.module.css"
import { Bubble } from "../components/bubbles";
import githubIcon from "../assets/github.png"
import LinkedInIcon from "../assets/linkedin.webp"
import MailIcon from "../assets/mail.png"

export default function About() {
    const skills : string[] = [
        "Java", "Python", "JavaScript", "TypeScript", "HTML", "CSS", "C, C++ & C#", "Kotlin",
        "Next.js", "Node.js", "OCaml", "UPPAAL", "Figma", "Illustrator"
]

    return (
        <div 
            className={`${styles.blackTopRightBottomLeft}`}
            style={{display: "flex", 
                    width: "100%", height: "96vh", zIndex: 1
                }}
        >
            <div 
                className={`${styles.aboutBioDiv} ${styles.slideUp2}`}
                style={{
                        display: "flex", 
                        flexDirection: "column",
                        marginInline:"7%", 
                    }}
            >
                <code className={styles.typewriter} style={{marginTop: "30%"}}> Website Developed by</code>
                <h1 style={{ width: "100%"}}>Lesedi Kereteletswe</h1>
                <h2 style={{ color:"#9f9f9f", marginBottom: 10}}>Software Engineer</h2>

                <div 
                    style={{display: "flex", marginBottom: 20}}
                >
                    <a
                        href="https://www.linkedin.com/in/lesedi-kereteletswe/"
                        style={{ display: 'flex', alignItems: 'center' , fontSize: "14pt"}}
                    >
                        <img
                        src={LinkedInIcon}
                        width={"30vw"}
                        alt="LinkedIn Icon"
                        style={{marginRight:10}}
                        />
                        LinkedIn
                    </a>
                    <a 
                        href="https://github.com/lesedi-k"
                        style={{ display: 'inline-flex', alignItems: 'center' , fontSize: "14pt"}}
                    >
                        <img
                        src={githubIcon}
                        width={30}
                        alt="Github Icon"
                        style={{marginLeft:20, marginRight:10, filter:"invert(100%)"}}
                        />
                        Github
                    </a>

                    <a 
                        href="mailto:lesedi.kereteletswe@gmail.com"
                        style={{ display: 'inline-flex', alignItems: 'center' , fontSize: "14pt"}}
                    >
                        <img
                        src={MailIcon}
                        height={30}
                        alt="mail"
                        style={{marginLeft: 20, filter:"invert(100%)"}}
                        />
                        Email
                    </a>
                </div>
            </div>
            
            {/* Absolute Divs */}
            <div 
                className={`
                            ${styles.cardBlur} ${styles.cardGrad} 
                            ${styles.glassLines} ${styles.slideLeft} 
                            ${styles.storyCard} ${styles.aboutCard}`}
            >
                <h3>Skills & Tools</h3>
                <div 
                    className={styles.dotAppear}
                    style={{
                        display: "flex", 
                        flexDirection: 'row', 
                        flexWrap: "wrap", 
                        justifyContent:"flex-start",
                    }}
                >
                    {skills.map((s) => (
                        <Bubble key={s+"_id"} Skill={s} link={""}/>
                    ))}
                </div>
            </div>

            <div 
                className={`${styles.cardBlur} ${styles.cardGrad} ${styles.glassLines} ${styles.slideLeft} 
                    ${styles.aboutCard} ${styles.skillsCard} ${styles.hideOnSuperMobile}`
                }
            >
                <h3> Products Tell Stories </h3>
                <p> 
                I view a product as a story that evolves with each user interaction, 
                line of code, and decision, creating a dynamic narrative of innovation 
                and progress, shaped by the challenges it overcomes, the solutions it 
                provides, and the lives it impacts.
                </p>
            </div>
            
        </div>
    );
}