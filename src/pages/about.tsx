
import "../page.module.css"
import "../App.css";
import styles from "../page.module.css"
import { Bubble } from "../components/bubbles";
import githubIcon from "../assets/github.png"
import LinkedInIcon from "../assets/linkedin.webp"
import MailIcon from "../assets/mail.png"
import me from "../assets/city3.jpeg"



export default function About() {

    const skills : string[] = [
        "Java", "Python", "JavaScript", "TypeScript", "HTML", "CSS", "C, C++ & C#", "Kotlin",
        "Next.js", "Node.js", "OCaml", "UPPAAL", "Figma", "Illustrator"
]

    return (
        <div 
            className={`${styles.blackTopRightBottomLeft}`}
            style={{display: "flex", 
                    width: "100%", height: "95vh", zIndex: 1,
                }}
        >
            <div className={styles.slideUp2}
                style={{display: "flex", flexDirection: "row"}}
            >
                <div style={{display: "flex", flex: 3.5, flexDirection: "column",
                    paddingTop:150, 
                    marginInline:100, 
                }}>

                    <h1 style={{fontSize: "50pt",  marginTop: 60}}>Lesedi Kereteletswe</h1>
                    <h2 style={{fontSize: "30pt", color:"#9f9f9f", marginBottom: 10}}>Software Engineer</h2>
                    <p style={{marginBottom:20, textWrap: "wrap", width: "95%", fontSize: "120%"}}>
                        In my personal journey with technology, I have been driven by a strong ambition to contribute meaningfully 
                        to technology that brings us clser to living in a "smart" world. A world where tech is more than a trend, 
                        it's the vehicle for a easier systems of living.
                        This journey has led me to delve into the intersection of technology and entrepreneurship,
                        unveiling the profound potential of technology to profoundly enhance the quality of life for all.
                    </p>

                    <div style={{marginBottom: 40}}>
                        <a
                            href="https://www.linkedin.com/in/lesedi-kereteletswe/"
                            style={{ display: 'inline-flex', alignItems: 'center' , fontSize: "14pt"}}
                        >
                            <img
                            src={LinkedInIcon}
                            width={30}
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
                
                {/* Photo Div*/}
                <div style={{
                        display: "flex", flex: 3,
                        backgroundColor: "black", 
                        height: "100%", 
                    }}
                >
                    <img 
                        src={me}
                        style={{
                            height: "100%",
                            width: "100%",
                            objectFit: "cover",
                            filter: "brightness(80%) contrast(100%)" 
                          }}
                    />
                </div>
            </div>
            
            {/* Absolute Divs */}
            <div 
                className={`${styles.cardBlur} ${styles.cardGrad} ${styles.slideLeft}`}
                style={{
                    position: "absolute", 
                    right: "60%", 
                    top: 620,
                    width: "47%",
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "left",
                    borderColor: "white",
                    borderStyle: "solid",
                    borderWidth: "0.5px 0 0 0.5px",
                    borderRadius:"20px", 
                    paddingInline: "30px",
                    paddingBlock: "20px",
                    zIndex: 2,
                    boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)",
                }}
            >
                <h1> Skills & Tools</h1>
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
                className={`${styles.cardBlur} ${styles.cardGrad} ${styles.slideLeft}`}
                style={{
                    position: "absolute", 
                    right: "40%", 
                    
                    top: 120,
                    width: "35%",
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "left",
                    borderColor: "white",
                    borderStyle: "solid",
                    borderWidth: "0.5px 0 0 0.5px",
                    borderRadius:"20px", 
                    paddingInline: "30px",
                    paddingBlock: "20px",
                    zIndex: 2,
                    boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
                    backgroundColor: "rgba(0,0,0,0.4)"
                }}
            >
                <h3> Building a Product is Like Telling a Story</h3>
                <p> 
                    I like to think about the product in terms of the story of the challange it wishes to face.
                    Its story grows with every user interaction, line of code, and product decision,
                    until we have a living, breathing narrative of innovation and progress, shaped by the challenges the product overcomes, 
                    the solutions it offers, and the lives it touches.
                </p>
            </div>
            
        </div>
    );
}